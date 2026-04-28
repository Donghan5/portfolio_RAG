const stackRows = [
  { label: 'Languages', values: 'Python \u00b7 TypeScript \u00b7 C / C++ \u00b7 Go \u00b7 Bash' },
  { label: 'ML & Data', values: 'NumPy \u00b7 PyTorch \u00b7 scikit-learn \u00b7 pandas \u00b7 FastEmbed \u00b7 pgvector' },
  { label: 'Tools & Infra', values: 'Docker \u00b7 Kubernetes \u00b7 Linux \u00b7 Git \u00b7 Kafka \u00b7 Redis \u00b7 Supabase' },
  { label: 'Web', values: 'React \u00b7 NestJS \u00b7 FastAPI \u00b7 Node.js \u00b7 TailwindCSS \u00b7 Socket.io' },
];

export default function About() {
  return (
    <div className="relative z-10">
      <div className="max-w-[720px] mx-auto px-8 pt-6 pb-[7.3rem] text-center">

        {/* Section header */}
        <div className="flex items-baseline justify-center gap-4 mb-2.5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">About</span>
          <span className="font-mono text-[11px] tracking-[0.14em] text-text-subtle">&sect; 01</span>
        </div>
        <div className="rule-accent mx-auto mb-1.5" />
        <div className="rule mb-12" />

        {/* Display heading */}
        <h2 className="font-display font-light text-[clamp(2.2rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.025em] text-text-main mb-6">
          An engineer who learned to think in <em className="font-normal italic text-primary">hypotheses.</em>
        </h2>

        <p className="font-serif-alt font-light text-[22px] leading-[1.55] text-text-main max-w-[56ch] mx-auto mb-14">
          I got pulled into data science because forming a hypothesis
          and watching numbers prove it right or wrong turned out to be
          the most honest kind of thinking I've found in tech.
        </p>

        {/* Portrait */}
        <figure className="w-[200px] mx-auto mb-14 max-md:w-[160px]">
          <img src="/profile_image.JPG" alt="Donghan Kim" className="block w-full aspect-square object-cover border border-border grayscale hover:grayscale-0 transition-[filter] duration-700" />
          <figcaption className="flex justify-center gap-3 font-mono text-[10px] tracking-[0.14em] uppercase text-text-subtle mt-2.5">
            <span>Donghan Kim</span>
            <span>&middot;</span>
            <span>Paris &middot; 2026</span>
          </figcaption>
        </figure>

        {/* The path */}
        <div className="mb-14">
          <div className="flex items-baseline justify-center gap-4 mb-5 pt-6 border-t border-border">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-text-subtle">The path</span>
            <span className="font-mono text-[11px] text-text-subtle">&sect; 01.1</span>
          </div>
          <p className="font-sans text-[17px] leading-[1.7] text-text-main mb-6 max-w-[52ch] mx-auto">
            Final stretch of <strong className="font-medium">42 Paris</strong> &mdash; RNCP Level 7, AI &amp; Data branch.
            Wide exploration: C allocators, ray tracing, Kubernetes, full-stack React &amp; NestJS.
          </p>
          <p className="font-sans text-[17px] leading-[1.7] text-text-main max-w-[52ch] mx-auto">
            The goal wasn't collecting skills &mdash; it was learning every brittle layer
            <em className="font-serif-alt italic"> between</em> an idea and a working system.
            Now I bring that full stack to data work.
          </p>
        </div>

        {/* What I'm focused on */}
        <div className="mb-14">
          <div className="flex items-baseline justify-center gap-4 mb-5 pt-6 border-t border-border">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-text-subtle">What I'm focused on</span>
            <span className="font-mono text-[11px] text-text-subtle">&sect; 01.2</span>
          </div>
          <p className="font-sans text-[17px] leading-[1.7] text-text-main mb-6 max-w-[52ch] mx-auto">
            <strong className="font-medium">Machine-learning modeling</strong> &mdash;
            building from scratch before reaching for libraries.
            Hand-derived backprop, Q-learning, then frameworks.
          </p>
          <p className="font-sans text-[17px] leading-[1.7] text-text-main mb-6 max-w-[52ch] mx-auto">
            <strong className="font-medium">Causal inference</strong> &mdash;
            because &ldquo;X correlates with Y&rdquo; is where most analysis stops,
            and where the interesting question begins.
          </p>
          <p className="font-sans text-[17px] leading-[1.7] text-text-main max-w-[52ch] mx-auto">
            <strong className="font-medium">End-to-end ownership</strong> &mdash;
            pipeline to training to deployment to monitoring.
            A model is only as useful as the system it runs in.
          </p>
        </div>

        {/* Tech stack */}
        <div className="mt-20 pt-10 border-t border-border">
          <div className="flex items-baseline justify-center gap-4 mb-8">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">Tech Stack</span>
            <span className="font-mono text-[11px] text-text-subtle">&sect; 01.3</span>
          </div>
          <div className="space-y-5">
            {stackRows.map((row, i) => (
              <div key={row.label} className={`pb-5 ${i < stackRows.length - 1 ? 'border-b border-border' : ''}`}>
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
