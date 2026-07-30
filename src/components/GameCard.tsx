"use client";

import type { Game } from "@/data/games";
import GameEmbed from "./GameEmbed";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { pickLocale } from "@/lib/i18n/localized";

export default function GameCard({ game }: { game: Game }) {
  const { locale, t } = useLanguage();
  const summary = pickLocale(game.summary, locale);

  return (
    <article className="group grid overflow-hidden rounded-xl border border-border bg-surface shadow-[0_16px_40px_-16px_rgba(0,0,0,0.14)] transition-shadow duration-200 hover:shadow-[0_20px_50px_-14px_rgba(0,0,0,0.18)] sm:grid-cols-[1.35fr_1fr] sm:min-h-[357px]">
      <div className="flex aspect-[4/3] w-full flex-col border-b border-border sm:aspect-auto sm:h-full sm:border-b-0 sm:border-r">
        <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-border bg-surface px-3">
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
        <div className="relative flex-1 bg-canvas">
          {game.embedUrl ? (
            <GameEmbed embedUrl={game.embedUrl} name={game.name} posterUrl={game.posterUrl} />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="rounded-full bg-pastel-yellow-bg px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-pastel-yellow-fg">
                {t.game.comingSoonBadge}
              </span>
              <p className="max-w-sm text-sm text-ink-muted">
                {t.game.comingSoonPrefix} {game.name} {t.game.comingSoonText}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between p-7 sm:p-8">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-xl italic tracking-[-0.01em] sm:text-2xl">
              {game.name}
            </h3>
            <span className="shrink-0 font-mono text-xs text-ink-muted">{game.year}</span>
          </div>

          <span className="mt-3 inline-block rounded-full bg-pastel-red-bg px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-pastel-red-fg">
            {t.projects.status.game}
          </span>

          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            {summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {game.stack.map((tech) => (
              <li
                key={tech}
                className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-ink-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {(game.repoUrl || game.playUrl) && (
          <div className="mt-6 flex gap-4 border-t border-border pt-4">
            {game.repoUrl && (
              <a
                href={game.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.05em] text-ink transition-colors hover:text-ink-muted"
              >
                {t.projects.code} ↗
              </a>
            )}
            {game.playUrl && (
              <a
                href={game.playUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.05em] text-ink transition-colors hover:text-ink-muted"
              >
                {t.projects.play} ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
