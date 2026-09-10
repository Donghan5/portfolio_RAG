const capabilities = [
  ['01', 'Software engineering', 'C/C++, Python, TypeScript, APIs, networking, concurrency, and systems design.'],
  ['02', 'Machine learning', 'Signal processing, model training, evaluation, retrieval systems, and ML fundamentals.'],
  ['03', 'Forward deployment', 'Docker, Kubernetes, GitOps, cloud provisioning, observability, and pragmatic integration.'],
];

export default function About() {
  return (
    <section className="section-wrap about-section">
      <div className="about-intro"><p className="eyebrow">How I work</p><h2 className="section-title">Strong foundations make ambitious products practical.</h2></div>
      <div className="capability-list">{capabilities.map(([number, title, copy]) => <article key={number} className="capability"><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>
  );
}
