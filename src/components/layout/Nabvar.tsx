"use client";

import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          Rodro<span className="text-zinc-500">.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </header>
  );
};

export default Navbar;