export const WHATSAPP_NUMBER = "51940889801";
export const WHATSAPP_DISPLAY = "940 889 801";

export function whatsappLink(message) {
  const text = encodeURIComponent(
    message || "Hola Avitare Construcciones, quisiera solicitar una asesoría."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const SERVICES = [
  {
    slug: "independizacion-de-inmuebles",
    title: "Independización de Inmuebles",
    summary:
      "Convertimos un solo inmueble en unidades independientes, permitiendo que cada propiedad cuente con su propia partida registral.",
    details:
      "Cuando un predio o edificación pertenece a varios copropietarios, o cuando quieres vender, heredar o financiar una parte específica de tu propiedad, es necesario que cada unidad tenga su propia identidad legal ante Registros Públicos. Nos encargamos de todo el proceso técnico y documentario: desde la elaboración de planos y memoria descriptiva hasta la presentación y seguimiento del expediente, para que cada unidad quede debidamente independizada y pueda transferirse o hipotecarse de forma individual.",
    benefits: [
      "Facilita la venta de una parte del inmueble.",
      "Incrementa el valor de la propiedad.",
      "Mayor seguridad jurídica.",
      "Cumplimiento de los requisitos legales.",
    ],
  },
  {
    slug: "asesorias-personalizadas",
    title: "Asesorías Personalizadas",
    summary:
      "Cada proyecto es diferente. Analizamos tu caso y te brindamos soluciones adaptadas a tus necesidades.",
    details:
      "Antes de iniciar cualquier trámite conviene tener claridad sobre el camino correcto a seguir: qué procedimiento aplica, qué documentos se necesitan y cuánto tiempo puede tomar. En esta primera evaluación revisamos la situación específica de tu propiedad o proyecto, identificamos posibles observaciones o riesgos, y te explicamos con lenguaje sencillo las opciones disponibles para que tomes la mejor decisión con respaldo profesional.",
    benefits: [
      "Te ayudamos a tomar decisiones con respaldo profesional antes de iniciar cualquier trámite o proyecto.",
    ],
  },
  {
    slug: "saneamiento-fisico-legal",
    title: "Saneamiento Físico Legal",
    summary:
      "Regularizamos la situación física y legal de tu propiedad para evitar futuros inconvenientes.",
    details:
      "Es común que una propiedad presente diferencias entre lo construido físicamente y lo que figura registrado: linderos, áreas, propietarios o cargas desactualizadas. Este desorden puede complicar una venta, herencia o trámite bancario. Evaluamos la situación registral y física de tu inmueble, identificamos las inconsistencias y gestionamos su corrección ante las entidades correspondientes hasta dejar tu propiedad completamente en regla.",
    benefits: [
      "Corrección de información registral.",
      "Actualización de documentación.",
      "Solución de observaciones.",
      "Acompañamiento durante todo el proceso.",
    ],
  },
  {
    slug: "subdivisiones-y-particiones",
    title: "Subdivisiones y Particiones",
    summary:
      "Organizamos y distribuimos terrenos o propiedades de manera técnica y legal.",
    details:
      "Ya sea que quieras dividir un terreno en lotes para vender por separado, repartir un bien heredado entre varios beneficiarios, o planificar un proyecto inmobiliario por etapas, el proceso requiere planos técnicos aprobados y una correcta formalización legal. Te acompañamos en el diseño técnico de la división y en la tramitación ante la municipalidad y Registros Públicos, para que cada lote o unidad resultante quede legalmente independizado.",
    benefits: ["Herencias.", "Venta por lotes.", "Desarrollo inmobiliario.", "División patrimonial."],
    benefitsLabel: "Ideal para:",
  },
  {
    slug: "declaratoria-de-fabrica",
    title: "Declaratoria de Fábrica",
    summary:
      "Formalizamos edificaciones que aún no se encuentran inscritas en los Registros Públicos.",
    details:
      "Si construiste, ampliaste o remodelaste una vivienda o local y esa construcción aún no figura inscrita, tu propiedad no refleja su valor real ni cuenta con el respaldo legal necesario. Elaboramos la documentación técnica requerida (planos, memoria descriptiva, valorización) y gestionamos el trámite municipal y registral para que tu edificación quede formalmente reconocida ante la ley.",
    benefits: [
      "Acreditar oficialmente tu construcción.",
      "Facilitar ventas y transferencias.",
      "Acceder a financiamiento.",
      "Obtener mayor seguridad legal.",
    ],
    benefitsLabel: "Con este trámite podrás:",
  },
  {
    slug: "regularizacion-de-edificaciones",
    title: "Regularización de Edificaciones",
    summary:
      "Si realizaste ampliaciones o construcciones sin registrar, nosotros te ayudamos a poner toda tu documentación en regla.",
    details:
      "Muchas construcciones se levantan por etapas, sin licencia previa o con modificaciones respecto al proyecto original aprobado. Esto puede generar observaciones al momento de vender, heredar o acceder a un crédito. Evaluamos tu caso particular y gestionamos la regularización ante la municipalidad y Registros Públicos, cubriendo desde viviendas unifamiliares hasta edificios y locales comerciales.",
    benefits: ["Viviendas.", "Edificios.", "Locales comerciales.", "Ampliaciones.", "Remodelaciones."],
    benefitsLabel: "Regularizamos:",
  },
  {
    slug: "inscripcion-de-predios",
    title: "Inscripción de Predios",
    summary:
      "Gestionamos la inscripción de tu propiedad en los Registros Públicos para brindarte seguridad jurídica y respaldo legal.",
    details:
      "Un predio que no está inscrito ante Registros Públicos no cuenta con la protección legal que te acredita como propietario frente a terceros, lo que puede generar conflictos o dificultar su venta o herencia. Revisamos la documentación disponible de tu terreno o propiedad y gestionamos todo el procedimiento de primera inscripción, dándole seguimiento hasta obtener tu partida registral.",
    benefits: ["Nos encargamos del seguimiento del trámite hasta su culminación."],
  },
];

export const TEAM = [
  {
    slug: "gerente-general",
    name: "Miguel Olenko Perez Yuyez",
    role: "Gerente General",
  },
  {
    slug: "arquitecta",
    name: "Paulina Garcia Gonzales",
    role: "Arquitecta",
  },
  {
    slug: "asistente-legal",
    name: "Paula Girón Huanilo",
    role: "Asistente Legal",
  },
];

export const WHY_US = [
  "Profesionales especializados en gestión técnica y legal.",
  "Atención personalizada según las necesidades de cada cliente.",
  "Acompañamiento durante todo el proceso.",
  "Trámites seguros y transparentes.",
  "Experiencia en regularización, saneamiento e independización de inmuebles.",
  "Soluciones rápidas y eficientes.",
];

export const PROCESS_STEPS = [
  {
    title: "Evaluamos tu caso",
    description: "Escuchamos tus necesidades y revisamos la documentación disponible.",
  },
  {
    title: "Diseñamos la mejor solución",
    description: "Nuestros especialistas determinan el procedimiento técnico y legal más adecuado.",
  },
  {
    title: "Ejecutamos el trámite",
    description: "Gestionamos cada etapa del proceso con transparencia y eficiencia.",
  },
  {
    title: "Entregamos resultados",
    description: "Obtienes tu propiedad formalizada, regularizada y con total respaldo.",
  },
];

export const AUDIENCE = [
  { label: "Propietarios de viviendas", icon: "house" },
  { label: "Dueños de terrenos", icon: "land" },
  { label: "Empresas", icon: "company" },
  { label: "Constructoras", icon: "crane" },
  { label: "Inversionistas inmobiliarios", icon: "invest" },
  { label: "Familias que desean regularizar su patrimonio", icon: "family" },
];

// TODO: reemplazar con testimonios reales de clientes (nombre, servicio y comentario).
export const TESTIMONIALS = [
  {
    name: "Lorem Ipsum",
    service: "Independización de Inmuebles",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    name: "Lorem Ipsum",
    service: "Saneamiento Físico Legal",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
  },
  {
    name: "Lorem Ipsum",
    service: "Declaratoria de Fábrica",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "¿Qué es el saneamiento físico legal?",
    answer:
      "Es el proceso mediante el cual se regulariza la situación técnica y legal de un inmueble para garantizar que toda su documentación esté correctamente inscrita.",
  },
  {
    question: "¿Qué documentos necesito para empezar?",
    answer:
      "Generalmente partimos de tu título de propiedad o partida registral, documento de identidad y planos si los tienes. Si no cuentas con todos, no hay problema: en la asesoría te indicamos cómo obtenerlos o cómo continuar.",
  },
  {
    question: "¿Cuánto demora un trámite?",
    answer:
      "El tiempo varía según el tipo de servicio y las entidades involucradas. Durante la asesoría te brindaremos un plazo estimado.",
  },
  {
    question: "¿Cuánto cuesta un trámite?",
    answer:
      "El costo depende del tipo de servicio, la complejidad del caso y las entidades involucradas. La primera asesoría es gratuita y en ella te brindamos una cotización clara antes de iniciar cualquier gestión.",
  },
  {
    question: "¿Atienden solo en Chiclayo o también en otras zonas?",
    answer:
      "Estamos ubicados en Chiclayo y atendemos principalmente casos en la región Lambayeque. Escríbenos por WhatsApp contándonos dónde se ubica tu propiedad y te confirmamos si podemos ayudarte.",
  },
];

export const SOCIAL_LINKS = [
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61591205856932", icon: "facebook" },
  { name: "Instagram", url: "https://www.instagram.com/reel/Da1Nql3tsWk/?igsh=MTQzaGI2a2U4a3Q5ZA==", icon: "instagram" },
  { name: "TikTok", url: "https://vt.tiktok.com/ZSXAM1VP8/", icon: "tiktok" },
];

export const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/faq", label: "Preguntas Frecuentes" },
  { to: "/contacto", label: "Contacto" },
];
