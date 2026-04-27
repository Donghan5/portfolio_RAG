import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Hero from './pages/HomePage';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    const targets = ['about', 'experience', 'projects', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full">
        <div id="home" className="w-full bg-bg">
          <Hero />
        </div>
        <div id="about" className="w-full bg-bg-card section-divider-top">
          <About />
        </div>
        <div id="experience" className="w-full bg-bg">
          <Experience />
        </div>
        <div id="projects" className="w-full bg-bg-card section-divider-top">
          <Projects />
        </div>
        <div id="contact" className="w-full bg-bg">
          <Contact />
        </div>
      </main>
      <CommandPalette />
    </>
  );
}
