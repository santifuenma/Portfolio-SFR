export type Locale = "es" | "en";

export type Translations = {
  nav: {
    proyectos: string;
    sobreMi: string;
    contacto: string;
    hablemos: string;
    brand: string;
  };
  hero: {
    location: string;
    name: string;
    role: string;
    description: string;
    ctaProjects: string;
    ctaGithub: string;
    ctaLinkedin: string;
  };
  about: {
    heading: string;
    bioMobile: string;
    bioDesktop1: string;
    bioDesktop2: string;
  };
  projects: {
    heading: string;
    countSuffix: string;
    code: string;
    liveDemo: string;
    play: string;
    status: {
      live: string;
      academic: string;
      archived: string;
      game: string;
    };
  };
  game: {
    loadHint: string;
    comingSoonBadge: string;
    comingSoonText: string;
    comingSoonPrefix: string;
  };
  contact: {
    heading: string;
    description: string;
    linkedin: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      successTitle: string;
      successBody: string;
      errorGeneric: string;
      errorNetwork: string;
    };
  };
  footer: {
    github: string;
    linkedin: string;
    email: string;
  };
};

export const translations: Record<Locale, Translations> = {
  es: {
    nav: {
      proyectos: "Proyectos",
      sobreMi: "Sobre mí",
      contacto: "Contacto",
      hablemos: "Hablemos",
      brand: "S. Fuenmayor Ruiz",
    },
    hero: {
      location: "Valencia, España — Tecnologías Interactivas, UPV",
      name: "Santiago Fuenmayor Ruiz",
      role: "Desarrollador de Software",
      description:
        "Del esquema de la base de datos al último píxel de la interfaz. Webs de producción, sistemas que conectan hardware con la nube, y algún videojuego por el camino.",
      ctaProjects: "Ver proyectos",
      ctaGithub: "GitHub",
      ctaLinkedin: "LinkedIn",
    },
    about: {
      heading: "Sobre mí",
      bioMobile:
        "Graduado en Tecnologías Interactivas por la Universitat Politècnica de València. He entregado webs de producción a clientes reales, conectado placas Arduino con paneles en tiempo real, y diseñado comportamiento de IA para videojuegos en Unity — me interesa el recorrido completo de un producto, del esquema de datos al detalle de interfaz. Trabajo principalmente con TypeScript, Next.js, Supabase y PostgreSQL.",
      bioDesktop1:
        "Graduado en Tecnologías Interactivas en la Universitat Politècnica de València. En ese tiempo he pasado de entregar webs de producción a clientes reales, a conectar placas Arduino con paneles web en tiempo real, a diseñar comportamiento de IA para personajes de videojuego en Unity.",
      bioDesktop2:
        "Me interesa el recorrido completo de un producto: modelar los datos antes de tocar un componente, y cuidar el detalle de interfaz después de que la lógica funcione. Trabajo principalmente con TypeScript y Next.js en el frontend, Supabase y PostgreSQL en el backend, y salgo de ahí cuando el proyecto lo pide — firmware en C++, apps Android, o un motor de juego.",
    },
    projects: {
      heading: "Proyectos",
      countSuffix: "proyectos seleccionados",
      code: "Código",
      liveDemo: "Demo en vivo",
      play: "Jugar",
      status: {
        live: "En producción",
        academic: "Proyecto académico",
        archived: "Archivado",
        game: "Videojuego",
      },
    },
    game: {
      loadHint: "Carga un build de Unity de ~40 MB",
      comingSoonBadge: "Build jugable próximamente",
      comingSoonText: "se incrustará aquí en cuanto esté publicado.",
      comingSoonPrefix: "El build WebGL de",
    },
    contact: {
      heading: "Contacto",
      description:
        "¿Un proyecto, una oferta, o solo quieres saludar? Escríbeme por aquí o directamente a mi correo.",
      linkedin: "LinkedIn",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame en qué estás pensando…",
        send: "Enviar mensaje",
        sending: "Enviando…",
        successTitle: "Mensaje enviado.",
        successBody: "Gracias por escribir — te responderé en cuanto pueda.",
        errorGeneric: "No se pudo enviar el mensaje.",
        errorNetwork: "No se pudo conectar. Revisa tu conexión e inténtalo de nuevo.",
      },
    },
    footer: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
  en: {
    nav: {
      proyectos: "Projects",
      sobreMi: "About",
      contacto: "Contact",
      hablemos: "Let's talk",
      brand: "S. Fuenmayor Ruiz",
    },
    hero: {
      location: "Valencia, Spain — Interactive Technologies, UPV",
      name: "Santiago Fuenmayor Ruiz",
      role: "Software Developer",
      description:
        "From the database schema down to the last pixel of the interface. Production websites, systems that connect hardware to the cloud, and the occasional video game along the way.",
      ctaProjects: "View projects",
      ctaGithub: "GitHub",
      ctaLinkedin: "LinkedIn",
    },
    about: {
      heading: "About me",
      bioMobile:
        "I graduated in Interactive Technologies from the Universitat Politècnica de València. I've shipped production websites for real clients, connected Arduino boards to real-time dashboards, and designed AI behavior for video game characters in Unity — I care about a product's full journey, from the data schema to the interface details. I mainly work with TypeScript, Next.js, Supabase, and PostgreSQL.",
      bioDesktop1:
        "I graduated in Interactive Technologies from the Universitat Politècnica de València. Along the way, I've gone from shipping production websites for real clients, to connecting Arduino boards to real-time web dashboards, to designing AI behavior for video game characters in Unity.",
      bioDesktop2:
        "I care about the full journey of a product: modeling the data before touching a single component, and polishing interface details once the logic works. I mainly work with TypeScript and Next.js on the frontend, Supabase and PostgreSQL on the backend, and step outside that stack whenever a project calls for it — C++ firmware, Android apps, or a game engine.",
    },
    projects: {
      heading: "Projects",
      countSuffix: "selected projects",
      code: "Code",
      liveDemo: "Live demo",
      play: "Play",
      status: {
        live: "In production",
        academic: "Academic project",
        archived: "Archived",
        game: "Video game",
      },
    },
    game: {
      loadHint: "Loads a ~40 MB Unity build",
      comingSoonBadge: "Playable build coming soon",
      comingSoonText: "will be embedded here as soon as it's published.",
      comingSoonPrefix: "The WebGL build of",
    },
    contact: {
      heading: "Contact",
      description:
        "Got a project, an offer, or just want to say hi? Write to me here or straight to my email.",
      linkedin: "LinkedIn",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        message: "Message",
        messagePlaceholder: "Tell me what's on your mind…",
        send: "Send message",
        sending: "Sending…",
        successTitle: "Message sent.",
        successBody: "Thanks for writing — I'll get back to you as soon as I can.",
        errorGeneric: "Couldn't send the message.",
        errorNetwork: "Couldn't connect. Check your connection and try again.",
      },
    },
    footer: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
};
