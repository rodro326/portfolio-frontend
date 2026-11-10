import { BriefcaseBusiness, GraduationCap, Code2 } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company: "Personal & Academic Projects",
    period: "2024 - Present",
    description:
      "Building modern full-stack web applications using React, Next.js, Node.js, Express.js, TypeScript, and MongoDB.",
    icon: Code2,
    color: "blue",
  },
  {
    title: "Computer Science & Engineering",
    company: "IUBAT — International University of Business Agriculture and Technology",
    period: "2022 - Present",
    description:
      "Developing a strong foundation in software development, web technologies, databases, algorithms, and modern computing concepts.",
    icon: GraduationCap,
    color: "purple",
  },
  {
    title: "Independent Developer",
    company: "Personal Projects & Continuous Learning",
    period: "2023 - Present",
    description:
      "Continuously improving my development skills by building real-world projects and exploring modern web technologies.",
    icon: BriefcaseBusiness,
    color: "green",
  },
];

const colorStyles = {
  blue: {
    icon: "bg-blue-500/10 text-[#60a5fa]",
    dot: "bg-[#3b82f6]",
    border: "border-blue-500/20",
  },
  purple: {
    icon: "bg-purple-500/10 text-[#c084fc]",
    dot: "bg-[#a855f7]",
    border: "border-purple-500/20",
  },
  green: {
    icon: "bg-emerald-500/10 text-[#34d399]",
    dot: "bg-[#10b981]",
    border: "border-emerald-500/20",
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050b14] px-6 py-20 lg:px-10 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/5 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#818cf8]">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#e8edf7] sm:text-5xl">
            Experience & Education
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#4f8cff] to-[#a238f5]" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#94a3b8]">
            My journey of learning, building, and growing as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8 before:absolute before:bottom-0 before:left-6 before:top-0 before:w-px before:bg-[#293548] md:before:left-1/2">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            const style =
              colorStyles[experience.color as keyof typeof colorStyles];

            return (
              <div
                key={experience.title}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-6 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full ${style.dot} md:left-1/2`}
                />

                {/* Empty Side */}
                <div className="hidden w-1/2 md:block" />

                {/* Card */}
                <div className="ml-12 w-auto md:ml-0 md:w-1/2">
                  <div
                    className={`rounded-2xl border ${style.border} bg-[#101827] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#405f8d]`}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${style.icon}`}
                      >
                        <Icon size={27} />
                      </div>

                      <div>
                        <span className="text-sm font-semibold text-[#94a3b8]">
                          {experience.period}
                        </span>

                        <h3 className="mt-2 text-xl font-bold text-white">
                          {experience.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-[#818cf8]">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 leading-relaxed text-[#94a3b8]">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;