import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1e293b] bg-[#050b14]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-[#4f8cff] to-[#a238f5] bg-clip-text"
        >
          JR.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[17px] font-medium text-[#cbd5e1] transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hire Me Button */}
        <Link
          href="#contact"
          className="rounded-full bg-gradient-to-r from-[#3b82f6] to-[#a238f5] px-7 py-3 text-[17px] font-semibold text-white transition-transform duration-200 hover:scale-105"
        >
          Hire Me
        </Link>
      </div>
    </header>
  );
};

export default Navbar;