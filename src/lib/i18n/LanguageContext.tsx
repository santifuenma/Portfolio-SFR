"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { translations, type Locale, type Translations } from "./translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "locale";
const FADE_MS = 180;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [fading, setFading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") {
      // One-time restore of a locale saved in a previous session. The server
      // has no concept of localStorage, so this must happen post-mount to
      // avoid a hydration mismatch.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function setLocale(next: Locale) {
    if (next === locale) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setLocaleState(next);
      window.localStorage.setItem(STORAGE_KEY, next);
      return;
    }

    setFading(true);
    timeoutRef.current = setTimeout(() => {
      setLocaleState(next);
      window.localStorage.setItem(STORAGE_KEY, next);
      setFading(false);
    }, FADE_MS);
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      <div
        className="flex min-h-full flex-1 flex-col"
        style={{
          opacity: fading ? 0 : 1,
          transition: `opacity ${FADE_MS}ms ease`,
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
