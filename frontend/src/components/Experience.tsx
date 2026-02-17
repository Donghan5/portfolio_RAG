const experiences = [
  {
    title: '42 Paris',
    role: 'CS Student',
    duration: '2024 — Present',
    description:
      "Pursuing RNCP Level 7 (Master's equivalent) in Computer Science. Developed foundational skills through project-based learning, including low-level programming in C/C++, system administration (Born2beRoot), and deploying containerized applications with Docker (Inception).",
  },
  {
    title: 'Republic of Korea Army',
    role: 'Sergeant',
    duration: '2020 — 2022',
    description:
      'Served as a Sergeant responsible for training and leading a team of soldiers. Maintained equipment and facilities, ensured safety and security of personnel. Participated in demining operations.',
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4 relative z-10">
      <div className="w-full max-w-4xl max-h-[75vh] overflow-y-auto scrollbar-hide bg-bg-surface/60 backdrop-blur-xl border border-border-bright/40 rounded-2xl px-8 py-8 shadow-[0_0_60px_rgba(0,0,0,0.4)]">
        <h2 className="font-mono text-xs tracking-widest uppercase text-primary/60 mb-2 text-center">
          Experience
        </h2>
        <div className="h-px bg-border mb-8" />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="group bg-bg-card/40 border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-primary/20 hover:bg-bg-card/60"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-text-main font-semibold text-base">
                    {exp.title}
                    <span className="text-text-muted font-normal"> · {exp.role}</span>
                  </h3>
                </div>
                <span className="font-mono text-[12px] text-text-subtle tracking-wide">
                  {exp.duration}
                </span>
              </div>
              <p className="text-text-muted text-[14px] leading-[1.8] max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
