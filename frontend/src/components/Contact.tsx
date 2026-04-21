const channels = [
  { label: 'GitHub', value: 'github.com/Donghan5', href: 'https://github.com/Donghan5', meta: 'Code \u00b7 the real CV' },
  { label: 'LinkedIn', value: 'linkedin.com/in/donghan-kim01', href: 'https://www.linkedin.com/in/donghan-kim01', meta: 'Formal \u00b7 PDF CV on request' },
  { label: 'Location', value: 'Paris, France', href: null, meta: 'CET \u00b7 UTC+1' },
  { label: 'Languages', value: 'Korean \u00b7 French \u00b7 English', href: null, meta: 'Working fluency in all three' },
];

const criteria = [
  'A Data Scientist internship for H2 2027 (roughly July\u2013December). Paris, elsewhere in Europe, or remote-friendly \u2014 all fine.',
  "A team where I'll actually ship \u2014 models in production, not slide decks. I want to learn the parts of the job that don't fit in a notebook.",
  "A problem someone cares about. I'd rather work on a small hard question than a big vague one.",
];

export default function Contact() {
  return (
    <div className="relative z-10">
      <div className="max-w-[720px] mx-auto px-8 py-24 pb-40">

        <div className="flex items-baseline justify-between mb-2.5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">Contact</span>
          <span className="font-mono text-[11px] tracking-[0.14em] text-text-subtle">&sect; 04</span>
        </div>
        <div className="rule-accent mb-1.5" />
        <div className="rule mb-14" />

        {/* Status */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-primary bg-primary/8 mb-16">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: 'pulse-dot 2.4s ease-out infinite' }} />
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary">
            Open to Data Scientist internships &middot; H2 2027
          </span>
        </div>

        <h2 className="font-display font-light text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.025em] text-text-main mb-6">
          If you're working on something where <em className="font-normal italic text-primary">engineering rigor</em> and <em className="font-normal italic text-primary">curiosity</em> both matter &mdash; let's talk.
        </h2>
        <p className="font-serif-alt font-light text-[20px] leading-[1.55] text-text-main max-w-[52ch] mb-14">
          Easiest path is email. I answer within a day, usually less.
        </p>

        <a href="mailto:donghank@student.42.fr" className="block font-serif font-light text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-text-main underline decoration-border-bright decoration-1 underline-offset-6 hover:text-primary hover:decoration-primary transition-colors duration-200 mb-3.5 break-words">
          donghank@student.42.fr
        </a>
        <p className="font-serif-alt italic text-[15px] text-text-muted mb-18">
          Copy to clipboard, or start drafting &mdash; I'll see it either way.
        </p>

        {/* Channels */}
        <div className="border-t border-border">
          {channels.map((ch, i) => (
            <div key={ch.label} className={`grid grid-cols-[160px_1fr_auto] gap-x-10 items-baseline max-md:grid-cols-1 max-md:gap-1 ${i > 0 ? 'border-t border-border' : ''}`}>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle py-5 max-md:pt-5 max-md:pb-1">{ch.label}</span>
              <span className="font-sans text-[16px] text-text-main py-5 max-md:py-1">
                {ch.href ? (
                  <a href={ch.href} target="_blank" rel="noreferrer" className="text-text-main underline decoration-border-bright underline-offset-3 hover:text-primary hover:decoration-primary transition-colors duration-200">{ch.value}</a>
                ) : ch.value}
              </span>
              <span className="font-mono text-[11px] tracking-[0.04em] text-text-subtle text-right whitespace-nowrap py-5 max-md:text-left max-md:pb-4">{ch.meta}</span>
            </div>
          ))}
        </div>

        {/* What I'm looking for */}
        <div className="mt-24 pt-10 border-t border-border">
          <div className="flex items-baseline justify-between mb-7">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">What I'm looking for</span>
            <span className="font-mono text-[11px] text-text-subtle">&sect; 04.1</span>
          </div>
          <ul className="list-none p-0 m-0 grid gap-4">
            {criteria.map((item, i) => (
              <li key={i} className="grid grid-cols-[24px_1fr] gap-3.5 font-sans text-[16px] leading-[1.65] text-text-main">
                <span className="font-mono text-[10px] tracking-[0.12em] text-primary pt-1">{String(i + 1).padStart(2, '0')}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pull quote */}
        <div className="mt-30 pt-12 border-t border-border">
          <blockquote className="font-serif font-light italic text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] tracking-[-0.015em] text-text-main mb-4 max-w-[26ch]">
            &ldquo;I form hypotheses and use numbers to prove them <span className="text-primary">right or wrong.</span>&rdquo;
          </blockquote>
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">&mdash; The working thesis &middot; 2026</span>
        </div>
      </div>
    </div>
  );
}
