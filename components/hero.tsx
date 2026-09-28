export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pt-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <p className="animate-fade-up mb-6 text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
            MANAR LABS
          </p>

          <h1 className="animate-fade-up animate-delay-1 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Designing and building
            <span className="block text-zinc-400">digital experiences.</span>
          </h1>

          <p className="animate-fade-up animate-delay-2 mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I’m Manar, a developer creating modern applications and digital
            products with a focus on simplicity and usability.
          </p>

          <div className="animate-fade-up animate-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
            >
              View My Work
              <span className="ml-2">↓</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/5"
            >
              Let’s Talk
            </a>
          </div>
        </div>

        <div className="animate-fade-up animate-delay-3 mt-20 flex items-center gap-3 text-sm text-zinc-600">
          <span className="h-px w-10 bg-zinc-800" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
