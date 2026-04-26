const stackRows = [
  { label: 'Languages', values: 'Python \u00b7 TypeScript \u00b7 C / C++ \u00b7 Go \u00b7 Bash' },
  { label: 'ML & Data', values: 'NumPy \u00b7 PyTorch \u00b7 scikit-learn \u00b7 pandas \u00b7 FastEmbed \u00b7 pgvector' },
  { label: 'Tools & Infra', values: 'Docker \u00b7 Kubernetes \u00b7 Linux \u00b7 Git \u00b7 Kafka \u00b7 Redis \u00b7 Supabase' },
  { label: 'Web', values: 'React \u00b7 NestJS \u00b7 FastAPI \u00b7 Node.js \u00b7 TailwindCSS \u00b7 Socket.io' },
];

export default function About() {
  return (
    <div className="relative z-10">
      <div className="max-w-[720px] mx-auto px-8 py-[6.6rem]">

        {/* Section header */}
        <div className="flex items-baseline justify-between mb-2.5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">About</span>
          <span className="font-mono text-[11px] tracking-[0.14em] text-text-subtle">&sect; 01</span>
        </div>
        <div className="rule-accent mx-auto mb-1.5" />
        <div className="rule mb-12" />

        {/* Display heading */}
        <h2 className="font-display font-light text-[clamp(2.2rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.025em] text-text-main mb-6 text-center">
          An engineer who learned to think in <em className="font-normal italic text-primary">hypotheses.</em>
        </h2>

        <p className="font-serif-alt font-light text-[22px] leading-[1.55] text-text-main max-w-[56ch] mx-auto mb-14 text-center">
          I got pulled into data science because forming a hypothesis and watching numbers prove
          it right or wrong turned out to be the most honest kind of thinking I've found in tech.
        </p>

        {/* Portrait float + prose */}
        <div className="prose">
          <figure className="float-right w-[200px] m-0 ml-10 mb-6 max-md:float-none max-md:w-[160px] max-md:ml-0 max-md:mb-8">
            <img src="/profile_image.JPG" alt="Donghan Kim" className="block w-full aspect-square object-cover border border-border grayscale hover:grayscale-0 transition-[filter] duration-700" />
            <figcaption className="flex justify-between font-mono text-[10px] tracking-[0.14em] uppercase text-text-subtle mt-2.5">
              <span>Donghan Kim</span>
              <span>Paris &middot; 2026</span>
            </figcaption>
          </figure>

          {/* The path */}
          <div className="mb-14">
            <div className="flex items-baseline justify-between mb-5 pt-6 border-t border-border">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-text-subtle">The path</span>
              <span className="font-mono text-[11px] text-text-subtle">&sect; 01.1</span>
            </div>
            <p className="font-sans text-[17px] leading-[1.7] text-text-main mb-6">
              I'm in the final stretch of <strong className="font-medium">42 Paris</strong> &mdash; RNCP Level 7, AI &amp; Data branch. The first two years were intentionally wide. I wrote a memory allocator in C, built a black-hole renderer with SDL2 and Schwarzschild geodesics, deployed Kubernetes clusters on Scaleway, and shipped full-stack apps in React and NestJS.
            </p>
            <p className="font-sans text-[17px] leading-[1.7] text-text-main">
              The point wasn't collecting skills. It was learning what happens <em className="font-serif-alt italic">between</em> an idea and a working system &mdash; every brittle layer in between. Now I'm bringing that whole stack to data work.
            </p>
          </div>

          {/* What I'm focused on */}
          <div className="mb-14">
            <div className="flex items-baseline justify-between mb-5 pt-6 border-t border-border">
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-text-subtle">What I'm focused on</span>
              <span className="font-mono text-[11px] text-text-subtle">&sect; 01.2</span>
            </div>
            <p className="font-sans text-[17px] leading-[1.7] text-text-main mb-6">
              <strong className="font-medium">Machine-learning modeling</strong> &mdash; implementing from scratch before reaching for libraries. NumPy MLPs with backprop derived by hand, tabular Q-learning agents built before I'd touched a deep RL framework. The library is easier once you've paid the tuition.
            </p>
            <p className="font-sans text-[17px] leading-[1.7] text-text-main mb-6">
              <strong className="font-medium">Causal inference</strong> &mdash; because &ldquo;X correlates with Y&rdquo; is where most analysis stops, and where the interesting question begins.
            </p>
            <p className="font-sans text-[17px] leading-[1.7] text-text-main">
              <strong className="font-medium">End-to-end ownership</strong> &mdash; I'm comfortable the whole way from pipeline to training to deployment to monitoring. A model is only as useful as the system it runs in.
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-20 pt-10 border-t border-border">
          <div className="flex items-baseline justify-between mb-8">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">Tech Stack</span>
            <span className="font-mono text-[11px] text-text-subtle">&sect; 01.3</span>
          </div>
          <div className="grid grid-cols-[160px_1fr] gap-x-10 gap-y-5 items-start max-sm:grid-cols-1 max-sm:gap-y-1.5">
            {stackRows.map((row, i) => (
              <div key={row.label} className="contents">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle pt-1 max-sm:pt-4 max-sm:border-t max-sm:border-border first:max-sm:border-t-0 first:max-sm:pt-1">
                  {row.label}
                </span>
                <span className={`font-sans text-[15px] leading-[1.7] text-text-main pb-5 ${i < stackRows.length - 1 ? 'border-b border-border' : ''}`}>
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
