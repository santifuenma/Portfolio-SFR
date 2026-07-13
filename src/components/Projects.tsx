import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const STICKY_BASE = 88;
const STICKY_STEP = 18;

export default function Projects() {
  return (
    <section id="proyectos" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-3xl italic tracking-[-0.02em] sm:text-4xl">
              Proyectos
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
              {projects.length} proyectos seleccionados
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10 sm:gap-14">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="sticky"
              style={{ top: `${STICKY_BASE + i * STICKY_STEP}px`, zIndex: i + 1 }}
            >
              <Reveal delay={i * 60}>
                <ProjectCard project={project} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
