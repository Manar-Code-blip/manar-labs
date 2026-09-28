const stacks = [
  {
    title: "Development",
    technologies: ["Flutter", "Dart", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend & Data",
    technologies: ["Supabase", "PostgreSQL", "REST APIs", "Authentication"],
  },
  {
    title: "Tools",
    technologies: ["Git", "GitHub", "VS Code", "OpenCode"],
  },
  {
    title: "Environment",
    technologies: ["Linux", "CachyOS", "Hyprland", "Terminal"],
  },
];

export default function TechStack() {
  return (
    <section className="border-t border-white/5 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
            Technologies
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tech Stack
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {stacks.map((stack) => (
            <div
              key={stack.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="text-sm font-medium text-white">{stack.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {stack.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
