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
      <main className="max-w-[1200px] mx-auto w-full">
        <div id="home" className="w-full">
          <Hero />
        </div>
        <div id="about" className="w-full">
          <About />
        </div>
        <div id="experience" className="w-full bg-bg-surface">
          <Experience />
        </div>
        <div id="projects" className="w-full">
          <Projects />
        </div>
        <div id="contact" className="w-full bg-bg-surface">
          <Contact />
        </div>
      </main>
      <CommandPalette />
    </>
  );
}
