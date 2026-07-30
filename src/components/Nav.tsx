"use client";

import MagneticLink from "./MagneticLink";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Nav() {
  const { locale, setLocale, t } = useLanguage();

  const links = [
    { href: "#proyectos", label: t.nav.proyectos },
    { href: "#sobre-mi", label: t.nav.sobreMi },
    { href: "#contacto", label: t.nav.contacto },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-ink">
          {t.nav.brand}
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
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.05em]">
            <button
              type="button"
              onClick={() => setLocale("es")}
              aria-pressed={locale === "es"}
              className={locale === "es" ? "text-ink" : "text-ink-muted transition-colors hover:text-ink"}
            >
              ES
            </button>
            <span className="text-border">/</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={locale === "en" ? "text-ink" : "text-ink-muted transition-colors hover:text-ink"}
            >
              EN
            </button>
          </div>
          <MagneticLink
            href="#contacto"
            className="inline-block rounded-md bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.05em] text-canvas transition-colors hover:bg-[#333]"
          >
            {t.nav.hablemos}
          </MagneticLink>
        </div>
      </div>
    </header>
  );
}
