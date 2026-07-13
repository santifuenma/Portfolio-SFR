import Image from "next/image";
import type { Project } from "@/data/projects";

const statusLabel: Record<Project["status"], string> = {
  live: "En producción",
  academic: "Proyecto académico",
  archived: "Archivado",
};

const statusTone: Record<Project["status"], string> = {
  live: "bg-pastel-green-bg text-pastel-green-fg",
  academic: "bg-pastel-blue-bg text-pastel-blue-fg",
  archived: "bg-pastel-yellow-bg text-pastel-yellow-fg",
};

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

function PreviewPlaceholder({ project }: { project: Project }) {
  const [from, to] = placeholderPairs[hashSlug(project.slug) % placeholderPairs.length];

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <span className="font-serif text-5xl italic tracking-[-0.02em] text-ink/70">
        {project.name.charAt(0)}
      </span>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group grid overflow-hidden rounded-xl border border-border bg-surface shadow-[0_16px_40px_-16px_rgba(0,0,0,0.14)] transition-shadow duration-200 hover:shadow-[0_20px_50px_-14px_rgba(0,0,0,0.18)] sm:grid-cols-[1.35fr_1fr]">
      <div className="relative aspect-[4/3] w-full border-b border-border sm:aspect-auto sm:h-full sm:border-b-0 sm:border-r">
        {project.previewImage ? (
          <Image
            src={project.previewImage}
            alt={`Captura de ${project.name}`}
            fill
            sizes="(min-width: 640px) 60vw, 100vw"
            className="object-cover"
          />
        ) : (
          <PreviewPlaceholder project={project} />
        )}
      </div>

      <div className="flex flex-col justify-between p-7 sm:p-8">
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-xl italic tracking-[-0.01em] sm:text-2xl">
              {project.name}
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
            {project.summary}
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
            Código ↗
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.05em] text-ink transition-colors hover:text-ink-muted"
            >
              Demo en vivo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
