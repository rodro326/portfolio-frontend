import Link from "next/link";
import { ArrowRight, Download, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050b14] px-6 py-16 lg:px-10 lg:py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-full w-[45%] bg-[radial-gradient(circle_at_left,_rgba(30,64,175,0.12),_transparent_65%)]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[700px] max-w-[1400px] items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          {/* Availability Badge */}
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#1d4e89] bg-[#0b1c36] px-4 py-2 text-sm font-medium text-[#60a5fa]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#3b82f6]" />
            Available for work
          </div>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Hello, I&apos;m
            <span className="mt-2 block bg-gradient-to-r from-[#4f8cff] via-[#8b7cff] to-[#a238f5] bg-clip-text text-transparent">
              Md. Jahidur
            </span>
            <span className="block bg-gradient-to-r from-[#b06cff] to-[#8a20e8] bg-clip-text text-transparent">
              Rahman Rodro
            </span>
          </h1>

          <h2 className="mt-8 text-2xl font-semibold text-[#a5b4cb] sm:text-3xl">
            Full-Stack Web Developer
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#94a3b8]">
            I specialize in building modern, scalable, and user-friendly web
            applications using the MERN stack. Turning complex problems into
            elegant, intuitive digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#a238f5] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:scale-[1.02]"
            >
              View My Work
              <ArrowRight size={19} />
            </Link>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-xl border border-[#293548] bg-[#121a28] px-7 py-4 text-base font-semibold text-white transition hover:border-[#4f8cff]"
            >
              <Download size={19} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          {/* Social Links */}
<div className="mt-14 flex items-center gap-4">
  <a
    href="https://github.com/rodro326"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="flex h-14 w-14 items-center justify-center rounded-full border border-[#293548] bg-[#111827] text-[#cbd5e1] transition hover:border-[#4f8cff] hover:text-white"
  >
    <FaGithub size={23} />
  </a>

  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex h-14 w-14 items-center justify-center rounded-full border border-[#293548] bg-[#111827] text-[#cbd5e1] transition hover:border-[#a238f5] hover:text-white"
  >
    <FaLinkedin size={23} />
  </a>
</div>
        </div>

        {/* Right Developer Visual */}
        <div className="relative hidden min-h-[600px] items-center justify-center lg:flex">
          <div className="absolute h-[440px] w-[440px] rounded-full bg-[#2b1b5a]/30 blur-[80px]" />

          <div className="relative flex h-[470px] w-[470px] items-center justify-center rounded-[45%] border border-[#312b5e] bg-[#0b1322] shadow-[0_0_60px_rgba(124,58,237,0.28)]">
            <Code2
              size={76}
              strokeWidth={1.2}
              className="text-[#334155]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;