// ============================================================
//  ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA CAMBIAR TU CONTENIDO
//  Todo el sitio lee de aquí. Cambia los textos y listo.
// ============================================================

export const perfil = {
  nombre: "Josset Portuguez",
  titulo: "Desarrollador de Software",
  // Una línea. Qué haces + para quién + con qué resultado.
  claim:
    "Construyo aplicaciones web y automatizaciones que reducen trabajo manual y hacen que los datos lleguen a tiempo a quien decide.",
  ubicacion: "Perú",
  email: "genry.alberto@agsantaazul.com",
  telefono: "", // opcional, ej. "+51 999 999 999"
  cvUrl: "/cv.pdf", // pon tu PDF en la carpeta public/ como cv.pdf
  disponible: true, // muestra el badge "Disponible para proyectos"

  redes: [
    { nombre: "GitHub", url: "https://github.com/tu-usuario" },
    { nombre: "LinkedIn", url: "https://linkedin.com/in/tu-usuario" },
  ],
} as const;

// ------------------------------------------------------------
//  SOBRE MÍ — 2 o 3 párrafos cortos. Escribe en primera persona.
// ------------------------------------------------------------
export const sobreMi = [
  "Soy desarrollador con foco en aplicaciones web y en resolver problemas reales de operación: procesos que hoy se hacen a mano, reportes que llegan tarde, información que vive en archivos sueltos.",
  "Trabajo de punta a punta: entiendo el proceso con el usuario, diseño la solución, la construyo y la dejo funcionando en producción. Me interesa que lo que entrego se use, no solo que compile.",
  "Actualmente busco sumar en un equipo donde pueda tomar responsabilidad técnica y seguir creciendo en arquitectura y buenas prácticas.",
];

// ------------------------------------------------------------
//  STACK — agrupa por categoría. Sé honesto: solo lo que puedas defender.
// ------------------------------------------------------------
export const stack = [
  { grupo: "Lenguajes", items: ["JavaScript", "TypeScript", "Python", "SQL", "C#"] },
  { grupo: "Frontend", items: ["React", "Astro", "Tailwind CSS", "HTML/CSS"] },
  { grupo: "Backend", items: ["Node.js", "Express", "REST APIs", ".NET"] },
  { grupo: "Datos", items: ["PostgreSQL", "SQL Server", "MySQL", "Power BI"] },
  { grupo: "Herramientas", items: ["Git", "Docker", "Linux", "Vercel"] },
];

// ------------------------------------------------------------
//  PROYECTOS — lo más importante del portfolio.
//  Regla: PROBLEMA -> QUÉ HICE -> RESULTADO (con número si puedes).
//  3 a 5 proyectos bien contados valen más que 12 a medias.
// ------------------------------------------------------------
export const proyectos = [
  {
    slug: "sistema-reportes",
    titulo: "Sistema de reportes operativos",
    resumen:
      "Panel web que centraliza indicadores de producción que antes se armaban a mano en Excel.",
    problema:
      "El reporte diario de producción se consolidaba manualmente desde varias fuentes y tomaba cerca de 2 horas cada mañana, con errores de tipeo frecuentes.",
    solucion:
      "Desarrollé una aplicación web que se conecta directo a la base de datos, calcula los indicadores y publica el reporte automáticamente. Incluye filtros por fecha, área y exportación a Excel.",
    resultado: [
      "Tiempo de consolidación: de ~2 h a menos de 1 minuto",
      "Cero errores de transcripción desde su implementación",
      "Lo usan a diario 12 personas de 3 áreas",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    repo: "", // ej. "https://github.com/tu-usuario/proyecto"
    demo: "", // ej. "https://mi-demo.vercel.app"
    destacado: true,
  },
  {
    slug: "automatizacion-procesos",
    titulo: "Automatización de carga de datos",
    resumen:
      "Script programado que reemplazó un proceso manual de importación de archivos.",
    problema:
      "Cada semana alguien tenía que descargar archivos, limpiarlos y subirlos al sistema. Si esa persona faltaba, el proceso no se hacía.",
    solucion:
      "Construí un proceso en Python que descarga, valida y carga los datos de forma programada, con log de errores y aviso por correo cuando algo falla.",
    resultado: [
      "Proceso 100 % desatendido, corre 3 veces por semana",
      "~6 horas de trabajo manual eliminadas al mes",
      "Validaciones que antes no existían: los datos malos se detectan antes de entrar",
    ],
    stack: ["Python", "SQL Server", "Task Scheduler"],
    repo: "",
    demo: "",
    destacado: true,
  },
  {
    slug: "portafolio-web",
    titulo: "Este portafolio",
    resumen:
      "Sitio estático construido con Astro y Tailwind, desplegado con CI en cada push.",
    problema:
      "Necesitaba una presencia profesional propia, rápida y fácil de mantener, sin depender de plantillas cerradas.",
    solucion:
      "Lo construí con Astro (HTML estático, cero JavaScript innecesario), Tailwind para el diseño y despliegue automático en cada commit.",
    resultado: [
      "Carga en menos de 1 segundo, puntuación alta en Lighthouse",
      "Contenido centralizado en un solo archivo de datos",
      "Despliegue automático: push a main = sitio actualizado",
    ],
    stack: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
    repo: "",
    demo: "",
    destacado: false,
  },
];

// ------------------------------------------------------------
//  EXPERIENCIA — enfócate en logros, no en tareas.
//  Mal: "Encargado de dar soporte a usuarios".
//  Bien: "Reduje el tiempo de respuesta de soporte de 3 días a 8 horas".
// ------------------------------------------------------------
export const experiencia = [
  {
    puesto: "Tu puesto actual",
    empresa: "Tu empresa",
    periodo: "2024 — Actualidad",
    logros: [
      "Logro concreto con número o impacto medible.",
      "Segundo logro: qué construiste y qué cambió por eso.",
      "Tercer logro: alcance (cuántos usuarios, cuántas áreas, cuánto ahorro).",
    ],
  },
  {
    puesto: "Puesto anterior",
    empresa: "Empresa anterior",
    periodo: "2022 — 2024",
    logros: [
      "Logro concreto.",
      "Otro logro con impacto.",
    ],
  },
];

// ------------------------------------------------------------
//  FORMACIÓN Y CERTIFICACIONES
// ------------------------------------------------------------
export const formacion = [
  { titulo: "Tu carrera o técnico", institucion: "Tu institución", periodo: "2018 — 2023" },
  { titulo: "Certificación relevante", institucion: "Emisor", periodo: "2024" },
];
