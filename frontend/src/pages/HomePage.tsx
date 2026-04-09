const links = [
  { href: 'https://github.com/Donghan5', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/donghan-kim01', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'mailto:donghank@student.42.fr', icon: 'fas fa-envelope', label: 'Email' },
];

export default function HomePage() {
  return (
    <section className="min-h-screen pt-12 flex flex-col justify-center relative z-10">
      <div className="max-w-5xl mx-auto px-6 w-full py-16 md:py-24">

        {/* Top label row */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-[10px] text-text-subtle tracking-[0.22em] uppercase">
            Portfolio · 2025
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: 'blink 2s step-end infinite' }} />
            <span className="font-mono text-[10px] text-primary tracking-[0.15em] uppercase">Available</span>
          </div>
        </div>

        {/* Rule */}
        <div className="rule mb-8" />

        {/* Hero name */}
        <div className="mb-8 overflow-hidden">
          <h1
            className="font-display text-[clamp(4.5rem,13vw,9.5rem)] font-extrabold leading-[0.88] tracking-[-0.03em] text-text-main"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            DONGHAN
            <br />
            <span className="text-primary cursor-blink">KIM</span>
          </h1>
        </div>

        {/* Rule */}
        <div className="rule mb-8" />

        {/* Two-column info row */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-12">
          <div className="space-y-1">
            <p className="font-mono text-[13px] text-text-muted">
              CS Student · 42 Paris
            </p>
            <p className="font-mono text-[13px] text-text-muted">
              Software Engineer · AI / ML
            </p>
          </div>
          <div className="sm:text-right space-y-1">
            <p className="font-mono text-[12px] text-text-subtle">
              Paris, France
            </p>
            <p className="font-mono text-[12px] text-text-subtle">
              donghank@student.42.fr
            </p>
          </div>
        </div>

        {/* Social + hint row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="font-mono text-[11px] text-text-subtle hover:text-primary hover-underline transition-colors duration-200 no-underline flex items-center gap-1.5"
              >
                <i className={`${link.icon} text-xs`} />
                {link.label}
              </a>
            ))}
          </div>
          <p className="font-mono text-[11px] text-text-subtle/60">
            <kbd className="px-1.5 py-0.5 border border-border text-text-subtle text-[10px] font-mono bg-bg-card">
              Ctrl K
            </kbd>
            {' '}to chat
          </p>
        </div>
      </div>

      {/* Bottom decorative rule with label */}
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex items-center gap-4">
          <div className="rule flex-1" />
          <span className="font-mono text-[10px] text-text-subtle/50 tracking-[0.18em] uppercase shrink-0">
            Scroll to explore
          </span>
          <div className="rule flex-1" />
        </div>
      </div>
    </section>
  );
}
