export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-ink-muted">
          © {year} Santiago Fuenmayor Ruiz
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/santifuenma"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.05em] text-ink-muted transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href="mailto:sanfuenmayor@gmail.com"
            className="font-mono text-xs uppercase tracking-[0.05em] text-ink-muted transition-colors hover:text-ink"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
