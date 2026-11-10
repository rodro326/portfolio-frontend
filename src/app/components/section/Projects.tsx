import Link from "next/link";
import { ArrowUpRight, FolderKanban } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Nexora",
    description:
      "A modern full-stack e-commerce platform with a scalable backend architecture and role-based features.",
    technologies: ["Next.js", "TypeScript", "Express.js", "MongoDB"],
    github: "https://github.com/rodro326/Nexora_Backend",
    live: "#",
    featured: true,
  },
  {
    title: "University Management System",
    description:
      "A comprehensive web application designed to manage university-related information and operations efficiently.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Car Service Center",
    description:
      "A web-based platform for managing car service bookings and providing a smooth customer experience.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    github: "https://github.com/rodro326/car-service-center",
    live: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050b14] px-6 py-20 lg:px-10 lg:py-28"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[130px]" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-purple-600/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#818cf8]">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#e8edf7] sm:text-5xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#4f8cff] to-[#a238f5]" />

          <p className="mt-6 text-lg leading-relaxed text-[#94a3b8]">
            A selection of projects where I turn ideas into modern and
            functional digital experiences.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-[#1e3655] bg-[#101827] transition duration-300 hover:-translate-y-2 hover:border-[#405f8d]"
            >
              {/* Project Visual */}
              <div className="relative flex h-52 items-center justify-center border-b border-[#293548] bg-[#0b1322]">
                <div className="absolute h-40 w-40 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl" />

                <FolderKanban
                  size={60}
                  strokeWidth={1.2}
                  className="relative text-[#40506a] transition duration-300 group-hover:text-[#818cf8]"
                />

                {project.featured && (
                  <span className="absolute right-5 top-5 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-[72px] leading-relaxed text-[#94a3b8]">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-[#293548] bg-[#0b1322] px-3 py-1.5 text-sm text-[#a5b4cb]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-7 flex items-center gap-5">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-semibold text-[#cbd5e1] transition hover:text-white"
                  >
                   <FaGithub size={18} />
                    Code
                  </Link>

                  <Link
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-semibold text-[#818cf8] transition hover:text-[#a78bfa]"
                  >
                    Live Demo
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;