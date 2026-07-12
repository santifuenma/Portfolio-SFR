import MagneticLink from "./MagneticLink";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#juegos", label: "Juegos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-ink">
          S. Fuenmayor
        </a>
        <nav className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <MagneticLink
          href="#contacto"
          className="inline-block rounded-md bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.05em] text-canvas transition-colors hover:bg-[#333]"
        >
          Hablemos
        </MagneticLink>
      </div>
    </header>
  );
}
