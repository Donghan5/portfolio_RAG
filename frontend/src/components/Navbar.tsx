import { useState, useEffect } from 'react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Work', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress(scrollHeight > clientHeight ? (scrollTop / (scrollHeight - clientHeight)) * 100 : 0);

      const OFFSET = 160;
      let current = 'home';
      for (const { id } of [{ id: 'home' }, ...navItems]) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= OFFSET) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-bg/92 backdrop-blur-md border-b border-border">
      <div className="absolute bottom-0 left-0 h-[1.5px] bg-primary transition-[width] duration-100 ease-linear" style={{ width: `${progress}%` }} />
      <div className="max-w-[880px] mx-auto px-8 h-14 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="font-serif font-medium text-[18px] tracking-tight text-text-main hover:text-primary transition-colors duration-200 bg-transparent border-none cursor-pointer p-0">
          DK<span className="text-primary">.</span>
        </button>
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => scrollTo(item.id)} className={`bg-transparent border-none cursor-pointer text-[13px] font-sans tracking-[0.01em] transition-colors duration-200 hover-underline p-0 ${active === item.id ? 'text-primary' : 'text-text-muted hover:text-text-main'}`}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => setMobileOpen((p) => !p)} className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer" aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
          <span className={`block w-5 h-px bg-text-muted transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-text-muted transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-px bg-text-muted transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} border-t border-border bg-bg/95`}>
        <ul className="list-none py-2 px-8 flex flex-col">
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => scrollTo(item.id)} className={`block w-full text-center text-[13px] font-sans py-3 transition-colors duration-200 bg-transparent border-none cursor-pointer hover:text-text-main ${active === item.id ? 'text-primary' : 'text-text-muted'}`}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
