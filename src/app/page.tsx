import Navbar from "@/components/layout/Nabvar";


export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-[calc(100vh-80px)] items-center justify-center"
      >
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Hi, I&apos;m Rodro.
          </h1>

          <p className="mt-6 text-lg text-zinc-400">
            Full-Stack Web Developer
          </p>
        </div>
      </section>
    </main>
  );
}