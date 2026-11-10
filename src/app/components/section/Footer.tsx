import Link from "next/link";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#1e3655] bg-[#050b14]">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-600/5 blur-[100px]" />
      <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-purple-600/5 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="bg-gradient-to-r from-[#4f8cff] to-[#a238f5] bg-clip-text text-3xl font-bold tracking-tight text-transparent"
            >
              JR.
            </Link>

            <p className="mt-5 max-w-sm leading-relaxed text-[#94a3b8]">
              Full-Stack Web Developer focused on building modern, scalable,
              and user-friendly digital experiences.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com/rodro326"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#293548] bg-[#101827] text-[#94a3b8] transition hover:-translate-y-1 hover:border-[#4f8cff] hover:text-white"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#293548] bg-[#101827] text-[#94a3b8] transition hover:-translate-y-1 hover:border-[#a238f5] hover:text-white"
              >
                <FaLinkedin size={19} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <div className="mt-5 flex flex-col items-start gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#94a3b8] transition hover:translate-x-1 hover:text-[#818cf8]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Let&apos;s Connect
            </h3>

            <p className="mt-5 leading-relaxed text-[#94a3b8]">
              Have a project in mind or want to work together? Feel free to
              get in touch.
            </p>

            <Link
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#a238f5] px-5 py-3 font-semibold text-white transition hover:scale-[1.03]"
            >
              Get In Touch
              <FaArrowUp size={14} className="rotate-45" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-[#1e293b]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-[#64748b] md:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} Md. Jahidur Rahman Rodro. All rights
            reserved.
          </p>

          <Link
            href="#home"
            aria-label="Back to top"
            className="flex items-center gap-2 transition hover:text-[#818cf8]"
          >
            Back to top
            <FaArrowUp size={13} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;