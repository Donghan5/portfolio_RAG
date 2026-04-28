const links = [
  { href: 'https://github.com/Donghan5', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/donghan-kim01', label: 'LinkedIn' },
  { href: 'mailto:donghank@student.42.fr', label: 'Email' },
];

export default function HomePage() {
  return (
    <section className="pt-14 relative z-10 flex flex-col items-center">
      <div className="max-w-[720px] mx-auto px-8 w-full py-16 md:py-20 text-center">

        <div className="hero-1 flex items-center justify-center gap-2.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" style={{ animation: 'pulse-dot 2.4s ease-out infinite' }} />
          <span className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase">
            Open to opportunities &middot; H2 2027
          </span>
        </div>

        <div className="hero-2 rule mb-10" />

        <div className="hero-3 mb-6">
          <h1 className="font-display font-light text-[clamp(2.8rem,6vw,3.8rem)] leading-[1.05] tracking-[-0.025em] text-text-main">
            Donghan <em className="font-normal italic text-primary">Kim</em>
          </h1>
        </div>

        <p className="hero-4 font-serif-alt font-light text-[22px] leading-[1.55] text-text-main mx-auto max-w-[52ch] mb-3">
          I turn hypotheses into numbers &mdash; and code the whole pipeline that gets them there.
        </p>
        <p className="hero-5 font-mono text-[13px] text-text-muted tracking-[0.04em] mb-10">
          Data Scientist in the making &middot; Full-stack &amp; DevOps engineer &middot; 42 Paris
        </p>

        <div className="hero-6 flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
          <div className="flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="font-mono text-[12px] text-text-muted no-underline hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="font-mono text-[11px] text-text-subtle/50">
            <kbd className="px-1.5 py-0.5 border border-border text-text-subtle text-[10px] font-mono bg-bg-card">Ctrl K</kbd>
            {' '}to chat
          </p>
        </div>

        <div className="hero-6 flex items-center gap-4">
          <div className="rule flex-1" />
          <span className="font-mono text-[11px] text-text-subtle/40 tracking-[0.18em] uppercase shrink-0">
            Scroll to explore
          </span>
          <div className="rule flex-1" />
        </div>
      </div>
    </section>
  );
}
