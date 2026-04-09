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
    <nav ref={navRef} className="fixed top-4 left-0 right-0 z-[1000] flex justify-center px-4">

      {/* Desktop: floating pill */}
      <div
        className={`hidden md:flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-bg-surface/85 backdrop-blur-2xl border border-border-bright/70 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(167,139,250,0.04)]'
            : 'bg-bg-surface/50 backdrop-blur-xl border border-border-bright/40'
        }`}
      >
        <NavLink
          to="/"
          className="font-mono font-bold text-sm text-primary/80 no-underline hover:text-primary transition-colors px-3 py-1.5"
        >
          DK.
        </NavLink>
        <div className="w-px h-4 bg-border-bright/50 mx-1" />
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `no-underline text-xs font-mono tracking-wide uppercase px-3 py-1.5 rounded-full transition-all duration-200 ${
                isActive
                  ? 'text-primary bg-primary/10'
                  : 'text-text-subtle hover:text-text-main hover:bg-white/5'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full flex flex-col gap-2">
        <div
          className={`flex items-center justify-between px-5 h-14 rounded-2xl transition-all duration-300 ${
            scrolled || mobileOpen
              ? 'bg-bg-surface/90 backdrop-blur-2xl border border-border-bright/60 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'bg-bg-surface/50 backdrop-blur-xl border border-border/60'
          }`}
        >
          <NavLink
            to="/"
            className="font-mono font-bold text-sm text-primary/80 no-underline hover:text-primary transition-colors"
          >
            DK.
          </NavLink>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer bg-transparent border-none"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-5 h-px bg-text-subtle transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-text-subtle transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-px bg-text-subtle transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-bg-surface/90 backdrop-blur-2xl border border-border-bright/60 rounded-2xl py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block no-underline text-xs font-mono tracking-wide uppercase px-5 py-3 transition-colors duration-200 hover:text-text-main ${
                    isActive ? 'text-primary' : 'text-text-subtle'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
