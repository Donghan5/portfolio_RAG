const channels = [
  { label: 'GitHub', value: 'github.com/Donghan5', href: 'https://github.com/Donghan5', meta: 'Code \u00b7 the real CV' },
  { label: 'LinkedIn', value: 'linkedin.com/in/donghan-kim01', href: 'https://www.linkedin.com/in/donghan-kim01', meta: 'Formal \u00b7 PDF CV on request' },
  { label: 'Location', value: 'Paris, France', href: null, meta: 'CET \u00b7 UTC+1' },
  { label: 'Languages', value: 'Korean \u00b7 French \u00b7 English', href: null, meta: 'Working fluency in all three' },
];

const criteria = [
  'Data Scientist internship, H2 2027. Paris, Europe, or remote.',
  "A team that ships models to production \u2014 not slide decks.",
  "A problem someone cares about. Small and hard beats big and vague.",
];

export default function Contact() {
  return (
    <div className="relative z-10">
      <div className="max-w-[880px] mx-auto px-8 py-20 md:py-28 pb-32">

        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-2.5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">Contact</span>
          <span className="font-mono text-[11px] tracking-[0.14em] text-text-subtle">&sect; 04</span>
        </div>
        <div className="rule-accent mb-1.5" />
        <div className="rule mb-14" />

        {/* Status */}
        <div className="flex mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-primary bg-primary/8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: 'pulse-dot 2.4s ease-out infinite' }} />
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary">
              Open to Data Scientist internships &middot; H2 2027
            </span>
          </div>
        </div>

        {/* Two-column: CTA left, channels right */}
        <div className="flex flex-col md:flex-row md:gap-16 items-start mb-20">
          <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
            <h2 className="font-display font-light text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.025em] text-text-main mb-6">
              If you're working on something where <em className="font-normal italic text-primary">engineering rigor</em> and <em className="font-normal italic text-primary">curiosity</em> both matter &mdash; let's talk.
            </h2>
            <p className="font-serif-alt font-light text-[20px] leading-[1.55] text-text-main max-w-[52ch] mb-10">
              Easiest path is email. I answer within a day, usually less.
            </p>
            <a href="mailto:donghank@student.42.fr" className="inline-block font-serif font-light text-[clamp(1.5rem,3.5vw,2.2rem)] leading-[1.15] tracking-[-0.02em] text-text-main underline decoration-border-bright decoration-1 underline-offset-6 hover:text-primary hover:decoration-primary transition-colors duration-200 break-words">
              donghank@student.42.fr
            </a>
            <p className="font-serif-alt italic text-[15px] text-text-muted mt-3">
              Copy to clipboard, or start drafting &mdash; I'll see it either way.
            </p>
          </div>

          {/* Channels — right column */}
          <div className="shrink-0 w-full md:w-[260px] border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-10">
            {channels.map((ch) => (
              <div key={ch.label} className="mb-6 last:mb-0">
                <span className="block font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle mb-1">{ch.label}</span>
                <span className="block font-sans text-[15px] text-text-main mb-0.5">
                  {ch.href ? (
                    <a href={ch.href} target="_blank" rel="noreferrer" className="text-text-main underline decoration-border-bright underline-offset-3 hover:text-primary hover:decoration-primary transition-colors duration-200">{ch.value}</a>
                  ) : ch.value}
                </span>
                <span className="block font-mono text-[10px] tracking-[0.04em] text-text-subtle">{ch.meta}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm looking for */}
        <div className="pt-10 border-t border-border mb-20">
          <div className="mb-7">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">What I'm looking for</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {criteria.map((item, i) => (
              <div key={i}>
                <span className="block font-mono text-[10px] tracking-[0.12em] text-primary mb-1">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-sans text-[16px] leading-[1.65] text-text-main">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div className="pt-12 border-t border-border text-center">
          <blockquote className="font-serif font-light italic text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] tracking-[-0.015em] text-text-main mb-4 max-w-[26ch] mx-auto">
            &ldquo;I form hypotheses and use numbers to prove them <span className="text-primary">right or wrong.</span>&rdquo;
          </blockquote>
          <span className="block font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">&mdash; The working thesis &middot; 2026</span>
        </div>
      </div>
    </div>
  );
}
