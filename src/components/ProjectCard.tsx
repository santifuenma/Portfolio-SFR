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

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-7 transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
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
    </article>
  );
}
