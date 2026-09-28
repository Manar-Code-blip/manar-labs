export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
            Contact
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let’s work together.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Have an idea, a project, or just want to get in touch? I’m always
            open to discussing new projects, ideas, and opportunities.
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-10 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
          >
            Get in touch
            <span className="ml-2">→</span>
          </a>
        </div>

        <div className="mt-20 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-8">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            GitHub ↗
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            Instagram ↗
          </a>

          <a
            href="mailto:your@email.com"
            className="text-sm text-zinc-500 transition-colors hover:text-white"
          >
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}
