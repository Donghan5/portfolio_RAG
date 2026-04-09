const experiences = [
  {
    title: '42 Paris',
    role: 'CS Student',
    duration: '2024 — Present',
    icon: 'fas fa-graduation-cap',
    description:
      "Pursuing RNCP Level 7 (Master's equivalent) in Computer Science. Developed foundational skills through project-based learning, including low-level programming in C/C++, system administration (Born2beRoot), and deploying containerized applications with Docker (Inception).",
  },
  {
    title: 'Republic of Korea Army',
    role: 'Sergeant',
    duration: '2020 — 2022',
    icon: 'fas fa-shield-halved',
    description:
      'Served as a Sergeant responsible for training and leading a team of soldiers. Maintained equipment and facilities, ensured safety and security of personnel. Participated in demining operations.',
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative z-10">
      <div className="w-full max-w-2xl">
        <h2 className="font-mono text-[11px] tracking-widest uppercase text-primary/50 mb-3 text-center">
          Experience
        </h2>
        <div className="divider-gradient mb-12" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-6 w-px bg-gradient-to-b from-primary/40 via-border-bright to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.title} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-[17px] top-7 w-[18px] h-[18px] rounded-full bg-bg-surface border-2 border-primary/50 shadow-[0_0_12px_rgba(167,139,250,0.25)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                </div>

                <div className="group bg-bg-card/40 border border-border rounded-2xl p-6 hover:border-primary/20 hover:bg-bg-card/55 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <i className={`${exp.icon} text-primary/50 text-sm`} />
                        <h3 className="text-text-main font-semibold text-[15px]">{exp.title}</h3>
                      </div>
                      <p className="text-primary/65 text-[12px] font-mono pl-6">{exp.role}</p>
                    </div>
                    <span className="sm:shrink-0 font-mono text-[11px] text-text-subtle tracking-wide bg-border/40 px-3 py-1 rounded-full border border-border self-start sm:self-center">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-text-muted text-[13px] leading-[1.85]">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
