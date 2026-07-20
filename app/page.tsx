import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Repository from "@/components/Repository";
import Projects from "@/components/Projects";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TrustBar />
      <About />
      <Expertise />
      <Repository />
      <Projects />
      <BlogPreview />
      <Contact />
    </main>
  );
}
