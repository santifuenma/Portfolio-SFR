"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const stack = [
  { label: "TypeScript", tone: "blue" },
  { label: "React", tone: "blue" },
  { label: "Next.js", tone: "blue" },
  { label: "Node.js", tone: "green" },
  { label: "Supabase", tone: "green" },
  { label: "PostgreSQL", tone: "green" },
  { label: "Python", tone: "yellow" },
  { label: "C#", tone: "yellow" },
  { label: "Unity", tone: "red" },
  { label: "Arduino", tone: "red" },
] as const;

const toneClasses: Record<string, string> = {
  blue: "bg-pastel-blue-bg text-pastel-blue-fg",
  green: "bg-pastel-green-bg text-pastel-green-fg",
  yellow: "bg-pastel-yellow-bg text-pastel-yellow-fg",
  red: "bg-pastel-red-bg text-pastel-red-fg",
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2 className="font-serif text-3xl italic tracking-[-0.02em] sm:text-4xl">
            {t.about.heading}
          </h2>
        </Reveal>

        <div className="mt-8 max-w-3xl space-y-6">
          <Reveal>
            <p className="text-base leading-relaxed text-ink sm:hidden">
              {t.about.bioMobile}
            </p>
            <p className="hidden text-base leading-relaxed text-ink sm:block sm:text-lg">
              {t.about.bioDesktop1}
            </p>
          </Reveal>

          <Reveal delay={40} className="hidden sm:block">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {t.about.bioDesktop2}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="flex flex-wrap gap-2 pt-2">
              {stack.map((item) => (
                <li
                  key={item.label}
                  className={`rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.05em] ${toneClasses[item.tone]}`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
