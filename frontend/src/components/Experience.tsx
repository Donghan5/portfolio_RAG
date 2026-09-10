const milestones = [
  { period: '2024 — present', title: '42 Paris · RNCP Level 7', detail: 'Project-based computer science education spanning systems, infrastructure, web applications, data, and AI.' },
  { period: '2020 — 2022', title: 'Republic of Korea Army · Sergeant', detail: 'Led training and field operations, maintained equipment, and worked under high-accountability safety procedures.' },
];

export default function Experience() {
  return (
    <section className="section-wrap experience-section">
      <div className="section-heading"><div><p className="eyebrow">Background</p><h2 className="section-title">Built through ownership.</h2></div><p className="section-copy">I value clear communication, reliable execution, and learning fast in complex environments.</p></div>
      <div className="timeline">
        {milestones.map((item) => (
          <div className="timeline-row" key={item.period}>
            <time>{item.period}</time><div><h3>{item.title}</h3><p>{item.detail}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
