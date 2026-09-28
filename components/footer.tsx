export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-white">
            MANAR LABS
          </p>

          <p className="mt-2 text-sm text-zinc-600">
            Building digital experiences with code.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-500">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            Instagram
          </a>

          <a
            href="mailto:your@email.com"
            className="transition-colors hover:text-white"
          >
            Email
          </a>

          <span className="text-zinc-700">© 2026 Manar Labs</span>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-6xl border-t border-white/5 pt-6 text-xs text-zinc-700">
        Built with Next.js
      </div>
    </footer>
  );
}
