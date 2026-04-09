export default function HomePage() {
  const links = [
    { href: 'https://github.com/Donghan5', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/donghan-kim01', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    { href: 'mailto:donghank@student.42.fr', icon: 'fas fa-envelope', label: 'Email' },
  ];

  const bentoItems = [
    { icon: 'fas fa-map-marker-alt', label: 'Paris, FR' },
    { icon: 'fas fa-graduation-cap', label: '42 Paris' },
    { icon: 'fas fa-brain', label: 'AI / ML' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Animated aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-1 absolute top-1/4 left-1/5 w-[520px] h-[520px] bg-primary/8 rounded-full blur-[130px]" />
        <div className="aurora-2 absolute top-1/3 right-1/5 w-[420px] h-[420px] bg-secondary/6 rounded-full blur-[110px]" />
        <div className="aurora-3 absolute bottom-1/4 left-2/5 w-[320px] h-[320px] bg-accent/5 rounded-full blur-[90px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl flex flex-col items-center">
        {/* Status badge */}
        <div className="flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-primary/8 border border-primary/20 text-primary text-[11px] font-mono tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </div>

        {/* Hero text */}
        <div className="text-center mb-10">
          <h1 className="text-[clamp(3.2rem,8vw,6rem)] font-black tracking-[-0.04em] leading-[0.92] mb-5">
            <span className="text-text-main">Donghan</span>
            <br />
            <span className="gradient-text">Kim</span>
          </h1>
          <p className="text-text-muted text-base font-light max-w-sm mx-auto leading-relaxed">
            CS student at 42 Paris · Software Engineer
          </p>
        </div>

        {/* Bento mini-cards */}
        <div className="grid grid-cols-3 gap-3 w-full mb-10">
          {bentoItems.map((item) => (
            <div
              key={item.label}
              className="bg-bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 flex flex-col items-center gap-2 hover:border-primary/25 hover:bg-bg-card/70 transition-all duration-300"
            >
              <i className={`${item.icon} text-primary/50 text-sm`} />
              <p className="text-text-subtle text-[11px] font-mono tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3 mb-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              title={link.label}
              className="w-10 h-10 rounded-xl bg-bg-card/50 border border-border flex items-center justify-center text-text-subtle hover:text-primary hover:border-primary/30 hover:bg-primary/8 transition-all duration-300"
            >
              <i className={link.icon} />
            </a>
          ))}
        </div>

        {/* Keyboard hint */}
        <p className="text-text-subtle/35 text-[11px] font-mono tracking-wide">
          Press{' '}
          <kbd className="px-1.5 py-0.5 rounded-md bg-border/60 border border-border-bright/30 text-text-muted text-[10px]">
            Ctrl + K
          </kbd>
          {' '}to ask AI about me
        </p>
      </div>
    </section>
  );
}
