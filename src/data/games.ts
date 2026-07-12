export type Game = {
  slug: string;
  name: string;
  year: string;
  summary: string;
  description: string;
  stack: string[];
  role: string;
  playUrl?: string;
  embedUrl?: string;
  repoUrl?: string;
};

// El build WebGL de MYLO: TFS se añadirá cuando esté publicado.
// Rellena playUrl / embedUrl con el link de itch.io (u otro host) para activar
// el reproductor incrustado en la sección de juegos.
export const games: Game[] = [
  {
    slug: "mylo-tfs",
    name: "MYLO: TFS",
    year: "2026",
    summary: "Juego 3D en Unity con IA y sistema de iluminación dinámica.",
    description:
      "Proyecto de videojuego desarrollado en Unity, con comportamiento de IA para personajes no jugables y un sistema de iluminación dinámica construido a medida.",
    stack: ["Unity", "C#"],
    role: "Diseño y desarrollo del juego",
  },
];
