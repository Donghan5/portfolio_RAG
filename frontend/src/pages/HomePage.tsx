import CommandPalette from '../components/CommandPalette';

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center mb-12">
        <p className="font-mono text-primary/70 text-sm tracking-widest uppercase mb-4">
          Portfolio
        </p>
        <h1 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold tracking-[-0.03em] text-text-main leading-[1.05] mb-4">
          Donghan <span className="text-primary">Kim</span>
        </h1>
        <p className="text-text-muted text-lg font-light max-w-md mx-auto">
          CS student at 42 Paris · Software Engineer
        </p>
      </div>

      <CommandPalette />

      <p className="relative z-10 mt-6 text-text-subtle/50 text-xs font-mono tracking-wide">
        To use chat, press <kbd className="px-1.5 py-0.5 rounded bg-border/50 border border-border-bright/30 text-text-muted text-[11px]">Ctrl + K</kbd>
      </p>

      {/* Social links */}
      <div className="relative z-10 flex items-center gap-6 mt-10">
        {[
          { href: 'https://github.com/Donghan5', icon: 'fab fa-github', label: 'GitHub' },
          { href: 'https://www.linkedin.com/in/donghan-kim01', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
          { href: 'mailto:donghank@student.42.fr', icon: 'fas fa-envelope', label: 'Email' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            title={link.label}
            className="text-text-subtle text-lg hover:text-primary transition-colors duration-300"
          >
            <i className={link.icon} />
          </a>
        ))}
      </div>
    </section>
  );
}
