import type { LocalizedText } from "@/lib/i18n/localized";

export type ProjectStatus = "live" | "academic" | "archived";

export type Project = {
  slug: string;
  name: LocalizedText;
  year: string;
  summary: LocalizedText;
  description: LocalizedText;
  stack: string[];
  role: LocalizedText;
  status: ProjectStatus;
  repoUrl: string;
  liveUrl?: string;
  previewImage?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "kosmos",
    name: { es: "Kosmos - Trading Conductual", en: "Kosmos - Behavioral Trading" },
    year: "2026",
    summary: {
      es: "Plataforma de análisis conductual para traders novatos: mide la coherencia entre lo planeado y lo ejecutado, no el resultado económico.",
      en: "Behavioral analysis platform for novice traders: it measures the consistency between what was planned and what was executed, not the financial outcome.",
    },
    description: {
      es: "Trabajo de Fin de Grado. Los usuarios declaran su estrategia e intenciones diarias, registran operaciones y reciben un Índice de Coherencia Operativa (ICO) que cruza planificación contra ejecución real, junto con patrones de comportamiento (estado emocional, reglas más incumplidas, debilidades persistentes).",
      en: "Bachelor's thesis project. Users declare their strategy and daily intentions, log trades, and receive an Operational Consistency Index (ICO) that cross-references planning against actual execution, along with behavioral patterns (emotional state, most-broken rules, persistent weaknesses).",
    },
    stack: ["Next.js 16", "React 19", "TypeScript", "Prisma", "SQLite", "NextAuth", "Recharts"],
    role: {
      es: "Diseño y desarrollo completo — esquema de datos, lógica del ICO, UI",
      en: "Full design and development — data schema, ICO logic, UI",
    },
    status: "academic",
    repoUrl: "https://github.com/santifuenma/kosmos",
    liveUrl: "https://kosmos-bay-nine.vercel.app",
    previewImage: "/projects/kosmos.png",
    featured: true,
  },
  {
    slug: "modernhome-webcatalog",
    name: { es: "Modern Home - Catálogo Digital", en: "Modern Home - Digital Catalog" },
    year: "2026",
    summary: {
      es: "Catálogo digital multi-tienda para mobiliario a escala: más de 4.000 productos con paginación real y panel de administración.",
      en: "Multi-store digital catalog for furniture at scale: 4,000+ products with real pagination and an admin panel.",
    },
    description: {
      es: "Plataforma de catálogo con storefront público y panel administrativo, pensada para manejar inventario a gran escala sin degradar el rendimiento: paginación contra base de datos real, selección de datos por contexto, e imágenes servidas en WebP/AVIF vía Cloudinary.",
      en: "Catalog platform with a public storefront and admin panel, built to handle large-scale inventory without degrading performance: real database-backed pagination, context-aware data fetching, and images served as WebP/AVIF via Cloudinary.",
    },
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Cloudinary"],
    role: { es: "Desarrollo full-stack", en: "Full-stack development" },
    status: "live",
    repoUrl: "https://github.com/santifuenma/ModernHome-WebCatalog",
    liveUrl: "https://modernhomecatalogo.vercel.app",
    previewImage: "/projects/modernhome-webcatalog.png",
    featured: true,
  },
  {
    slug: "a1an-web",
    name: { es: "A1AN — Safe&Sound Robotics", en: "A1AN — Safe&Sound Robotics" },
    year: "2026",
    summary: {
      es: "Interfaz web para A1AN, un robot asistencial que ayuda a personas con movilidad reducida en ejercicios de rehabilitación y monitorización.",
      en: "Web interface for A1AN, an assistive robot that helps people with reduced mobility with rehabilitation exercises and monitoring.",
    },
    description: {
      es: "Proyecto universitario de robótica. La web se conecta a ROS 2 vía ROSBridge para el control del robot, con streaming de cámara en vivo, detección de objetos, gestión de ejercicios y seguimiento de actividad. Autenticación y persistencia sobre Supabase (PostgreSQL).",
      en: "University robotics project. The web app connects to ROS 2 via ROSBridge to control the robot, with live camera streaming, object detection, exercise management, and activity tracking. Authentication and persistence run on Supabase (PostgreSQL).",
    },
    stack: ["JavaScript", "Supabase", "PostgreSQL", "ROS 2", "ROSBridge"],
    role: {
      es: "Desarrollo frontend e integración con el robot",
      en: "Frontend development and robot integration",
    },
    status: "live",
    repoUrl: "https://github.com/santifuenma/a1an-web",
    liveUrl: "https://a1an-web.vercel.app",
    previewImage: "/projects/a1an-web.png",
    featured: true,
  },
  {
    slug: "gp77-web",
    name: { es: "GP77 - Estudio de Arquitectura", en: "GP77 - Architecture Studio" },
    year: "2026",
    summary: {
      es: "Web corporativa para un estudio de arquitectura y construcción, con transiciones fluidas y galería en mosaico.",
      en: "Corporate website for an architecture and construction studio, with fluid transitions and a masonry gallery.",
    },
    description: {
      es: "Sitio corporativo centrado en presentación de proyectos: transiciones de página, animaciones activadas por scroll, galería tipo masonry y scroll suave en toda la navegación.",
      en: "Corporate site focused on showcasing projects: page transitions, scroll-triggered animations, a masonry-style gallery, and smooth scrolling throughout.",
    },
    stack: ["React", "Vite", "GSAP", "Framer Motion", "Lenis"],
    role: { es: "Desarrollo frontend", en: "Frontend development" },
    status: "live",
    repoUrl: "https://github.com/santifuenma/gp77-web",
    liveUrl: "https://www.gp77ca.com/",
    previewImage: "/projects/gp77-web.png",
  },
  {
    slug: "proyecto-biometria",
    name: { es: "ATMOS — Monitorización Ambiental", en: "ATMOS — Environmental Monitoring" },
    year: "2025",
    summary: {
      es: "Sistema de monitorización de CO₂ y temperatura con baliza BLE en Arduino, API en PHP y app Android.",
      en: "CO2 and temperature monitoring system with a BLE beacon on Arduino, a PHP API, and an Android app.",
    },
    description: {
      es: "Proyecto académico de Sistemas Interactivos y Desarrollo Ciber-Físico. Firmware en Arduino que emite mediciones por baliza Bluetooth Low Energy, una API REST en PHP sobre MySQL, aplicación Android y panel web de visualización. Desarrollado siguiendo Gitflow con test automatizados de lógica de negocio y de API.",
      en: "Academic project for Interactive Systems and Cyber-Physical Development. Arduino firmware that broadcasts readings over a Bluetooth Low Energy beacon, a PHP REST API on MySQL, an Android app, and a web dashboard. Built following Gitflow with automated tests for business logic and the API.",
    },
    stack: ["C++ / Arduino", "Java / Android", "PHP", "MySQL"],
    role: {
      es: "Desarrollo del firmware, API y panel web",
      en: "Firmware, API, and web dashboard development",
    },
    status: "academic",
    repoUrl: "https://github.com/santifuenma/ProyectoBiometria",
    previewImage: "/projects/proyecto-biometria.png",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
