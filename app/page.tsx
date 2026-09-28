import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <Hero />

      <Projects />

      <About />

      <TechStack />

      <Contact />

      <Footer />
    </main>
  );
}
