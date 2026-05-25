const links = [
  { href: 'https://github.com/Donghan5', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/donghan-kim01', label: 'LinkedIn' },
  { href: 'mailto:donghank@student.42.fr', label: 'Email' },
];

const capabilities = [
  {
    title: 'Model',
    items: ['From-scratch implementations', 'Training mechanics', 'Evaluation fundamentals'],
  },
  {
    title: 'Pipeline',
    items: ['Signal preprocessing', 'Feature construction', 'Retrieval workflows'],
  },
  {
    title: 'System',
    items: ['APIs and deployment', 'Docker and Kubernetes', 'Production-oriented engineering'],
  },
];

export default function HomePage() {
  return (
    <section className="min-h-[calc(100svh-56px)] pt-20 pb-14 md:pt-24 md:pb-18 relative z-10 flex flex-col justify-center">
      <div className="max-w-[1040px] mx-auto px-6 sm:px-8 w-full">

        <div className="hero-1 flex items-center gap-2.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" style={{ animation: 'pulse-dot 2.4s ease-out infinite' }} />
          <span className="font-mono text-[11px] text-primary tracking-[0.18em] uppercase">
            Machine Learning Engineer focused on data-driven systems
          </span>
        </div>

        <div className="hero-2 rule mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-16 items-end">
          <div>
            <div className="hero-3 mb-6">
              <h1 className="font-display font-light text-[clamp(3rem,7vw,5.75rem)] leading-[1.02] text-text-main">
                Donghan <em className="font-normal italic text-primary">Kim</em>
              </h1>
            </div>

            <p className="hero-4 font-serif-alt font-light text-[clamp(1.55rem,3vw,2.25rem)] leading-[1.28] text-text-main max-w-[18ch] sm:max-w-[24ch] mb-5">
              I build machine-learning systems from raw data to deployment &mdash;
              retrieval pipelines, model implementations, and signal classification workflows.
            </p>
            <p className="hero-5 font-mono text-[12px] sm:text-[13px] text-text-muted tracking-[0.04em] mb-8">
              42 Paris &middot; Applied ML &middot; Data pipelines &middot; Production engineering
            </p>

            <div className="hero-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
              <a
                href="mailto:donghank@student.42.fr"
                className="inline-flex w-fit items-center justify-center border border-primary px-5 py-3 font-mono text-[11px] tracking-[0.14em] uppercase text-primary no-underline transition-colors duration-200 hover:bg-primary hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
              >
                Contact
              </a>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="font-mono text-[12px] text-text-muted no-underline hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <aside className="hero-6 border-t lg:border-t-0 lg:border-l border-border pt-7 lg:pt-0 lg:pl-9">
            <p className="font-mono text-[11px] leading-[1.7] tracking-[0.12em] uppercase text-primary mb-6">
              Open to Machine Learning Engineering internships &middot; Data Science-oriented roles welcome
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5">
              {capabilities.map((capability) => (
                <div key={capability.title} className="capability-block">
                  <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-main mb-2">
                    {capability.title}
                  </h2>
                  <ul className="space-y-1.5">
                    {capability.items.map((item) => (
                      <li key={item} className="font-sans text-[14px] leading-[1.55] text-text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 font-mono text-[11px] text-text-subtle">
              <kbd className="px-1.5 py-0.5 border border-border text-text-subtle text-[10px] font-mono bg-bg-card">Ctrl K</kbd>
              {' '}to chat
            </p>
          </aside>
        </div>

      </div>
    </section>
  );
}
