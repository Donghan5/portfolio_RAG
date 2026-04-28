const stackRows = [
  { label: 'Languages', values: 'Python · TypeScript · C / C++ · Go · Bash' },
  { label: 'ML & Data', values: 'NumPy · PyTorch · scikit-learn · pandas · FastEmbed · pgvector' },
  { label: 'Tools & Infra', values: 'Docker · Kubernetes · Linux · Git · Kafka · Redis · Supabase' },
  { label: 'Web', values: 'React · NestJS · FastAPI · Node.js · TailwindCSS · Socket.io' },
];

export default function About() {
  return (
    <div className="relative z-10">
      <div className="max-w-[880px] mx-auto px-8 py-20 md:py-28">

        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-2.5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">About</span>
          <span className="font-mono text-[11px] tracking-[0.14em] text-text-subtle">&sect; 01</span>
        </div>
        <div className="rule-accent mb-1.5" />
        <div className="rule mb-14" />

        {/* Portrait + Intro: side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:gap-14 items-start mb-16">
          <figure className="shrink-0 w-[200px] mx-auto md:mx-0 mb-10 md:mb-0">
            <img src="/profile_image.JPG" alt="Donghan Kim" className="block w-full aspect-square object-cover border border-border grayscale hover:grayscale-0 transition-[filter] duration-700" />
            <figcaption className="flex gap-3 font-mono text-[10px] tracking-[0.14em] uppercase text-text-subtle mt-2.5">
              <span>Donghan Kim</span>
              <span>&middot;</span>
              <span>Paris &middot; 2026</span>
            </figcaption>
          </figure>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display font-light text-[clamp(2.2rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.025em] text-text-main mb-6">
              An engineer who learned to think in <em className="font-normal italic text-primary">hypotheses.</em>
            </h2>
            <p className="font-serif-alt font-light text-[22px] leading-[1.55] text-text-main max-w-[56ch]">
              I got pulled into data science because forming a hypothesis
              and watching numbers prove it right or wrong turned out to be
              the most honest kind of thinking I've found in tech.
            </p>
          </div>
        </div>

        {/* The path + What I'm focused on: side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {/* The path */}
          <div>
            <div className="flex items-baseline gap-4 mb-5 pt-6 border-t border-border">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-text-subtle">The path</span>
              <span className="font-mono text-[11px] text-text-subtle">&sect; 01.1</span>
            </div>
            <p className="font-sans text-[17px] leading-[1.7] text-text-main mb-6">
              Final stretch of <strong className="font-medium">42 Paris</strong> &mdash; RNCP Level 7, AI &amp; Data branch.
              Wide exploration: C allocators, ray tracing, Kubernetes, full-stack React &amp; NestJS.
            </p>
            <p className="font-sans text-[17px] leading-[1.7] text-text-main">
              The goal wasn't collecting skills &mdash; it was learning every brittle layer
              <em className="font-serif-alt italic"> between</em> an idea and a working system.
              Now I bring that full stack to data work.
            </p>
          </div>

          {/* What I'm focused on */}
          <div>
            <div className="flex items-baseline gap-4 mb-5 pt-6 border-t border-border">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-text-subtle">What I'm focused on</span>
              <span className="font-mono text-[11px] text-text-subtle">&sect; 01.2</span>
            </div>
            <p className="font-sans text-[17px] leading-[1.7] text-text-main mb-6">
              <strong className="font-medium">Machine-learning modeling</strong> &mdash;
              building from scratch before reaching for libraries.
              Hand-derived backprop, Q-learning, then frameworks.
            </p>
            <p className="font-sans text-[17px] leading-[1.7] text-text-main mb-6">
              <strong className="font-medium">Causal inference</strong> &mdash;
              because &ldquo;X correlates with Y&rdquo; is where most analysis stops,
              and where the interesting question begins.
            </p>
            <p className="font-sans text-[17px] leading-[1.7] text-text-main">
              <strong className="font-medium">End-to-end ownership</strong> &mdash;
              pipeline to training to deployment to monitoring.
              A model is only as useful as the system it runs in.
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="pt-10 border-t border-border">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">Tech Stack</span>
            <span className="font-mono text-[11px] text-text-subtle">&sect; 01.3</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stackRows.map((row) => (
              <div key={row.label} className="pb-5 border-b border-border">
                <span className="block font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle mb-1.5">
                  {row.label}
                </span>
                <span className="block font-sans text-[15px] leading-[1.7] text-text-main">
                  {row.values}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
