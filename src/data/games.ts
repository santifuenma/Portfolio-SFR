import type { LocalizedText } from "@/lib/i18n/localized";

export type Game = {
  slug: string;
  name: string;
  year: string;
  summary: LocalizedText;
  description: LocalizedText;
  stack: string[];
  role: LocalizedText;
  playUrl?: string;
  embedUrl?: string;
  posterUrl?: string;
  repoUrl?: string;
};

export const games: Game[] = [
  {
    slug: "mylo-tfs",
    name: "Mylo: The Firefly Scout",
    year: "2026",
    summary: {
      es: "Juego 3D en Unity con IA y sistema de iluminación dinámica.",
      en: "3D Unity game with AI and a dynamic lighting system.",
    },
    description: {
      es: "Proyecto de videojuego desarrollado en Unity, con comportamiento de IA para personajes no jugables y un sistema de iluminación dinámica construido a medida.",
      en: "Video game project built in Unity, featuring AI behavior for non-playable characters and a custom-built dynamic lighting system.",
    },
    stack: ["Unity", "C#"],
    role: { es: "Diseño y desarrollo del juego", en: "Game design and development" },
    embedUrl: "/games/mylo-tfs/index.html",
    posterUrl: "/games/mylo-tfs-cover.png",
  },
];
