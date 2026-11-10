import { Code2, MapPin, CalendarDays } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050b14] px-6 py-20 lg:px-10 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#e8edf7] sm:text-5xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#4f8cff] to-[#a238f5]" />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Visual */}
          <div className="relative flex min-h-[480px] items-center justify-center">
            <div className="absolute h-[380px] w-[380px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[80px]" />

            <div className="relative flex h-[480px] w-full max-w-[540px] items-center justify-center rounded-3xl border border-[#1e3a5f] bg-[#101827] shadow-[0_0_40px_rgba(37,99,235,0.12)]">
              <Code2
                size={72}
                strokeWidth={1.2}
                className="text-[#334155]"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl font-bold text-white">
              Full-Stack Developer based in Dhaka
            </h3>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#94a3b8]">
              <p>
                I am a passionate Full-Stack MERN Developer dedicated to
                crafting high-performance, accessible, and scalable web
                applications. My journey in tech started with a curiosity for
                how things work on the internet, which naturally led me down
                the path of Computer Science and web development.
              </p>

              <p>
                When I&apos;m not writing code, you can find me exploring new
                technologies, contributing to open-source, or optimizing
                personal projects. I thrive in collaborative environments and
                am always eager to learn and grow.
              </p>
            </div>

            {/* Info Cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {/* Education */}
              <div className="rounded-2xl border border-[#293548] bg-[#121a28] p-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-[#60a5fa]">
                    <Code2 size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-[#94a3b8]">Education</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Computer Science & Engineering
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-[#293548] bg-[#121a28] p-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-[#c084fc]">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-[#94a3b8]">Location</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-5 rounded-2xl border border-[#293548] bg-[#121a28] p-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <CalendarDays size={24} />
                </div>

                <div>
                  <p className="text-sm text-[#94a3b8]">Availability</p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Open to full-time roles & freelance projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;