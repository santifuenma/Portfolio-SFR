"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import MagneticLink from "./MagneticLink";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden md:min-h-[680px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, var(--pastel-blue-fg) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-28">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">
                {t.hero.location}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 max-w-3xl text-[2.75rem] leading-[1.1] tracking-[-0.03em] sm:text-6xl">
                {t.hero.name}
              </h1>
              <p className="mt-3 font-serif text-2xl italic tracking-[-0.01em] text-ink-muted sm:text-3xl">
                {t.hero.role}
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-base text-ink-muted sm:text-lg">
                {t.hero.description}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <MagneticLink
                  href="#proyectos"
                  className="inline-block rounded-md bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.05em] text-canvas transition-colors hover:bg-[#333]"
                >
                  {t.hero.ctaProjects}
                </MagneticLink>
                <MagneticLink
                  href="https://github.com/santifuenma"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-md border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.05em] text-ink transition-colors hover:border-ink"
                >
                  {t.hero.ctaGithub} ↗
                </MagneticLink>
                <MagneticLink
                  href="https://www.linkedin.com/in/santiago-fuenmayor-ruiz-877a41216/?locale=es"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-md border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.05em] text-ink transition-colors hover:border-ink"
                >
                  {t.hero.ctaLinkedin} ↗
                </MagneticLink>
              </div>
            </Reveal>
          </div>

          {/* Spacer column so the text never runs under the photo. */}
          <div className="hidden md:block" aria-hidden />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden md:block">
        <div className="mx-auto flex max-w-5xl justify-end px-6">
          <Reveal delay={200}>
            <Image
              src="/santiago.png"
              alt={t.hero.name}
              width={713}
              height={1271}
              priority
              className="h-[640px] w-auto object-contain object-bottom grayscale"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
