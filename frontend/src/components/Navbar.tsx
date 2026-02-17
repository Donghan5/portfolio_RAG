import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 z-[1000] flex items-center justify-center transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-[1100px] px-6 flex justify-between items-center">
        <NavLink
          to="/"
          className="font-mono font-bold text-sm text-primary/80 no-underline hover:text-primary transition-colors"
        >
          DK.
        </NavLink>
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `no-underline text-xs font-mono tracking-wide uppercase transition-colors duration-300 hover:text-text-main ${
                    isActive ? 'text-primary' : 'text-text-subtle'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
