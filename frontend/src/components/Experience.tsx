const experiences = [
  {
    period: '2024 \u2014 Present',
    type: 'Education',
    title: '42 Paris',
    role: 'CS Student',
    roleDetail: 'RNCP Lv.7, AI & Data branch',
    paragraphs: [
      "Master\u2019s-equivalent track at 42 Paris. Project-based from day one: low-level C, Linux admin, multi-container Docker setups with Nginx.",
      'Pivoted to AI & Data halfway through. Linear regression from scratch, MLPs in NumPy, then Kafka pipelines and pgvector. Build it first, read about it second.',
    ],
  },
  {
    period: '2020 \u2014 2022',
    type: 'Service',
    title: 'Republic of Korea Army',
    role: 'Sergeant',
    roleDetail: 'mandatory service',
    paragraphs: [
      'Led and trained a team as a sergeant. Equipment readiness, personnel safety, and demining operations.',
      "Not a coding job \u2014 but where I learned that a plan only survives if the writer also executes it. I carry that into every system I ship.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="relative z-10">
      <div className="max-w-[880px] mx-auto px-8 py-20 md:py-28">

        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-2.5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">Experience</span>
          <span className="font-mono text-[11px] tracking-[0.14em] text-text-subtle">&sect; 02</span>
        </div>
        <div className="rule-accent mb-1.5" />
        <div className="rule mb-14" />

        <h2 className="font-display font-light text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.025em] text-text-main mb-6">
          Two chapters, both about <em className="font-normal italic text-primary">ownership.</em>
        </h2>
        <p className="font-serif-alt font-light text-[20px] leading-[1.55] text-text-main max-w-[52ch] mb-16">
          The short version: I ran a team before I ran a build pipeline,
          and both taught me the same lesson &mdash;
          <em className="italic">responsibility scales with proximity.</em>
        </p>

        {/* Timeline entries */}
        {experiences.map((exp) => (
          <div key={exp.title} className="flex flex-col md:flex-row gap-4 md:gap-16 py-10 border-t border-border last:border-b">
            {/* Left: period & type */}
            <div className="shrink-0 md:w-[160px] md:text-right">
              <span className="block font-mono text-[11px] tracking-[0.14em] uppercase text-text-subtle">
                {exp.period}
              </span>
              <span className="block font-mono text-[11px] tracking-[0.18em] uppercase text-primary mt-1">
                {exp.type}
              </span>
            </div>
            {/* Right: content */}
            <div className="flex-1">
              <h3 className="font-serif font-normal text-[26px] leading-[1.2] tracking-[-0.02em] text-text-main mb-1">
                {exp.title}
              </h3>
              <p className="font-sans text-[14px] text-text-muted mb-6">
                <span className="text-primary font-medium">{exp.role}</span> &middot; {exp.roleDetail}
              </p>
              {exp.paragraphs.map((p, i) => (
                <p key={i} className="font-sans text-[16px] leading-[1.7] text-text-main mb-4 last:mb-0 max-w-[50ch]">
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
