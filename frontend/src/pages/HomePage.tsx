export default function HomePage() {
  return (
    <section className="hero-shell relative overflow-hidden border-b border-border pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="hero-dots" aria-hidden="true" />
      <div className="relative max-w-[1180px] mx-auto px-6 sm:px-10">
        <p className="hero-1 text-[15px] text-text-muted mb-4">Hi, I’m Donghan <span aria-hidden="true">👋</span></p>
        <h1 className="hero-2 max-w-[820px] text-[clamp(2.75rem,7vw,5.75rem)] font-bold tracking-[-0.055em] leading-[0.98] text-text-main">
          Backend systems,<br />APIs, and infrastructure
        </h1>
        <p className="hero-3 mt-6 text-[clamp(1.05rem,2vw,1.35rem)] font-semibold text-primary">
          Building reliable backend systems and data workflows
        </p>
        <p className="hero-4 mt-4 max-w-[620px] text-[16px] leading-7 text-text-muted">
          I design and build dependable services, data pipelines, and deployment workflows with an emphasis on clear architecture and maintainable systems.
        </p>
        <div className="hero-5 mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="button-primary">View projects <span aria-hidden="true">→</span></a>
          <a href="mailto:donghank@student.42.fr" className="button-secondary">Contact me</a>
        </div>
      </div>
    </section>
  );
}
