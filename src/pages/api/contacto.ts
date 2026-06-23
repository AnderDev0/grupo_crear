import type { APIRoute } from 'astro';
import { z } from 'zod';

export const prerender = false;

const ContactSchema = z.object({
  nombre: z
    .string({ required_error: 'El nombre es requerido.' })
    .min(2, 'El nombre debe tener al menos 2 caracteres.')
    .max(100, 'El nombre no puede superar 100 caracteres.')
    .trim(),
  email: z
    .string({ required_error: 'El correo es requerido.' })
    .email('Ingresa un correo electrónico válido.')
    .max(254, 'El correo no puede superar 254 caracteres.')
    .toLowerCase(),
  empresa: z
    .string()
    .max(100, 'El nombre de empresa no puede superar 100 caracteres.')
    .trim()
    .optional(),
  mensaje: z
    .string({ required_error: 'El mensaje es requerido.' })
    .min(10, 'El mensaje debe tener al menos 10 caracteres.')
    .max(2000, 'El mensaje no puede superar 2000 caracteres.')
    .trim(),
});

function sanitize(value: string): string {
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/&lt;/gi, '')
    .replace(/&gt;/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
}

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
};

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, message: 'Método no permitido.' }),
      { status: 405, headers: { ...JSON_HEADERS, Allow: 'POST' } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: 'JSON inválido o malformado.' }),
      { status: 400, headers: JSON_HEADERS }
    );
  }

  const result = ContactSchema.safeParse(body);

  if (!result.success) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error de validación.',
        errors: result.error.flatten(),
      }),
      { status: 422, headers: JSON_HEADERS }
    );
  }

  const { nombre, email, empresa, mensaje } = result.data;

  const safe = {
    nombre: sanitize(nombre),
    email: sanitize(email),
    empresa: empresa ? sanitize(empresa) : undefined,
    mensaje: sanitize(mensaje),
  };

  // Aquí iría la integración con un servicio de correo (Resend, SendGrid, etc.)
  // Por ahora logueamos en servidor y retornamos éxito.
  console.info('[contacto] Nuevo mensaje de:', safe.email, '— nombre:', safe.nombre);

  return new Response(
    JSON.stringify({
      success: true,
      message: '¡Gracias por contactarnos! Te responderemos a la brevedad.',
    }),
    { status: 200, headers: JSON_HEADERS }
  );
};

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({ success: false, message: 'Método no permitido.' }),
    { status: 405, headers: { ...JSON_HEADERS, Allow: 'POST' } }
  );
