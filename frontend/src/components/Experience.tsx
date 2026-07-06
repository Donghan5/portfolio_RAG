const milestones = [
  { period: '2024 — Present', title: 'Backend systems and data workflows', detail: 'Building services, APIs, retrieval workflows, and production-oriented infrastructure.' },
  { period: '2023 — 2024', title: 'Data engineering projects', detail: 'Working with ETL pipelines, databases, event streaming, and analytics workflows.' },
  { period: '2021 — 2023', title: '42 Paris · Software systems', detail: 'Strengthened fundamentals through C, C++, networking, concurrency, algorithms, and infrastructure projects.' },
];

export default function Experience() {
  return (
    <section className="section-wrap pt-8">
      <div className="text-center mb-9"><p className="eyebrow">Journey</p><h2 className="section-title">Experience through building</h2></div>
      <div className="timeline max-w-[900px] mx-auto">
        {milestones.map((item) => (
          <div className="timeline-row" key={item.period}>
            <time>{item.period}</time><span className="timeline-dot" />
            <div><h3>{item.title}</h3><p>{item.detail}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
