"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { games } from "@/data/games";
import ProjectCard from "./ProjectCard";
import GameCard from "./GameCard";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const STICKY_BASE = 88;
const STICKY_STEP = 18;

const CARD_ORDER: Array<{ kind: "project" | "game"; slug: string }> = [
  { kind: "project", slug: "modernhome-webcatalog" },
  { kind: "project", slug: "gp77-web" },
  { kind: "project", slug: "kosmos" },
  { kind: "game", slug: "mylo-tfs" },
  { kind: "project", slug: "proyecto-biometria" },
  { kind: "project", slug: "a1an-web" },
];

type Item = { kind: "project" | "game"; key: string; render: () => React.ReactNode };

export default function Projects() {
  const { t } = useLanguage();
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  const items: Item[] = CARD_ORDER.flatMap(({ kind, slug }): Item[] => {
    if (kind === "project") {
      const project = projects.find((p) => p.slug === slug);
      if (!project) return [];
      return [{ kind, key: project.slug, render: () => <ProjectCard project={project} /> }];
    }
    const game = games.find((g) => g.slug === slug);
    if (!game) return [];
    return [{ kind, key: game.slug, render: () => <GameCard game={game} /> }];
  });

  useEffect(() => {
    function update() {
      const wrappers = wrapperRefs.current;
      for (let i = 0; i < wrappers.length - 1; i++) {
        const current = wrappers[i];
        const next = wrappers[i + 1];
        if (!current || !next) continue;

        const nextStickyTop = STICKY_BASE + (i + 1) * STICKY_STEP;
        const isNextStuck = next.getBoundingClientRect().top <= nextStickyTop + 1;

        current.style.filter = isNextStuck ? "blur(1px)" : "";
        current.style.opacity = isNextStuck ? "0.8" : "1";
      }
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  return (
    <section id="proyectos" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-3xl italic tracking-[-0.02em] sm:text-4xl">
              {t.projects.heading}
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
              {items.length} {t.projects.countSuffix}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10 sm:gap-14">
          {items.map((item, i) => (
            <div
              key={item.key}
              ref={(el) => {
                wrapperRefs.current[i] = el;
              }}
              className="sticky transition-[filter,opacity] duration-300 ease-out"
              style={{ top: `${STICKY_BASE + i * STICKY_STEP}px`, zIndex: i + 1 }}
            >
              <Reveal delay={i * 60}>{item.render()}</Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
