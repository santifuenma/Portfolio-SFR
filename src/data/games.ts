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
  posterUrl?: string;
  repoUrl?: string;
};

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
    embedUrl: "/games/mylo-tfs/index.html",
    posterUrl: "/games/mylo-tfs-cover.png",
  },
];
