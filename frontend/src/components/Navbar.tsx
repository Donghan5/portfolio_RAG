import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[1000] bg-bg/90 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-display font-bold text-[15px] tracking-tight text-text-main no-underline hover:text-primary transition-colors duration-200"
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
                  `no-underline text-[11px] font-mono tracking-[0.12em] uppercase transition-colors duration-200 hover-underline ${
                    isActive ? 'text-primary' : 'text-text-subtle hover:text-text-main'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer"
          aria-label={mobileOpen ? 'Close' : 'Open'}
        >
          <span className={`block w-5 h-px bg-text-muted transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-text-muted transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-px bg-text-muted transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } border-t border-border bg-bg/95`}
      >
        <ul className="list-none py-2 px-6 flex flex-col">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block no-underline text-[11px] font-mono tracking-[0.12em] uppercase py-3 transition-colors duration-200 hover:text-text-main ${
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
