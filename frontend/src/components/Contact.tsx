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
      <div className="max-w-[720px] mx-auto px-8 pt-24 md:pt-28 pb-32 md:pb-40 text-center">

        <div className="flex items-baseline justify-center gap-4 mb-2.5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">Contact</span>
          <span className="font-mono text-[11px] tracking-[0.14em] text-text-subtle">&sect; 04</span>
        </div>
        <div className="rule-accent mb-1.5" />
        <div className="rule mb-14" />

        {/* Status */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-primary bg-primary/8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: 'pulse-dot 2.4s ease-out infinite' }} />
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary">
              Open to Data Scientist internships &middot; H2 2027
            </span>
          </div>
        </div>

        <h2 className="font-display font-light text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.05] tracking-[-0.025em] text-text-main mb-6">
          If you're working on something where <em className="font-normal italic text-primary">engineering rigor</em> and <em className="font-normal italic text-primary">curiosity</em> both matter &mdash; let's talk.
        </h2>
        <p className="font-serif-alt font-light text-[20px] leading-[1.55] text-text-main max-w-[50ch] mx-auto mb-14">
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
            <div key={ch.label} className={`py-5 ${i > 0 ? 'border-t border-border' : ''}`}>
              <span className="block font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle mb-1">{ch.label}</span>
              <span className="block font-sans text-[16px] text-text-main mb-1">
                {ch.href ? (
                  <a href={ch.href} target="_blank" rel="noreferrer" className="text-text-main underline decoration-border-bright underline-offset-3 hover:text-primary hover:decoration-primary transition-colors duration-200">{ch.value}</a>
                ) : ch.value}
              </span>
              <span className="block font-mono text-[11px] tracking-[0.04em] text-text-subtle">{ch.meta}</span>
            </div>
          ))}
        </div>

        {/* What I'm looking for */}
        <div className="mt-24 pt-10 border-t border-border">
          <div className="mb-7">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">What I'm looking for</span>
          </div>
          <div className="grid gap-6 max-w-[44ch] mx-auto">
            {criteria.map((item, i) => (
              <div key={i}>
                <span className="block font-mono text-[10px] tracking-[0.12em] text-primary mb-1">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-sans text-[16px] leading-[1.65] text-text-main">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div className="mt-30 pt-12 border-t border-border">
          <blockquote className="font-serif font-light italic text-[clamp(1.5rem,3vw,2rem)] leading-[1.3] tracking-[-0.015em] text-text-main mb-4 max-w-[26ch] mx-auto">
            &ldquo;I form hypotheses and use numbers to prove them <span className="text-primary">right or wrong.</span>&rdquo;
          </blockquote>
          <span className="block font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">&mdash; The working thesis &middot; 2026</span>
        </div>
      </div>
    </div>
  );
}
