"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { pickLocale } from "@/lib/i18n/localized";

const placeholderPairs = [
  ["var(--pastel-blue-bg)", "var(--pastel-green-bg)"],
  ["var(--pastel-yellow-bg)", "var(--pastel-red-bg)"],
  ["var(--pastel-green-bg)", "var(--pastel-yellow-bg)"],
  ["var(--pastel-red-bg)", "var(--pastel-blue-bg)"],
] as const;

function hashSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function PreviewPlaceholder({ project, name }: { project: Project; name: string }) {
  const [from, to] = placeholderPairs[hashSlug(project.slug) % placeholderPairs.length];

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <span className="font-serif text-5xl italic tracking-[-0.02em] text-ink/70">
        {name.charAt(0)}
      </span>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useLanguage();

  const name = pickLocale(project.name, locale);
  const summary = pickLocale(project.summary, locale);

  const statusLabel: Record<Project["status"], string> = {
    live: t.projects.status.live,
    academic: t.projects.status.academic,
    archived: t.projects.status.archived,
  };

  const statusTone: Record<Project["status"], string> = {
    live: "bg-pastel-green-bg text-pastel-green-fg",
    academic: "bg-pastel-blue-bg text-pastel-blue-fg",
    archived: "bg-pastel-yellow-bg text-pastel-yellow-fg",
  };

  return (
    <article className="group grid overflow-hidden rounded-xl border border-border bg-surface shadow-[0_16px_40px_-16px_rgba(0,0,0,0.14)] transition-shadow duration-200 hover:shadow-[0_20px_50px_-14px_rgba(0,0,0,0.18)] sm:grid-cols-[1.35fr_1fr] sm:min-h-[357px]">
      <div className="flex aspect-[4/3] w-full flex-col border-b border-border sm:aspect-auto sm:h-full sm:border-b-0 sm:border-r">
        <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-border bg-surface px-3">
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
        <div className="relative flex-1 bg-canvas">
          {project.previewImage ? (
            <Image
              src={project.previewImage}
              alt={name}
              fill
              sizes="(min-width: 640px) 60vw, 100vw"
              className="object-contain"
            />
          ) : (
            <PreviewPlaceholder project={project} name={name} />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between p-7 sm:p-8">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-xl italic tracking-[-0.01em] sm:text-2xl">
              {name}
            </h3>
            <span className="shrink-0 font-mono text-xs text-ink-muted">
              {project.year}
            </span>
          </div>

          <span
            className={`mt-3 inline-block rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] ${statusTone[project.status]}`}
          >
            {statusLabel[project.status]}
          </span>

          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            {summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-ink-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex gap-4 border-t border-border pt-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.05em] text-ink transition-colors hover:text-ink-muted"
          >
            {t.projects.code} ↗
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.05em] text-ink transition-colors hover:text-ink-muted"
            >
              {t.projects.liveDemo} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
