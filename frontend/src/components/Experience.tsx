const experiences = [
  {
    period: '2024 \u2014 Present',
    type: 'Education',
    title: '42 Paris',
    role: 'CS Student',
    roleDetail: 'RNCP Lv.7, AI & Data branch',
    paragraphs: [
      "Pursuing the Master's-equivalent track at 42 Paris. Project-based from day one: I wrote low-level C for memory allocators and string libraries, administered Linux systems from scratch in Born2beRoot, and deployed multi-container production setups with Docker and Nginx in Inception.",
      'Halfway through, I pivoted to the AI & Data specialization. Linear regression from scratch, MLPs in NumPy, then up the stack into Kafka pipelines and pgvector. The progression was deliberate: build it, then read about it.',
    ],
  },
  {
    period: '2020 \u2014 2022',
    type: 'Service',
    title: 'Republic of Korea Army',
    role: 'Sergeant',
    roleDetail: 'mandatory service',
    paragraphs: [
      'Led and trained a team of soldiers as a sergeant. Responsible for equipment readiness, personnel safety, and the boring-on-paper work that, when it fails, is the only thing anyone remembers. Participated in demining operations.',
      "Not a coding job \u2014 but it's where I learned that a plan survives first contact only if the person writing it also has to execute it. I carry that into every system I ship now.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="relative z-10">
      <div className="max-w-[720px] mx-auto px-8 py-[6.6rem]">

        <div className="flex items-baseline justify-between mb-2.5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">Experience</span>
          <span className="font-mono text-[11px] tracking-[0.14em] text-text-subtle">&sect; 02</span>
        </div>
        <div className="rule-accent mx-auto mb-1.5" />
        <div className="rule mb-14" />

        <h2 className="font-display font-light text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.025em] text-text-main mb-6 text-center">
          Two chapters, both about <em className="font-normal italic text-primary">ownership.</em>
        </h2>
        <p className="font-serif-alt font-light text-[20px] leading-[1.55] text-text-main max-w-[52ch] mx-auto mb-18 text-center">
          The short version: I ran a team before I ran a build pipeline, and both taught me the
          same lesson &mdash; <em className="italic">responsibility scales with how close you stay to the thing.</em>
        </p>

        {experiences.map((exp) => (
          <div key={exp.title} className="grid grid-cols-[140px_1fr] gap-6 py-10 border-t border-border last:border-b max-md:grid-cols-1 max-md:gap-2.5">
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-subtle pt-2 leading-[1.7]">
              {exp.period}
              <span className="block text-primary mt-1 tracking-[0.18em]">{exp.type}</span>
            </div>
            <div>
              <h3 className="font-serif font-normal text-[26px] leading-[1.2] tracking-[-0.02em] text-text-main mb-1">{exp.title}</h3>
              <p className="font-sans text-[14px] text-text-muted mb-4">
                <span className="text-primary font-medium">{exp.role}</span> &middot; {exp.roleDetail}
              </p>
              {exp.paragraphs.map((p, i) => (
                <p key={i} className="font-sans text-[16px] leading-[1.7] text-text-main mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
