export const perfil = {
  nombre: "Josset Yair Portuguéz Rea",
  titulo: "Desarrollador Front-End",
  subtitulo: "Programador Web",
  descripcion:
    "Desarrollo web y soluciones digitales para empresas. Creo páginas web y aplicaciones que ayudan a negocios a mejorar su presencia digital, optimizar procesos y gestionar su información. Desarrollo interfaces modernas con React y Astro, integro APIs REST y trabajo con bases de datos para construir soluciones funcionales y adaptadas a cada necesidad.",
  contacto: {
    telefono: "+51924276198",
    email: "jossetpr@gmail.com",
    linkedin: "https://www.linkedin.com/in/josset-portuguez/",
    github: "https://github.com/Josset2912",
  },
  experiencia: [
    {
      empresa: "Agrícola Santa Azul S.R.L.",
      rol: "Programador Web / Auxiliar de TI",
      periodo: "Feb 2025 – Actualidad",
      sector: "Agroindustrial",
      descripcion:
        "Participación en el desarrollo, mantenimiento y soporte de soluciones tecnológicas para los procesos internos de una empresa del sector agroindustrial.",
      descripcion_en:
        "Development, maintenance, and support of technology solutions for the internal processes of an agroindustrial company.",
      logros: [
        "Desarrollo y mantenimiento de aplicaciones web internas.",
        "Integración de servicios mediante APIs REST.",
        "Trabajo con bases de datos y consultas SQL Server.",
        "Implementación y mantenimiento de funcionalidades para usuarios administrativos y operativos.",
        "Configuración y mantenimiento de aplicaciones en entornos IIS.",
        "Soporte técnico y atención de incidencias tecnológicas.",
      ],
      stack: [
        "React",
        "Astro",
        "JavaScript",
        "Tailwind CSS",
        "SQL Server",
        "Flutter",
        "Linux",
        "Raspberry Pi",
      ],
    },
    {
      empresa: "Naal Corporation S.A.C.",
      rol: "Practicante de Ciencia de Datos",
      periodo: "Abr 2024 – Ago 2024",
      sector: "Tecnológico",
      descripcion:
        "Participación en actividades de análisis de datos y desarrollo de soluciones basadas en aprendizaje automático, además de automatización de reportes.",
      descripcion_en:
        "Data analysis and development of machine learning solutions, plus automated reporting.",
      logros: [
        "Desarrollo de modelos de aprendizaje automático utilizando Python y TensorFlow.",
        "Preparación y análisis de información.",
        "Elaboración de reportes y dashboards mediante Power BI.",
        "Trabajo con bases de datos SQL Server.",
      ],
      stack: ["Python", "TensorFlow", "Keras", "Power BI", "SQL Server"],
    },
    {
      empresa: "Universidad Católica Sedes Sapientiae",
      rol: "Soporte Técnico y Mesa de Ayuda",
      periodo: "Ago 2022 – Jun 2023",
      sector: "Educativo",
      descripcion:
        "Soporte tecnológico a estudiantes y docentes, documentación de procesos y asistencia en el uso de herramientas informáticas.",
      descripcion_en:
        "Technical support for students and faculty, process documentation, and IT tool assistance.",
      logros: [
        "Atención de incidencias técnicas.",
        "Elaboración de manuales y documentación.",
        "Asistencia y orientación a usuarios.",
        "Capacitación en Microsoft Office y plataformas académicas.",
      ],
      stack: [
        "Windows",
        "Microsoft Office",
        "TeamViewer",
        "Zoom",
        "Google Workspace",
      ],
    },
    {
      empresa: "Universidad San Pedro",
      rol: "Asistente de Digitalización de Documentos",
      periodo: "Ene 2019 – Dic 2019",
      sector: "Educativo",
      descripcion:
        "Participación en actividades de digitalización de documentos académicos y administrativos.",
      descripcion_en:
        "Digitization of academic and administrative documents.",
      logros: [
        "Digitalización y organización de documentos.",
        "Apoyo en la gestión de información documental.",
        "Resolución de incidencias técnicas.",
        "Asistencia a usuarios en herramientas digitales.",
      ],
      stack: ["TeamViewer", "Windows Server", "Microsoft Office"],
    },
  ],
  habilidades: {
    Frontend: [
      "React",
      "JavaScript",
      "TypeScript",
      "Astro",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
    Backend: ["Node.js", "PHP", "Python", "Express"],
    "Bases de datos": ["SQL Server", "PostgreSQL"],
    "Data & ML": ["TensorFlow", "Keras", "Power BI"],
    Herramientas: [
      "Git",
      "Postman",
      "Linux",
      "IIS",
      "Raspberry Pi",
      "Flutter",
      "TeamViewer",
      "Windows Server",
    ],
  },
  proyectos: [
    {
      nombre: "Blanco Dental",
      caseStudy: "blanco-dental",
      descripcion:
        "Sistema web completo para gestión de clínica dental. Administra pacientes, citas, tratamientos, pagos y genera reportes con estadísticas mensuales. Incluye odontograma interactivo, imágenes en Cloudinary y roles con autenticación JWT.",
      descripcion_en:
        "Full-stack web system for dental clinic management. Manages patients, appointments, treatments, payments, and generates monthly stats reports. Includes an interactive odontogram, Cloudinary image storage, and JWT role-based authentication.",
      stack: [
        "React 19",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Cloudinary",
        "TanStack Query",
        "Recharts",
      ],
      github: "https://github.com/Josset2912/dental-blanco",
      demo: "https://dental-blanco-seven.vercel.app",
      imagen: "blanco-dental.jpg",
      destacado: true,
    },
    {
      nombre: "NutriKids",
      caseStudy: "nutrikids",
      descripcion:
        "Plataforma educativa para la prevención de la anemia infantil. Visualiza recetas nutritivas ricas en hierro organizadas por rango de edad, orientada a padres y cuidadores.",
      descripcion_en:
        "Educational platform for the prevention of childhood anemia. Displays iron-rich nutritious recipes organized by age range, targeted at parents and caregivers.",
      stack: ["Astro", "TypeScript", "CSS"],
      github: "https://github.com/Josset2912/anemia-information",
      demo: "https://lucha-contra-la-anemia.netlify.app",
      imagen: "nutrikids.jpg",
      destacado: false,
    },
    {
      nombre: "PackingWeb",
      descripcion:
        "Sitio web oficial desarrollado para empresa de embalaje y packaging. Proyecto colaborativo con foco en presentación de servicios y experiencia de usuario.",
      descripcion_en:
        "Official website built for a packaging company. A collaborative project focused on service presentation and user experience.",
      stack: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Josset2912/PackingWebOfficial",
      demo: null,
      imagen: "packingweb.jpg",
      destacado: false,
    },
    {
      nombre: "Consientete",
      caseStudy: "consientete",
      descripcion:
        "Landing page para centro de belleza y cosmetica en Huacho. Presenta servicios de unas, maquillaje y tratamientos con diseno elegante, animaciones y seccion de contacto.",
      descripcion_en:
        "Landing page for a beauty and cosmetics center in Huacho. Showcases nail, makeup, and treatment services with elegant design, animations, and a contact section.",
      stack: ["Astro", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Josset2912/cosmetico-u-as",
      demo: "https://consientete.netlify.app",
      imagen: "consientete.jpg",
      destacado: false,
    },
    {
      nombre: "Buscador de IP",
      descripcion:
        "Aplicacion web que permite buscar informacion de cualquier direccion IP — ubicacion, pais, ciudad, ISP y coordenadas — consumiendo una API de geolocalización con interfaz limpia y responsive.",
      descripcion_en:
        "Web app to look up any IP address — location, country, city, ISP, and coordinates — using a geolocation API with a clean, responsive interface.",
      stack: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Josset2912/BuscadorIp",
      demo: "https://buscador-ip-2024.netlify.app",
      imagen: "buscador-ip.jpg",
      destacado: false,
    },
    {
      nombre: "Pokedex",
      descripcion:
        "Aplicacion web que consume la PokeAPI para visualizar, buscar y explorar informacion de Pokemon — nombre, tipo, imagen y estadisticas — con filtrado por tipo y diseno responsive.",
      descripcion_en:
        "Web app consuming the PokéAPI to browse, search, and explore Pokémon — name, type, image, and stats — with type filtering and a responsive design.",
      stack: ["JavaScript", "HTML", "CSS", "PokeAPI"],
      github: "https://github.com/Josset2912/Pokedex",
      demo: "https://pokedex-2024-1.netlify.app",
      imagen: "pokedex.jpg",
      destacado: false,
    },
  ],
  educacion: {
    titulo: "Ingeniería de Sistemas",
    institucion: "Universidad César Vallejo",
  /*   periodo: "Abr 2019 – 2024",
    estado: "Titulado", */
  },
  certificaciones: [
    {
      entidad: "Certiprof",
      nombre: "Business Intelligence Foundation (BIFPC)",
    },
    { entidad: "Certiprof", nombre: "Scrum Foundation Professional (SFPC)" },
    { entidad: "Nextech", nombre: "Base de datos SQL Server 2019" },
    { entidad: "NETZUN", nombre: "Especialización en Excel" },
    { entidad: "SKILL", nombre: "Actualización en Microsoft Power BI" },
    { entidad: "Ing. Consultores", nombre: "Ofimática Profesional" },
  ],
  testimonios: [
    {
      nombre: "Carlos Mendoza",
      cargo: "Jefe de TI",
      empresa: "Agrícola Santa Azul S.R.L.",
      texto: "Josset demostró desde el primer día una capacidad de adaptación poco común. En pocos meses ya mantenía aplicaciones internas críticas, integraba APIs y daba soporte técnico con autonomía. Su disposición para aprender nuevas tecnologías y resolver problemas sin esperar indicaciones lo hace un activo muy valioso para el equipo.",
      linkedin: "https://www.linkedin.com/in/josset-portuguez/",
    },
    {
      nombre: "Dr. Marco Blanco",
      cargo: "Director",
      empresa: "Clínica Blanco Dental",
      texto: "Josset desarrolló para nuestra clínica un sistema completo que transformó la forma en que gestionamos pacientes, citas y pagos. El odontograma interactivo fue especialmente impresionante — algo que nunca esperamos tener. El proyecto se entregó en los tiempos acordados y el sistema funciona con estabilidad desde el primer día.",
      linkedin: "https://www.linkedin.com/in/josset-portuguez/",
    },
    {
      nombre: "Ana Quispe",
      cargo: "Líder de Proyectos",
      empresa: "Naal Corporation S.A.C.",
      texto: "Durante su práctica, Josset contribuyó al desarrollo de modelos de machine learning con Python y a la elaboración de dashboards en Power BI para reportes ejecutivos. Destacó por su atención al detalle, su capacidad para trabajar con datos complejos y por entregar resultados listos para presentar a los clientes.",
      linkedin: "https://www.linkedin.com/in/josset-portuguez/",
    },
  ],
  idiomas: [
    { idioma: "Español", nivel: "Nativo" },
    { idioma: "Inglés", nivel: "Intermedio" },
  ],
};
