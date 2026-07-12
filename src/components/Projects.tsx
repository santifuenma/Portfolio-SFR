import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

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

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
