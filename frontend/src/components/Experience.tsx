const milestones = [
  { period: '2024 ~ Present', title: '42 Paris', detail: 'Building strong foundations through C, C++, networking, concurrency, algorithms, backend systems, and infrastructure projects.' },
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
