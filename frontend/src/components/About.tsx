const skills = [
  'C', 'C++', 'Python', 'Go', 'TypeScript', 'React', 'Bash',
  'Linux', 'Docker', 'Git', 'TailwindCSS', 'Machine Learning',
  'Deep Learning', 'Kafka', 'Redis', 'Nest.js', 'Node.js', 'Socket.io',
];

const vitals = [
  ['Location', 'Paris, France'],
  ['School', '42 Paris'],
  ['Level', 'RNCP Lv.7'],
  ['Branch', 'AI / Data'],
  ['Languages', 'KO / FR / EN'],
] as const;

const sections = [
  {
    label: 'The path',
    content:
      "I'm in the final stretch of 42 Paris (RNCP Level 7, AI/Data branch). The first two years were intentionally wide: I wrote a memory allocator in C, built a black hole renderer with SDL2 and Schwarzschild geodesics, deployed Kubernetes clusters on Scaleway, and shipped full-stack apps in React and NestJS.\n\nThe point wasn't collecting skills. It was learning what happens between an idea and a working system — every brittle layer in between. Now I'm bringing that whole stack to data work.",
  },
  {
    label: 'What I\'m focused on',
    content:
      '• Machine learning modeling — implementing from scratch (NumPy MLPs, Q-learning agents) before reaching for libraries\n• Causal inference — because "X correlates with Y" is where most analysis stops, and where the interesting question begins\n• End-to-end ownership — comfortable from data pipeline → training → deployment → monitoring',
  },
  {
    label: 'Currently building',
    content:
      'A personal project asking: why do some football clubs with century-long histories never win? Starting with EDA, evolving into causal inference and time-series — built around a question I genuinely care about.',
  },
  {
    label: 'Beyond code',
    content:
      'My interests have always been 문어발 (octopus-spread) — Nietzsche and Camus, special relativity, robotics, AI. I think the best data scientists are the ones who can frame a question well, not just the ones who can fit a model. Wide curiosity is part of the job.',
  },
  {
    label: 'Right now',
    content:
      "Looking for a Data Scientist internship for H2 2027, in Paris, Europe, or remote-friendly. If you're working on something where engineering rigor and curiosity both matter, I'd love to talk.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-12 relative z-10">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* Section header */}
        <div className="flex items-baseline justify-between mb-3">
          <h2
            className="font-display font-bold text-[11px] tracking-[0.25em] uppercase text-text-subtle"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            About
          </h2>
          <span className="font-mono text-[10px] text-text-subtle/50 tracking-[0.12em]">§ 01</span>
        </div>
        <div className="rule-red mb-12" />

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-start">

          {/* Left: image + vitals */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="/profile_image.JPG"
                alt="Donghan Kim"
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-border"
                style={{ maxWidth: '200px' }}
              />
              {/* Subtle red accent line on image */}
              <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-primary" />
            </div>

            <div className="space-y-3 border-t border-border pt-5">
              {vitals.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <span className="font-mono text-[11px] text-text-subtle tracking-[0.06em]">{k}</span>
                  <span className="font-mono text-[11px] text-text-muted text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio + sections */}
          <div>
            {/* Intro */}
            <p className="font-mono text-[13px] text-text-muted leading-[2] mb-10">
              I'm Donghan — an engineer who got pulled into data science because forming a
              hypothesis and watching numbers prove it right or wrong turned out to be the most
              honest kind of thinking I've found in tech.
            </p>

            {/* Subsections */}
            {sections.map((section) => (
              <div key={section.label} className="mb-8">
                <div className="rule mb-6" />
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-text-subtle/70 mb-4">
                  {section.label}
                </p>
                <p className="font-mono text-[13px] text-text-muted leading-[2] whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="rule mb-8" />

            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-text-subtle/70 mb-5">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="tag hover:text-primary hover:border-primary/40 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
