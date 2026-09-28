export default function About() {
  return (
    <section id="about" className="border-t border-white/5 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr] md:items-start">
          {/* Heading */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
              About
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A little about me
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-zinc-300">
              I’m Manar, a developer who enjoys turning ideas into useful
              digital products.
            </p>

            <p className="mt-6 leading-7 text-zinc-400">
              I focus on building modern applications with clean interfaces and
              practical user experiences. I’m continuously learning,
              experimenting with new technologies, and working on projects that
              help me grow as a developer.
            </p>

            <p className="mt-6 leading-7 text-zinc-400">
              I believe the best way to learn is to build — turning ideas into
              real products, one project at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
