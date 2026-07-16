import type { APIRoute } from 'astro';
import { GoogleGenAI } from '@google/genai';
import { z } from 'zod';
import { servicios } from '../../data/servicios';

export const prerender = false;

const ChatMessageSchema = z.object({
  message: z
    .string()
    .min(1, 'El mensaje no puede estar vacío.')
    .max(2000, 'El mensaje no puede superar los 2000 caracteres.'),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        parts: z.array(
          z.object({
            text: z.string().min(1).max(5000),
          })
        ),
      })
    )
    .default([]),
});

function sanitize(value: string): string {
  return value
    .replace(/<[^>]*>/g, '') // Elimina HTML tags
    .replace(/javascript:/gi, '')
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

  const apiKey = import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('[Chat API] Falta la variable de entorno GEMINI_API_KEY en import.meta.env y process.env.');
    return new Response(
      JSON.stringify({
        success: false,
        message: 'El servicio de chat de IA no está configurado en el servidor.',
      }),
      { status: 500, headers: JSON_HEADERS }
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

  const parseResult = ChatMessageSchema.safeParse(body);
  if (!parseResult.success) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Datos de solicitud inválidos.',
        errors: parseResult.error.flatten(),
      }),
      { status: 422, headers: JSON_HEADERS }
    );
  }

  const { message, history } = parseResult.data;
  const safeMessage = sanitize(message);

  try {
    const ai = new GoogleGenAI({ apiKey });

    // Construir la base de conocimientos a partir del archivo de servicios
    const servicesPrompt = servicios
      .map((s) => {
        const entregables = s.entregables.map((e) => `- ${e.nombre}: ${e.desc}`).join('\n');
        const pasos = s.pasos.map((p) => `${p.num}. ${p.titulo}: ${p.desc}`).join('\n');
        return `
SERVICIO: ${s.nombre} (${s.nombreCorto})
Identificador/Slug: ${s.slug}
Descripción breve: ${s.descripcionCorta}
Descripción detallada: ${s.descripcionLarga}
Etiquetas: ${s.chips.join(', ')}
Entregables que incluye:
${entregables}
Metodología / Pasos del trabajo:
${pasos}
`;
      })
      .join('\n---\n');

    const systemInstruction = `
Eres un asistente virtual de IA experto y sumamente amable para la empresa "Grupo Crear" (una agencia de publicidad y soluciones gráficas en Colombia).
Tu objetivo es responder preguntas de los usuarios y prospectos utilizando ÚNICAMENTE la información oficial de los servicios que se detalla a continuación.

INFORMACIÓN OFICIAL DE LOS SERVICIOS DE GRUPO CREAR:
${servicesPrompt}

DIRECTRICES IMPORTANTES DE COMPORTAMIENTO:
1. **Veracidad:** Responde basándote estrictamente en la información provista sobre los servicios. Si te preguntan algo de lo cual no tienes información (como precios exactos de cotizaciones personalizadas o servicios que no realizamos), indica amablemente que no tienes el dato y recomiéndales ponerse en contacto con un asesor comercial. No inventes servicios ni detalles.
2. **Idioma:** Responde siempre en español. Usa un tono profesional, servicial, cálido y moderno.
3. **Conversación fluida:** Responde de manera concisa y directa. Evita textos larguísimos que no quepan cómodamente en una pequeña ventana de chat móvil.
4. **Llamado a la Acción (CTA) con botón de WhatsApp:** Si el usuario expresa interés en cotizar, contratar, solicitar precios, iniciar un proyecto o ponerse en contacto directo con un asesor, indícale amablemente que puede hacerlo y obligatoriamente **añade al final de tu respuesta** el tag especial:
   [BOTON_WHATSAPP:Texto del mensaje con el que el usuario iniciará el chat]
   
   Ejemplos de cómo usar el tag:
   - Si quiere cotizar vallas: "... puedes cotizarlo directamente con un asesor comercial. [BOTON_WHATSAPP:Hola, me interesa cotizar una Impresión de Vallas Gran Formato]"
   - Si quiere cotizar diseño web: "... puedes escribirle a nuestro equipo de desarrollo. [BOTON_WHATSAPP:Hola, me gustaría cotizar el Diseño y Desarrollo Web para mi empresa]"
   - Si quiere hablar con un asesor en general: "... te pondremos en contacto inmediato con ventas. [BOTON_WHATSAPP:Hola, quiero hablar con un asesor comercial de Grupo Crear]"
   
   Reemplaza el texto interno del tag con un mensaje personalizado y específico que sea relevante a lo que el usuario está solicitando. Asegúrate de incluir el tag exactamente como se muestra (con corchetes, dos puntos y sin texto normal dentro del tag). Además, indícale que también puede rellenar el formulario de contacto de la página si lo prefiere.
5. **Formato:** Utiliza negrita y listas con viñetas cortas para organizar y resaltar detalles. Mantén el texto limpio de markdown complejo.
`;

    // Formatear el contenido de la conversación (historial + nuevo mensaje)
    const contents = [
      ...history,
      {
        role: 'user',
        parts: [{ text: safeMessage }],
      },
    ];

    // Llamada a Gemini 3.1 Flash-Lite
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents,
      config: {
        systemInstruction,
        // Limitar tokens de salida para respuestas concisas y evitar abusos
        maxOutputTokens: 800,
        temperature: 0.3, // Temperatura baja para que sea más factual y no invente
      },
    });

    const replyText = response.text || 'Disculpa, no logré procesar una respuesta en este momento. Inténtalo de nuevo.';

    return new Response(
      JSON.stringify({
        success: true,
        reply: replyText,
      }),
      { status: 200, headers: JSON_HEADERS }
    );
  } catch (error) {
    console.error('[Chat API Error]:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Ocurrió un error interno al procesar el chat con la IA.',
      }),
      { status: 500, headers: JSON_HEADERS }
    );
  }
};

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({ success: false, message: 'Método no permitido.' }),
    { status: 405, headers: { ...JSON_HEADERS, Allow: 'POST' } }
  );
