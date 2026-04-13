const experiences = [
  {
    title: '42 Paris',
    role: 'CS Student',
    duration: '2024 — Present',
    type: 'Education',
    description:
      "Pursuing RNCP Level 7 (Master's equivalent) in Computer Science. Developed foundational skills through project-based learning, including low-level programming in C/C++, system administration (Born2beRoot), and deploying containerized applications with Docker (Inception).",
  },
  {
    title: 'Republic of Korea Army',
    role: 'Sergeant',
    duration: '2020 — 2022',
    type: 'Service',
    description:
      'Served as a Sergeant responsible for training and leading a team of soldiers. Maintained equipment and facilities, ensured safety and security of personnel. Participated in demining operations.',
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-12 relative z-10">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* Section header */}
        <div className="flex items-baseline justify-between mb-3">
          <h2
            className="font-display font-bold text-[11px] tracking-[0.25em] uppercase text-text-subtle"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Experience
          </h2>
          <span className="font-mono text-[10px] text-text-subtle/50 tracking-[0.12em]">§ 02</span>
        </div>
        <div className="rule-red mb-12" />

        {/* Entries */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div key={exp.title}>
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 py-10 group">

                {/* Index + type */}
                <div className="flex md:flex-col items-start gap-4 md:gap-2">
                  <span
                    className="font-display font-bold text-[3rem] leading-none text-border select-none transition-colors duration-300 group-hover:text-primary/20"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-subtle/60 mt-1 hidden md:block">
                    {exp.type}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="font-display font-bold text-[22px] tracking-tight text-text-main leading-tight"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {exp.title}
                      </h3>
                      <p className="font-mono text-[12px] text-primary mt-1">{exp.role}</p>
                    </div>
                    <span className="font-mono text-[11px] text-text-subtle tracking-[0.08em] shrink-0">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="font-mono text-[13px] text-text-muted leading-[1.9]">
                    {exp.description}
                  </p>
                </div>
              </div>
              {i < experiences.length - 1 && <div className="rule" />}
            </div>
          ))}
        </div>

        <div className="rule mt-0" />
      </div>
    </div>
  );
}
