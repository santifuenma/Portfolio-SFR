import Reveal from "./Reveal";

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
  return (
    <section id="sobre-mi" className="border-t border-border">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-32 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <h2 className="font-serif text-3xl italic tracking-[-0.02em] sm:text-4xl">
            Sobre mí
          </h2>
        </Reveal>

        <div className="space-y-6">
          <Reveal>
            <p className="text-base leading-relaxed text-ink sm:text-lg">
              Estoy terminando el grado en Tecnologías Interactivas en la
              Universitat Politècnica de València. En ese tiempo he pasado de
              entregar webs de producción a clientes reales, a conectar
              placas Arduino con paneles web en tiempo real, a diseñar
              comportamiento de IA para personajes de videojuego en Unity.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              Me interesa el recorrido completo de un producto: modelar los
              datos antes de tocar un componente, y cuidar el detalle de
              interfaz después de que la lógica funcione. Trabajo
              principalmente con TypeScript y Next.js en el frontend,
              Supabase y PostgreSQL en el backend, y salgo de ahí cuando el
              proyecto lo pide — firmware en C++, apps Android, o un motor de
              juego.
            </p>
          </Reveal>

          <Reveal delay={160}>
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
