import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"; 
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#0F1A2B] text-[#BDC4D4]">
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="overflow-hidden">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        {/* Skills Section right after About */}
        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
