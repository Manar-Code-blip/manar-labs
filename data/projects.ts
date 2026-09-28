export type Project = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "LAQIHA",
    description:
      "A modern marketplace for discovering and publishing listings in Syria, with built-in messaging and a simple user experience.",
    category: "Marketplace",
    technologies: ["Flutter", "Supabase", "PostgreSQL"],
    image: "/images/projects/laqiha.png",
    github: "https://github.com/",
    live: "#",
    featured: true,
  },
  {
    title: "رياضياتنا",
    description:
      "An educational platform designed to help Syrian secondary students access organized mathematics lessons and learning content.",
    category: "Education",
    technologies: ["Flutter", "Supabase", "Dart"],
    image: "/images/projects/math.png",
    github: "https://github.com/",
  },
  {
    title: "More Projects",
    description:
      "More experiments, applications, and ideas are currently in development.",
    category: "Coming Soon",
    technologies: ["Next.js", "TypeScript"],
    image: "/images/projects/math.png",
  },
];