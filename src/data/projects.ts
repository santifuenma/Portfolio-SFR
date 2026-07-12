export type ProjectStatus = "live" | "academic" | "archived";

export type Project = {
  slug: string;
  name: string;
  year: string;
  summary: string;
  description: string;
  stack: string[];
  role: string;
  status: ProjectStatus;
  repoUrl: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "kosmos",
    name: "Kosmos",
    year: "2026",
    summary:
      "Plataforma de análisis conductual para traders novatos: mide la coherencia entre lo planeado y lo ejecutado, no el resultado económico.",
    description:
      "Trabajo de Fin de Grado. Los usuarios declaran su estrategia e intenciones diarias, registran operaciones y reciben un Índice de Coherencia Operativa (ICO) que cruza planificación contra ejecución real, junto con patrones de comportamiento (estado emocional, reglas más incumplidas, debilidades persistentes).",
    stack: ["Next.js 16", "React 19", "TypeScript", "Prisma", "SQLite", "NextAuth", "Recharts"],
    role: "Diseño y desarrollo completo — esquema de datos, lógica del ICO, UI",
    status: "academic",
    repoUrl: "https://github.com/santifuenma/kosmos",
    liveUrl: "https://kosmos-bay-nine.vercel.app",
    featured: true,
  },
  {
    slug: "modernhome-webcatalog",
    name: "ModernHome WebCatalog",
    year: "2026",
    summary:
      "Catálogo digital multi-tienda para mobiliario a escala: más de 4.000 productos con paginación real y panel de administración.",
    description:
      "Plataforma de catálogo con storefront público y panel administrativo, pensada para manejar inventario a gran escala sin degradar el rendimiento: paginación contra base de datos real, selección de datos por contexto, e imágenes servidas en WebP/AVIF vía Cloudinary.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Cloudinary"],
    role: "Desarrollo full-stack",
    status: "live",
    repoUrl: "https://github.com/santifuenma/ModernHome-WebCatalog",
    liveUrl: "https://modernhomecatalogo.vercel.app",
    featured: true,
  },
  {
    slug: "a1an-web",
    name: "A1AN — Safe&Sound Robotics",
    year: "2026",
    summary:
      "Interfaz web para A1AN, un robot asistencial que ayuda a personas con movilidad reducida en ejercicios de rehabilitación y monitorización.",
    description:
      "Proyecto universitario de robótica. La web se conecta a ROS 2 vía ROSBridge para el control del robot, con streaming de cámara en vivo, detección de objetos, gestión de ejercicios y seguimiento de actividad. Autenticación y persistencia sobre Supabase (PostgreSQL).",
    stack: ["JavaScript", "Supabase", "PostgreSQL", "ROS 2", "ROSBridge"],
    role: "Desarrollo frontend e integración con el robot",
    status: "live",
    repoUrl: "https://github.com/santifuenma/a1an-web",
    liveUrl: "https://a1an-web.vercel.app",
    featured: true,
  },
  {
    slug: "gp77-web",
    name: "GP77",
    year: "2026",
    summary:
      "Web corporativa para un estudio de arquitectura y construcción, con transiciones fluidas y galería en mosaico.",
    description:
      "Sitio corporativo centrado en presentación de proyectos: transiciones de página, animaciones activadas por scroll, galería tipo masonry y scroll suave en toda la navegación.",
    stack: ["React", "Vite", "GSAP", "Framer Motion", "Lenis"],
    role: "Desarrollo frontend",
    status: "live",
    repoUrl: "https://github.com/santifuenma/gp77-web",
  },
  {
    slug: "plataforma-gastos-personales",
    name: "Plataforma de Gastos Personales",
    year: "2026",
    summary: "Aplicación para registrar y visualizar gastos personales con autenticación propia.",
    description:
      "Aplicación de seguimiento de gastos con persistencia en Supabase: alta de movimientos, categorización y vistas de consumo por periodo.",
    stack: ["Next.js", "JavaScript", "Supabase"],
    role: "Desarrollo full-stack",
    status: "live",
    repoUrl: "https://github.com/santifuenma/PlataformaGastosPersonales",
    liveUrl: "https://plataforma-gastos-personales.vercel.app",
  },
  {
    slug: "proyecto-biometria",
    name: "ATMOS — Monitorización Ambiental",
    year: "2025",
    summary:
      "Sistema de monitorización de CO₂ y temperatura con baliza BLE en Arduino, API en PHP y app Android.",
    description:
      "Proyecto académico de Sistemas Interactivos y Desarrollo Ciber-Físico. Firmware en Arduino que emite mediciones por baliza Bluetooth Low Energy, una API REST en PHP sobre MySQL, aplicación Android y panel web de visualización. Desarrollado siguiendo Gitflow con test automatizados de lógica de negocio y de API.",
    stack: ["C++ / Arduino", "Java / Android", "PHP", "MySQL"],
    role: "Desarrollo del firmware, API y panel web",
    status: "academic",
    repoUrl: "https://github.com/santifuenma/ProyectoBiometria",
    liveUrl: "https://sfuenma.upv.edu.es/",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
