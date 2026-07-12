"use client";

import { useState, type FormEvent } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const submitRef = useMagnetic<HTMLButtonElement>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      company: data.get("company"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(body.error ?? "No se pudo enviar el mensaje.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage("No se pudo conectar. Revisa tu conexión e inténtalo de nuevo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <p className="font-serif text-xl italic tracking-[-0.01em]">
          Mensaje enviado.
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          Gracias por escribir — te responderé en cuanto pueda.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={200}
            className="mt-2 w-full rounded-md border border-border bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            className="mt-2 w-full rounded-md border border-border bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          className="mt-2 w-full resize-none rounded-md border border-border bg-canvas px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink"
          placeholder="Cuéntame en qué estás pensando…"
        />
      </div>

      {status === "error" && (
        <p className="rounded-md bg-pastel-red-bg px-4 py-3 text-sm text-pastel-red-fg">
          {errorMessage}
        </p>
      )}

      <button
        ref={submitRef}
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.05em] text-canvas transition-colors hover:bg-[#333] disabled:opacity-50"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
