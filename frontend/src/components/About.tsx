const skills = [
  'C', 'C++', 'Python', 'Go', 'TypeScript', 'React', 'Bash',
  'Linux', 'Docker', 'Git', 'TailwindCSS', 'Machine Learning',
  'Deep Learning', 'Kafka', 'Redis', 'Nest.js', 'Node.js', 'Socket.io',
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
            <img
              src="/profile_image.JPG"
              alt="Donghan Kim"
              className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-border"
              style={{ maxWidth: '200px' }}
            />
            <div className="space-y-3 border-t border-border pt-5">
              {[
                ['Location', 'Paris, France'],
                ['School', '42 Paris'],
                ['Level', 'RNCP Lv.7'],
                ['Languages', 'KO / FR / EN'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <span className="font-mono text-[11px] text-text-subtle/70 tracking-[0.08em]">{k}</span>
                  <span className="font-mono text-[11px] text-text-muted text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio + skills */}
          <div>
            <p className="font-mono text-[13px] text-text-muted leading-[2] mb-10">
              I am a CS student at 42 Paris, pursuing a Master's degree (RNCP Level 7) in
              Computer Science. Passionate about all things AI/ML, I enjoy solving complex
              problems, learning new technologies, and building robust, scalable systems that
              bridge the gap between development and operations.
            </p>

            <div className="rule mb-8" />

            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-text-subtle/70 mb-5">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="tag hover:text-primary hover:border-primary/50 transition-colors duration-200 cursor-default"
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
