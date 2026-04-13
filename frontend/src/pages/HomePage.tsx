const links = [
  { href: 'https://github.com/Donghan5', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/donghan-kim01', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'mailto:donghank@student.42.fr', icon: 'fas fa-envelope', label: 'Email' },
];

export default function HomePage() {
  return (
    <section className="min-h-screen pt-12 flex flex-col justify-center relative z-10">
      <div className="max-w-5xl mx-auto px-6 w-full py-16 md:py-20">

        {/* Status row */}
        <div className="hero-1 flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
              style={{ animation: 'blink 2.4s step-end infinite' }}
            />
            <span className="font-mono text-[10px] text-primary tracking-[0.18em] uppercase">
              Available for opportunities
            </span>
          </div>
          <span className="font-mono text-[10px] text-text-subtle tracking-[0.15em] uppercase">
            Paris · 2026
          </span>
        </div>

        {/* Rule */}
        <div className="hero-2 rule mb-6" />

        {/* Hero name */}
        {/* marginLeft: '-0.03em' — optical alignment: compensates for Syne's left sidebearing at large sizes */}
        <div className="hero-3 mb-6">
          <h1
            className="font-display text-[clamp(5rem,14vw,10.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-text-main"
            style={{ fontFamily: 'Syne, sans-serif', marginLeft: '-0.03em' }}
          >
            DONGHAN
            <br />
            <span className="text-primary cursor-blink">KIM</span>
          </h1>
        </div>

        {/* Rule */}
        <div className="hero-4 rule mb-6" />

        {/* Two-column info */}
        <div className="hero-5 flex flex-col sm:flex-row sm:justify-between gap-5 mb-10">
          <div className="space-y-1.5">
            <p className="font-mono text-[13px] text-text-muted tracking-[0.02em]">
              CS Student · 42 Paris
            </p>
            <p className="font-mono text-[13px] text-text-muted tracking-[0.02em]">
              Software Engineer · AI / ML
            </p>
          </div>
          <div className="sm:text-right space-y-1.5">
            <p className="font-mono text-[12px] text-text-subtle">Paris, France</p>
            <p className="font-mono text-[12px] text-text-subtle">donghank@student.42.fr</p>
          </div>
        </div>

        {/* Social links + keyboard hint */}
        <div className="hero-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-10">
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
          <p className="font-mono text-[11px] text-text-subtle/50">
            <kbd className="px-1.5 py-0.5 border border-border text-text-subtle text-[10px] font-mono bg-bg-card">
              Ctrl K
            </kbd>
            {' '}to chat
          </p>
        </div>

        {/* Scroll hint — same container, same left baseline */}
        <div className="hero-6 flex items-center gap-4">
          <div className="rule flex-1" />
          <span className="font-mono text-[10px] text-text-subtle/40 tracking-[0.18em] uppercase shrink-0">
            Scroll to explore
          </span>
          <div className="rule flex-1" />
        </div>

      </div>
    </section>
  );
}
