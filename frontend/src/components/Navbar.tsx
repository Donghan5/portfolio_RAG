import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.addEventListener('mousedown', handler);
    }
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="h-16 w-full max-w-[1100px] mx-auto px-6 flex justify-between items-center">
        <NavLink
          to="/"
          className="font-mono font-bold text-sm text-primary/80 no-underline hover:text-primary transition-colors"
        >
          DK.
        </NavLink>

        {/* Desktop nav */}
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

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer bg-transparent border-none"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-5 h-px bg-text-subtle transition-all duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-text-subtle transition-all duration-300 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-text-subtle transition-all duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-bg/95 backdrop-blur-xl border-b border-border/50`}
      >
        <ul className="list-none py-2 px-6 flex flex-col">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block no-underline text-xs font-mono tracking-wide uppercase py-3 transition-colors duration-300 hover:text-text-main ${
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
