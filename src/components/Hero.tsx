import Reveal from "./Reveal";
import MagneticLink from "./MagneticLink";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, var(--pastel-blue-fg) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">
            Valencia, España — Tecnologías Interactivas, UPV
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl text-[2.75rem] leading-[1.1] tracking-[-0.03em] sm:text-6xl">
            Santiago Fuenmayor Ruiz construye{" "}
            <span className="font-serif italic">software de punta a punta</span>.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-base text-ink-muted sm:text-lg">
            Del esquema de la base de datos al último píxel de la interfaz.
            Webs de producción, sistemas que conectan hardware con la nube, y
            algún videojuego por el camino.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticLink
              href="#proyectos"
              className="inline-block rounded-md bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.05em] text-canvas transition-colors hover:bg-[#333]"
            >
              Ver proyectos
            </MagneticLink>
            <MagneticLink
              href="https://github.com/santifuenma"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-md border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.05em] text-ink transition-colors hover:border-ink"
            >
              GitHub ↗
            </MagneticLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
