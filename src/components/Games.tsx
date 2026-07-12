import { games } from "@/data/games";
import Reveal from "./Reveal";

export default function Games() {
  return (
    <section id="juegos" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2 className="font-serif text-3xl italic tracking-[-0.02em] sm:text-4xl">
            Juegos
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {games.map((game, i) => (
            <Reveal key={game.slug} delay={i * 60}>
              <article className="overflow-hidden rounded-xl border border-border">
                {game.embedUrl ? (
                  <iframe
                    src={game.embedUrl}
                    title={game.name}
                    className="aspect-video w-full border-0"
                    allow="fullscreen"
                  />
                ) : (
                  <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-canvas px-6 text-center">
                    <span className="rounded-full bg-pastel-yellow-bg px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-pastel-yellow-fg">
                      Build jugable próximamente
                    </span>
                    <p className="max-w-sm text-sm text-ink-muted">
                      El build WebGL de {game.name} se incrustará aquí en
                      cuanto esté publicado.
                    </p>
                  </div>
                )}

                <div className="flex flex-col gap-4 p-7 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-serif text-xl italic tracking-[-0.01em] sm:text-2xl">
                        {game.name}
                      </h3>
                      <span className="font-mono text-xs text-ink-muted">
                        {game.year}
                      </span>
                    </div>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
                      {game.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
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

                  {game.playUrl && (
                    <a
                      href={game.playUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-md bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.05em] text-canvas transition-transform hover:bg-[#333] active:scale-[0.98]"
                    >
                      Jugar ↗
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
