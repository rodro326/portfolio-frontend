import Navbar from "./components/layout/Navbar";
import About from "./components/section/About";
import Experience from "./components/section/Experience";
import Footer from "./components/section/Footer";
import Hero from "./components/section/Hero";
import Contact from "./components/section/contact";
import Skills from "./components/section/skills";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact/>
      <Footer/>
      {/* Hero Section */}
    </main>
  );
}