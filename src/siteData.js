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
    benefits: [
      "Te ayudamos a tomar decisiones con respaldo profesional antes de iniciar cualquier trámite o proyecto.",
    ],
  },
  {
    slug: "saneamiento-fisico-legal",
    title: "Saneamiento Físico Legal",
    summary:
      "Regularizamos la situación física y legal de tu propiedad para evitar futuros inconvenientes.",
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
    benefits: ["Herencias.", "Venta por lotes.", "Desarrollo inmobiliario.", "División patrimonial."],
    benefitsLabel: "Ideal para:",
  },
  {
    slug: "declaratoria-de-fabrica",
    title: "Declaratoria de Fábrica",
    summary:
      "Formalizamos edificaciones que aún no se encuentran inscritas en los Registros Públicos.",
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
    benefits: ["Viviendas.", "Edificios.", "Locales comerciales.", "Ampliaciones.", "Remodelaciones."],
    benefitsLabel: "Regularizamos:",
  },
  {
    slug: "inscripcion-de-predios",
    title: "Inscripción de Predios",
    summary:
      "Gestionamos la inscripción de tu propiedad en los Registros Públicos para brindarte seguridad jurídica y respaldo legal.",
    benefits: ["Nos encargamos del seguimiento del trámite hasta su culminación."],
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
  "Propietarios de viviendas.",
  "Dueños de terrenos.",
  "Empresas.",
  "Constructoras.",
  "Inversionistas inmobiliarios.",
  "Familias que desean regularizar su patrimonio.",
];

export const FAQS = [
  {
    question: "¿Qué es el saneamiento físico legal?",
    answer:
      "Es el proceso mediante el cual se regulariza la situación técnica y legal de un inmueble para garantizar que toda su documentación esté correctamente inscrita.",
  },
  {
    question: "¿Qué necesito para independizar mi inmueble?",
    answer:
      "Dependerá de cada caso. Nuestro equipo evaluará la documentación y te indicará los requisitos específicos.",
  },
  {
    question: "¿Puedo regularizar una construcción antigua?",
    answer: "Sí. Analizamos cada caso para determinar el procedimiento correspondiente.",
  },
  {
    question: "¿Cuánto demora un trámite?",
    answer:
      "El tiempo varía según el tipo de servicio y las entidades involucradas. Durante la asesoría te brindaremos un plazo estimado.",
  },
  {
    question: "¿Qué es la declaratoria de fábrica y cuándo la necesito?",
    answer:
      "Es el trámite que formaliza ante Registros Públicos una edificación construida que aún no figura inscrita. La necesitas si construiste, ampliaste o remodelaste tu inmueble y quieres que esas obras consten oficialmente en tu partida registral.",
  },
  {
    question: "¿Cuál es la diferencia entre subdivisión, independización y partición?",
    answer:
      "La subdivisión divide un terreno en lotes independientes; la independización separa unidades dentro de una edificación, como departamentos; y la partición distribuye un bien entre varios propietarios, por ejemplo en una herencia. Durante la asesoría te orientamos sobre cuál aplica a tu caso.",
  },
  {
    question: "¿Por qué es importante inscribir mi predio en Registros Públicos?",
    answer:
      "La inscripción te da seguridad jurídica: acredita quién es el propietario ante terceros, facilita la venta o herencia del bien y evita conflictos futuros por falta de documentación registral.",
  },
  {
    question: "¿En qué consisten las asesorías personalizadas?",
    answer:
      "Evaluamos la situación específica de tu propiedad o proyecto antes de iniciar cualquier trámite, para indicarte el procedimiento más adecuado, los documentos que necesitarás y los pasos a seguir.",
  },
  {
    question: "¿Cuánto cuesta un trámite?",
    answer:
      "El costo depende del tipo de servicio, la complejidad del caso y las entidades involucradas. La primera asesoría es gratuita y en ella te brindamos una cotización clara antes de iniciar cualquier gestión.",
  },
  {
    question: "¿Qué documentos necesito para empezar?",
    answer:
      "Generalmente partimos de tu título de propiedad o partida registral, documento de identidad y planos si los tienes. Si no cuentas con todos, no hay problema: en la asesoría te indicamos cómo obtenerlos o cómo continuar.",
  },
  {
    question: "¿Atienden solo en Chiclayo o también en otras zonas?",
    answer:
      "Estamos ubicados en Chiclayo y atendemos principalmente casos en la región Lambayeque. Escríbenos por WhatsApp contándonos dónde se ubica tu propiedad y te confirmamos si podemos ayudarte.",
  },
  {
    question: "¿Qué pasa si mi trámite tiene observaciones en Registros Públicos?",
    answer:
      "Te acompañamos durante todo el proceso, incluyendo la subsanación de observaciones, hasta lograr la inscripción definitiva.",
  },
  {
    question: "¿Puedo tramitar si no tengo planos o mi construcción no cuenta con licencia?",
    answer:
      "Sí. Muchos casos de regularización parten justamente de construcciones sin licencia o sin planos. Evaluamos tu situación y te indicamos la vía correspondiente para formalizarla.",
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
