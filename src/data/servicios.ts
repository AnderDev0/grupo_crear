export interface Entregable {
  svg: string;
  nombre: string;
  desc: string;
}

export interface Foto {
  src: string; // ruta desde /public, ej. /servicios/impresion-gran-formato/archivo.webp
  alt: string; // descripción accesible de la pieza física
}

export interface Servicio {
  slug: string;
  numero: string;
  nombre: string;
  nombreCorto: string;
  descripcionCorta: string;
  descripcionLarga: string;
  chips: string[];
  entregables: Entregable[];
  fotos: Foto[];          // se llenan al subir las fotos clasificadas por servicio
  fotoPrincipal: string;  // fondo de la bento card (usa gradiente si está vacío)
  whatsappText: string;   // texto URL-encoded para pre-llenar WhatsApp
  gradiente: string;      // fallback CSS gradient cuando no hay foto
}

export const servicios: Servicio[] = [
  {
    slug: 'impresion-gran-formato',
    numero: '01',
    nombre: 'Impresión Gran Formato',
    nombreCorto: 'Gran Formato',
    descripcionCorta: 'Vallas, pendones, lonas y backlight con calidad fotográfica y color fiel a tu marca.',
    descripcionLarga:
      'Producción e impresión de gran escala para cualquier superficie. Trabajamos con los mejores materiales del mercado y tecnología de punta para garantizar colores exactos a tu manual de marca, sin importar el tamaño o el soporte.',
    chips: ['Vallas', 'Pendones', 'Backlight'],
    entregables: [
      { svg: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7', nombre: 'Vallas publicitarias', desc: 'Hasta 10×4 m, exterior e interior, con estructura.' },
      { svg: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 0 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 0-2-2V9m0 0h18', nombre: 'Pendones y lonas', desc: 'Lona blackout, mesh y vinilo con bolsillo.' },
      { svg: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', nombre: 'Backlight y Frontlight', desc: 'Cajas de luz con iluminación LED integrada.' },
      { svg: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', nombre: 'Stands de exhibición', desc: 'Estructura, armatoste y gráfica integrados.' },
      { svg: 'M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h1z', nombre: 'Adhesivos y vinilos', desc: 'Corte, troquel y aplicación a la medida.' },
      { svg: 'M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H6a2 2 0 0 1-2 2v12a2 2 0 0 1 2 2z', nombre: 'Canvas y lienzos', desc: 'Arte fino y decoración corporativa de alto impacto.' },
    ],
    // Carpeta en /public: /Servicios/Impresion_Gran%20formato/
    // Renombrar a minúsculas sin espacios si se cambia la carpeta.
    fotos: [
      { src: '/Servicios/Impresion_Gran%20formato/panoramica-exhibicion-museo-memoria.webp',         alt: 'Vista panorámica de la exhibición al aire libre con paneles, la carpa del Museo de Memoria de Colombia y edificios de Bogotá al fondo' },
      { src: '/Servicios/Impresion_Gran%20formato/modulo-museo-en-casa-frontal.webp',                 alt: 'Tótem expositivo verde de cuatro caras titulado Museo en casa, con fotografías y mapas departamentales, frente a un edificio en altura' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-bienvenida-memorias-vivas.webp',              alt: 'Panel expositivo negro de gran formato con el texto de bienvenida del pueblo Uitoto-Minika, en una plaza con edificios al fondo' },
      { src: '/Servicios/Impresion_Gran%20formato/modulos-endulzar-la-palabra.webp',                  alt: 'Módulos expositivos verdes con el panel Endulzar la palabra y fotografías, frente al perfil urbano de la ciudad' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-mapa-pueblos-indigenas.webp',                 alt: 'Primer plano de un panel turquesa de gran formato titulado Mapa de ubicación de pueblos indígenas participantes' },
      { src: '/Servicios/Impresion_Gran%20formato/totem-pueblo-uitoto-minika.webp',                   alt: 'Tótem expositivo verde del pueblo Uitoto-Minika con fotografías de la Amazonia, junto a otros módulos de la exhibición entre árboles' },
      { src: '/Servicios/Impresion_Gran%20formato/modulo-territorios-vista-frontal.webp',             alt: 'Módulo expositivo tipo caja de madera abierto, con paneles verdes titulados Territorios y un tablero interior' },
      { src: '/Servicios/Impresion_Gran%20formato/modulo-territorios-vista-lateral.webp',             alt: 'Vista lateral del módulo-caja de madera Territorios abierto, mostrando su estructura interna, con árboles al fondo' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-resistencias-historicas-vitrales.webp',       alt: 'Atril expositivo ocre titulado Resistencias Históricas de los pueblos indígenas, junto a arcos con vitrales y montañas con niebla' },
      { src: '/Servicios/Impresion_Gran%20formato/actividad-piso-linea-del-tiempo.webp',              alt: 'Gráfica de piso amarilla con una línea de tiempo impresa y materiales de taller como marcadores, tijeras y notas adhesivas' },
      { src: '/Servicios/Impresion_Gran%20formato/carpa-entrada-museo-memoria.webp',                  alt: 'Lona impresa en la entrada de una carpa con el título Museo de Memoria de Colombia y el logo del Gobierno de Colombia' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-ruama-ithuhkuna-wiwa.webp',                   alt: 'Panel expositivo vertical azul titulado Ruama Ithuhkuna con una fotografía del pueblo Wiwa y código QR, sobre base de concreto' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-ubicacion-pueblo-wiwa.webp',                  alt: 'Panel azul de gran formato con el mapa de Ubicación del pueblo Wiwa, montado en una estructura metálica sobre piso de ladrillo' },
      { src: '/Servicios/Impresion_Gran%20formato/modulo-museo-en-casa-vitrales.webp',                alt: 'Tótem expositivo Museo en casa visto en ángulo, junto a arcos con vitrales de colores y otro panel de la exhibición' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-sanacion-colectiva-vitrales.webp',            alt: 'Panel expositivo verde oliva con la pregunta ¿Por qué es importante la sanación colectiva? y fotografías, junto a arcos con vitrales' },
      { src: '/Servicios/Impresion_Gran%20formato/modulos-sanacion-colectiva-museo-casa.webp',        alt: 'Dos módulos expositivos en la plaza: al frente el panel de sanación colectiva y detrás el tótem Museo en casa, entre árboles' },
      { src: '/Servicios/Impresion_Gran%20formato/modulo-fuerza-de-lo-colectivo-detalle.webp',        alt: 'Detalle del módulo-caja La fuerza de lo colectivo del pueblo Nasa, con mesa de trabajo, lanas y materiales para una actividad' },
      { src: '/Servicios/Impresion_Gran%20formato/modulo-fuerza-de-lo-colectivo-general.webp',        alt: 'Vista general del módulo-caja La fuerza de lo colectivo abierto, con interior rojo y una red de hilos y notas tejida por visitantes' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-afectaciones-al-territorio-wiwa.webp',        alt: 'Panel azul de gran formato titulado Afectaciones al territorio con un mapa cartográfico del pueblo Wiwa y código QR' },
      { src: '/Servicios/Impresion_Gran%20formato/totem-pueblo-pasto.webp',                           alt: 'Tótem expositivo azul del pueblo Pasto con la imagen de un volcán y fotografías, en una plaza con piso de ladrillo' },
      { src: '/Servicios/Impresion_Gran%20formato/totem-pueblo-wiwa.webp',                            alt: 'Tótem expositivo azul del pueblo Wiwa con fotografías de ceremonias, junto a un panel magenta de la exhibición' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-wet-wet-fxinzenxi-nasa.webp',                 alt: 'Primer plano de un panel magenta de gran formato titulado Wet wet fxinzenxi – Armonía y equilibrio del pueblo Nasa, con código QR' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-bienvenida-pueblo-pasto.webp',                alt: 'Panel expositivo color vino del pueblo Pasto con texto de bienvenida y código QR, junto a una banca de madera en la plaza' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-el-hilo-de-las-mujeres.webp',                 alt: 'Panel magenta de gran formato titulado El hilo de las mujeres con una fotografía de mujeres de la guardia indígena, frente a edificios' },
      { src: '/Servicios/Impresion_Gran%20formato/modulos-pueblo-wiwa-vista-general.webp',            alt: 'Vista general de varios módulos expositivos en la plaza, con el tótem azul del pueblo Wiwa al centro y un visitante observando' },
      { src: '/Servicios/Impresion_Gran%20formato/paneles-pueblo-bari-cuanto-tiempo-sanar.webp',      alt: 'Dos paneles expositivos naranjas, uno con la pregunta ¿Cuánto tiempo toma sanar? del pueblo Barí, y detrás un tótem del pueblo Nasa' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-sanacion-colectiva-catatumbo-nasa.webp',      alt: 'Panel naranja ¿Por qué es importante la sanación colectiva? con fotografías del Catatumbo, junto al tótem del pueblo Nasa y rascacielos' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-sanacion-colectiva-catatumbo-frontal.webp',   alt: 'Vista frontal del panel naranja ¿Por qué es importante la sanación colectiva? con fotografías del Catatumbo y la torre del DNP al fondo' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-sanacion-colectiva-kamentsa.webp',            alt: 'Paneles expositivos verdes del pueblo Kamëntsá con fotografías en blanco y negro, frente a torres de la ciudad' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-sanacion-colectiva-catatumbo-edificio.webp',  alt: 'Panel naranja de sanación colectiva con fotografías del Catatumbo, frente a un edificio de ladrillo y vegetación' },
      { src: '/Servicios/Impresion_Gran%20formato/modulos-pueblo-bari-y-kamentsa.webp',               alt: 'Módulos del pueblo Barí, con un panel color teja y, al lado, el tótem del pueblo Kamëntsá con una fotografía en blanco y negro' },
      { src: '/Servicios/Impresion_Gran%20formato/modulos-pueblo-awa.webp',                           alt: 'Tres paneles expositivos azules del pueblo Awá, incluido un mapa de ubicación, en una plaza con palmeras y edificios al fondo' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-conservacion-territorio-katsa-su.webp',       alt: 'Panel azul de gran formato La lucha por la conservación del Territorio Grande Katsa Su, con fotografía de montaña y código QR' },
      { src: '/Servicios/Impresion_Gran%20formato/banca-patron-geometrico-azul.webp',                 alt: 'Banca de madera intervenida con un patrón geométrico azul de líneas y círculos, sobre piso de ladrillo' },
      { src: '/Servicios/Impresion_Gran%20formato/banca-patron-indigena-ocre.webp',                   alt: 'Banca de madera color ocre con grecas indígenas azules de zigzags, octágonos y puntos, sobre piso de ladrillo' },
    ],
    fotoPrincipal: '/Servicios/Impresion_Gran%20formato/panoramica-exhibicion-museo-memoria.webp',
    whatsappText: encodeURIComponent('Hola, me interesa cotizar Impresión Gran Formato para mi empresa.'),
    gradiente: 'linear-gradient(135deg,#0a2d6b 0%,#001433 100%)',
  },
  {
    slug: 'material-pop',
    numero: '02',
    nombre: 'Material P.O.P',
    nombreCorto: 'Material POP',
    descripcionCorta: 'Exhibidores, displays y activaciones de punto de venta diseñados para impulsar la decisión de compra.',
    descripcionLarga:
      'Material POP estratégico que convierte browsers en compradores. Diseñamos y producimos toda la familia de materiales de punto de venta: desde el stopper de góndola hasta el exhibidor de isla, todos alineados al visual merchandising de tu marca.',
    chips: ['Exhibidores', 'Displays', 'Stoppers'],
    entregables: [
      { svg: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', nombre: 'Exhibidores de góndola', desc: 'Stoppers, dangler y cuelgaprecio.' },
      { svg: 'M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10', nombre: 'Displays de mostrador', desc: 'Porta-folletos, porta-tarjetas y bases de producto.' },
      { svg: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 0 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 0-2-2V9m0 0h18', nombre: 'Islas y degustación', desc: 'Estructura y gráfica para activaciones en piso.' },
      { svg: 'M7 20l4-16m2 16l4-16M6 9h14M4 15h14', nombre: 'Cenefas de góndola', desc: 'Branding lineal en punto de venta.' },
      { svg: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2', nombre: 'Folletos y catálogos', desc: 'Diseño editorial e impresión de alta calidad.' },
      { svg: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5z', nombre: 'Empaques y cajas', desc: 'Packaging con diseño y troquel personalizados.' },
    ],
    // Fotos compartidas desde el proyecto Museo de Memoria — módulos, tótems, bancas y gráficas de piso
    // son la evidencia más sólida de capacidad POP/exhibición de Grupo Crear.
    fotos: [
      { src: '/Servicios/Impresion_Gran%20formato/modulo-museo-en-casa-frontal.webp',          alt: 'Tótem expositivo de cuatro caras con fotografías y mapas departamentales, frente a un edificio en altura' },
      { src: '/Servicios/Impresion_Gran%20formato/modulo-museo-en-casa-vitrales.webp',         alt: 'Tótem expositivo visto en ángulo junto a arcos con vitrales de colores y otro módulo de la exhibición' },
      { src: '/Servicios/Impresion_Gran%20formato/modulo-territorios-vista-frontal.webp',      alt: 'Módulo expositivo tipo caja de madera abierto con paneles informativos y tablero interior' },
      { src: '/Servicios/Impresion_Gran%20formato/modulo-territorios-vista-lateral.webp',      alt: 'Vista lateral de módulo-caja de madera abierto mostrando su estructura interna con árboles al fondo' },
      { src: '/Servicios/Impresion_Gran%20formato/modulo-fuerza-de-lo-colectivo-general.webp', alt: 'Módulo-caja expositivo abierto con interior rojo y red de hilos y notas tejida por visitantes' },
      { src: '/Servicios/Impresion_Gran%20formato/modulo-fuerza-de-lo-colectivo-detalle.webp', alt: 'Detalle de módulo-caja con mesa de trabajo, lanas y materiales para actividad participativa' },
      { src: '/Servicios/Impresion_Gran%20formato/actividad-piso-linea-del-tiempo.webp',       alt: 'Gráfica de piso amarilla con línea de tiempo impresa y materiales de taller sobre el pavimento' },
      { src: '/Servicios/Impresion_Gran%20formato/banca-patron-geometrico-azul.webp',          alt: 'Banca de madera intervenida con patrón geométrico azul de líneas y círculos sobre piso de ladrillo' },
      { src: '/Servicios/Impresion_Gran%20formato/banca-patron-indigena-ocre.webp',            alt: 'Banca de madera color ocre con grecas indígenas azules de zigzags, octágonos y puntos' },
      { src: '/Servicios/Impresion_Gran%20formato/modulos-sanacion-colectiva-museo-casa.webp', alt: 'Dos módulos expositivos en plaza: panel de sanación colectiva y tótem Museo en casa entre árboles' },
      { src: '/Servicios/Impresion_Gran%20formato/modulos-pueblo-bari-y-kamentsa.webp',        alt: 'Sistema de módulos con panel color teja y tótem con fotografía en blanco y negro en plaza' },
      { src: '/Servicios/Impresion_Gran%20formato/panel-resistencias-historicas-vitrales.webp', alt: 'Atril expositivo de madera junto a arcos con vitrales y montañas con niebla al fondo' },
    ],
    fotoPrincipal: '/Servicios/Impresion_Gran%20formato/modulo-museo-en-casa-frontal.webp',
    whatsappText: encodeURIComponent('Hola, me interesa cotizar Material POP para activar mi punto de venta.'),
    gradiente: 'linear-gradient(135deg,#3a1306 0%,#04102a 100%)',
  },
  {
    slug: 'branding-identidad',
    numero: '03',
    nombre: 'Branding & Identidad',
    nombreCorto: 'Branding',
    descripcionCorta: 'Construcción y rediseño de marca: logo, manual, sistema visual y aplicaciones que generan confianza B2B.',
    descripcionLarga:
      'Una marca que no se ve profesional no se contrata. Construimos identidades visuales completas desde la estrategia hasta las aplicaciones: logo, tipografía corporativa, paleta de color, manual de identidad y todos los puntos de contacto visual de tu empresa.',
    chips: ['Logo', 'Manual de marca', 'Sistema Visual'],
    entregables: [
      { svg: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', nombre: 'Diseño de logotipo', desc: 'Versiones horizontal, vertical, ícono y variantes.' },
      { svg: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', nombre: 'Manual de identidad', desc: 'Reglas de uso, márgenes, tipografías y paleta.' },
      { svg: 'M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h1z', nombre: 'Papelería corporativa', desc: 'Tarjetas, sobres, hojas membretadas, carpetas.' },
      { svg: 'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z', nombre: 'Uniformes y dotación', desc: 'Aplicaciones de marca en textil.' },
      { svg: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', nombre: 'Señalización y ambiente', desc: 'Branding espacial para oficinas y locales.' },
      { svg: 'M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 0 0-9.78 2.096A4.001 4.001 0 0 0 3 15z', nombre: 'Templates digitales', desc: 'Plantillas para redes sociales y presentaciones.' },
    ],
    fotos: [],
    fotoPrincipal: '/alternativa_naranja3d.webp',
    whatsappText: encodeURIComponent('Hola, estoy interesado en el servicio de Branding e Identidad de Marca.'),
    gradiente: 'linear-gradient(135deg,#1a3b78 0%,#001433 100%)',
  },
  {
    slug: 'fotografia-publicitaria',
    numero: '04',
    nombre: 'Fotografía Publicitaria',
    nombreCorto: 'Fotografía',
    descripcionCorta: 'Producto, corporativa y editorial. Imágenes que refuerzan tu profesionalismo y atraen clientes de valor.',
    descripcionLarga:
      'Las imágenes son el primer juicio que hacen tus clientes sobre tu empresa. Producimos fotografía publicitaria de alto estándar: sesiones de producto, fotografía corporativa y editorial para que tu marca luzca exactamente como merece.',
    chips: ['Producto', 'Corporativa', 'Editorial'],
    entregables: [
      { svg: 'M3 7h3l1.5-2h9L18 7h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z M12 13.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z', nombre: 'Fotografía de producto', desc: 'Packshot, lifestyle y ambientada.' },
      { svg: 'M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z', nombre: 'Fotografía corporativa', desc: 'Equipo, instalaciones y cultura empresarial.' },
      { svg: 'M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H6a2 2 0 0 1-2 2v12a2 2 0 0 1 2 2z', nombre: 'Editorial y catálogos', desc: 'Fotografía para publicaciones impresas y digitales.' },
      { svg: 'M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7', nombre: 'Recorridos 360°', desc: 'Tour virtual para locales y showrooms.' },
      { svg: 'M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z', nombre: 'Video corporativo', desc: 'Cápsulas de marca y testimoniales.' },
      { svg: 'M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586z', nombre: 'Retoque y post-producción', desc: 'Edición profesional y color grading.' },
    ],
    fotos: [],
    fotoPrincipal: '',
    whatsappText: encodeURIComponent('Hola, quiero cotizar una sesión de Fotografía Publicitaria para mi empresa.'),
    gradiente: 'linear-gradient(135deg,#0a2550 0%,#04102a 100%)',
  },
  {
    slug: 'diseno-web',
    numero: '05',
    nombre: 'Diseño & Desarrollo Web',
    nombreCorto: 'Diseño Web',
    descripcionCorta: 'Sitios orientados a conversión con SEO técnico y local para que Google te encuentre antes que a la competencia.',
    descripcionLarga:
      'Un sitio web que no convierte es una tarjeta de presentación cara. Diseñamos y desarrollamos sitios web orientados a resultados: rápidos, bien posicionados en Google y construidos para convertir visitantes en clientes de manera sistemática.',
    chips: ['Conversión', 'SEO Local', 'Responsive'],
    entregables: [
      { svg: 'M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5zM4 13a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zM16 13a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6z', nombre: 'Diseño UI/UX', desc: 'Wireframes, prototipos y diseño visual final.' },
      { svg: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', nombre: 'Desarrollo frontend', desc: 'HTML, CSS, JS o frameworks modernos.' },
      { svg: 'M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z', nombre: 'SEO On-Page', desc: 'Optimización técnica, velocidad y estructura.' },
      { svg: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z', nombre: 'SEO Local', desc: 'Google My Business y posicionamiento por ciudad.' },
      { svg: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z', nombre: 'CMS y administración', desc: 'Panel de edición fácil para tu equipo.' },
      { svg: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z', nombre: 'Analytics y reportes', desc: 'Seguimiento de conversiones y tráfico mensual.' },
    ],
    fotos: [],
    fotoPrincipal: '',
    whatsappText: encodeURIComponent('Hola, quiero cotizar un sitio web para mi empresa con SEO incluido.'),
    gradiente: 'linear-gradient(135deg,#0a2d6b 0%,#001433 100%)',
  },
  {
    slug: 'campanas-integrales',
    numero: '06',
    nombre: 'Campañas Integrales',
    nombreCorto: 'Campañas',
    descripcionCorta: 'Del concepto a la producción: lanzamientos, temporadas y activaciones de marca con una sola dirección creativa.',
    descripcionLarga:
      'Una campaña integral es cuando todo habla al mismo tiempo. Dirigimos el concepto creativo y coordinamos todos los materiales: piezas impresas, gráficas digitales, fotografía y activaciones de punto de venta, todo con coherencia visual de principio a fin.',
    chips: ['Lanzamientos', 'Activaciones', 'Temporadas'],
    entregables: [
      { svg: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', nombre: 'Concepto creativo', desc: 'Big idea, key visual y mensajes clave.' },
      { svg: 'M9 17V7m0 10a2 2 0 0 1-2 2H5a2 2 0 0 0-2 2v-2a2 2 0 0 0 2-2h2a2 2 0 0 1 2 2zm0-10a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7zm6 10a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v-2a2 2 0 0 0 2-2h2a2 2 0 0 1 2 2zm0-10a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7z', nombre: 'Adaptaciones multi-formato', desc: 'Piezas adaptadas a todos los medios.' },
      { svg: 'M3 11l16-7-4 16-4-6-8-3z M11 14l3 3', nombre: 'Piezas digitales', desc: 'Stories, feed, banners y email marketing.' },
      { svg: 'M6 5h12M6 5l4 9m-4-9L2 9m16-4l4 4m-4-4l-4 4m4 4l4 4m-4-4l-4 4M2 13l4 4m-4-4l4-4', nombre: 'Materiales impresos', desc: 'Volantes, afiches, plegables y catálogos.' },
      { svg: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', nombre: 'Activaciones BTL', desc: 'Experiencias de marca en punto de contacto.' },
      { svg: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z', nombre: 'Dirección creativa unificada', desc: 'Un solo equipo, una sola voz de marca.' },
    ],
    fotos: [],
    fotoPrincipal: '',
    whatsappText: encodeURIComponent('Hola, me interesa cotizar una Campaña Integral para mi empresa.'),
    gradiente: 'linear-gradient(135deg,#b53c12 0%,#3a1306 100%)',
  },
];
