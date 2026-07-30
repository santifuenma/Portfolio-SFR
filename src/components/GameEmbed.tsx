"use client";

import { useState } from "react";
import Image from "next/image";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type GameEmbedProps = {
  embedUrl: string;
  name: string;
  posterUrl?: string;
};

export default function GameEmbed({ embedUrl, name, posterUrl }: GameEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const playRef = useMagnetic<HTMLSpanElement>();
  const { t } = useLanguage();

  if (loaded) {
    return (
      <iframe
        src={embedUrl}
        title={name}
        className="aspect-[8/5] w-full border-0"
        allow="fullscreen; autoplay"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      data-cursor-light
      className="group relative flex aspect-[8/5] w-full flex-col items-center justify-center gap-3 overflow-hidden bg-ink"
    >
      {posterUrl ? (
        <>
          <Image
            src={posterUrl}
            alt={`Portada de ${name}`}
            fill
            sizes="(min-width: 640px) 100vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/35 transition-colors duration-300 group-hover:bg-ink/20" />
        </>
      ) : null}

      <span
        ref={playRef}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-ink transition-colors duration-300 group-hover:bg-white"
      >
        <svg viewBox="0 0 24 24" fill="none" className="ml-1 h-6 w-6">
          <path d="M7 5v14l12-7L7 5z" fill="currentColor" />
        </svg>
      </span>
      <span className="relative font-mono text-xs uppercase tracking-[0.08em] text-white">
        {t.projects.play} {name}
      </span>
      <span className="relative max-w-xs px-6 text-center text-[11px] text-white/70">
        {t.game.loadHint}
      </span>
    </button>
  );
}
