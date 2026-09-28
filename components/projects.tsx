import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="border-t border-white/5 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
            Selected Work
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            A selection of applications and digital products I’ve been building.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 md:aspect-auto md:min-h-[420px]">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-8 sm:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-400">
                      {featuredProject.category}
                    </span>

                    <span className="font-mono text-sm text-zinc-600">01</span>
                  </div>

                  <h3 className="mt-6 text-3xl font-semibold text-white">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-5 max-w-xl leading-7 text-zinc-400">
                    {featuredProject.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {featuredProject.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  {featuredProject.live && featuredProject.live !== "#" && (
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium text-white transition-transform duration-300 hover:translate-x-1"
                    >
                      Live Demo
                      <span className="ml-2">↗</span>
                    </a>
                  )}

                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium text-zinc-500 transition-colors hover:text-white"
                    >
                      GitHub
                      <span className="ml-2">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Other Projects */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-white/20"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-400">
                    {project.category}
                  </span>

                  <span className="font-mono text-sm text-zinc-600">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-7 flex items-center gap-5">
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-white transition-colors hover:text-purple-400"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-zinc-500 transition-colors hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
