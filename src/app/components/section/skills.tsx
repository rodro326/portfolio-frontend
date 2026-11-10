import { Code2, Terminal, Wrench, ChevronRight } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    iconBg: "bg-blue-500/10",
    iconColor: "text-[#60a5fa]",
    arrowColor: "text-[#4f8cff]",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Terminal,
    iconBg: "bg-purple-500/10",
    iconColor: "text-[#c084fc]",
    arrowColor: "text-[#a855f7]",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "RESTful APIs",
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-[#34d399]",
    arrowColor: "text-[#10b981]",
    skills: ["Git", "GitHub", "Figma", "Postman", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050b14] px-6 py-20 lg:px-10 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#e8edf7] sm:text-5xl">
            My Skills
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#4f8cff] to-[#a238f5]" />

          <p className="mt-6 text-lg leading-relaxed text-[#94a3b8]">
            A comprehensive list of the technologies, languages, and tools I
            use to build robust digital solutions.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-3xl border border-[#1e3655] bg-[#101827] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#334e75]"
              >
                {/* Card Header */}
                <div className="flex items-center gap-5 border-b border-[#293548] pb-6">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.iconBg} ${category.iconColor}`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="mt-7 space-y-5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-lg font-medium text-[#cbd5e1]"
                    >
                      <ChevronRight
                        size={20}
                        className={category.arrowColor}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;