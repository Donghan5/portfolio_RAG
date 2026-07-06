const stack = [
  { icon: 'fa-code', title: 'Languages', items: ['Python', 'TypeScript', 'SQL', 'C / C++', 'Go'] },
  { icon: 'fa-layer-group', title: 'Backend', items: ['FastAPI', 'NestJS', 'REST APIs', 'WebSocket', 'OAuth / JWT'] },
  { icon: 'fa-shuffle', title: 'Data', items: ['pandas', 'SQLAlchemy', 'ETL', 'Kafka', 'Airflow'] },
  { icon: 'fa-database', title: 'Databases', items: ['PostgreSQL', 'SQLite', 'Redis', 'pgvector', 'Supabase'] },
  { icon: 'fa-cloud', title: 'DevOps & Tools', items: ['Docker', 'Kubernetes', 'Linux', 'Nginx', 'GitHub'] },
];

export default function About() {
  return (
    <section className="section-wrap">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-center">
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="section-title">Systems thinker. Practical builder.</h2>
          <p className="section-copy mt-4">I build reliable services and data workflows that power real products. From APIs and databases to infrastructure and pipelines, I care about performance, clarity, and long-term maintainability.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            ['fa-code', '5', 'Featured repos'],
            ['fa-layer-group', 'Backend / Infra', 'Focus'],
            ['fa-location-dot', '42 Paris', 'Current base'],
          ].map(([icon, value, label]) => (
            <div key={label} className="stat-card">
              <i className={`fas ${icon} text-primary text-xl`} />
              <strong>{value}</strong><span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="stack-card mt-16">
        <p className="eyebrow text-center mb-7">Stack</p>
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
          {stack.map((group) => (
            <div className="stack-group" key={group.title}>
              <h3><i className={`fas ${group.icon}`} />{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
