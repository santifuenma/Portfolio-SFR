"use client";

import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div>
              <h2 className="font-serif text-3xl italic tracking-[-0.02em] sm:text-4xl">
                {t.contact.heading}
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted sm:text-base">
                {t.contact.description}
              </p>
              <a
                href="mailto:sanfuenmayor@gmail.com"
                className="mt-6 block font-mono text-sm text-ink underline decoration-border underline-offset-4 transition-colors hover:decoration-ink"
              >
                sanfuenmayor@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-fuenmayor-ruiz-877a41216/?locale=es"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block font-mono text-sm text-ink underline decoration-border underline-offset-4 transition-colors hover:decoration-ink"
              >
                {t.contact.linkedin} ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
