interface Project { title: string; description: string; tags: string[]; github: string; icon: string; }

const projects: Project[] = [
  { title: 'webserv', description: 'HTTP/1.1 server in C++ with non-blocking I/O, CGI, routing, and configuration parsing.', tags: ['C++', 'HTTP', 'Epoll', 'CGI'], github: 'https://github.com/Donghan5/webserv', icon: 'fa-server' },
  { title: 'ft_transcendence', description: 'Real-time multiplayer platform with authentication, matchmaking, chat, and persistent game state.', tags: ['TypeScript', 'WebSocket', 'SQLite', 'OAuth'], github: 'https://github.com/Donghan5/ft_transcendence', icon: 'fa-table-tennis-paddle-ball' },
  { title: 'chatapp', description: 'Real-time chat platform backed by PostgreSQL and Kafka, packaged for Kubernetes deployment.', tags: ['TypeScript', 'Kafka', 'PostgreSQL', 'K8s'], github: 'https://github.com/Donghan5/chatapp', icon: 'fa-comments' },
  { title: 'inception-of-things', description: 'Kubernetes and GitOps lab using Vagrant, K3s, Traefik Ingress, and Argo CD.', tags: ['K3s', 'Argo CD', 'Vagrant', 'GitOps'], github: 'https://github.com/Donghan5/inception-of-things', icon: 'fa-dharmachakra' },
  { title: 'ecommerce_api', description: 'Commerce-focused backend covering authentication, products, customers, orders, and REST design.', tags: ['API', 'Backend', 'REST', 'PostgreSQL'], github: 'https://github.com/Donghan5/ecommerce_api', icon: 'fa-cart-shopping' },
];

export default function Projects() {
  return (
    <section className="section-wrap pt-4">
      <div className="text-center mb-10">
        <p className="eyebrow">Featured projects</p>
        <h2 className="section-title">Selected GitHub Repositories</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <a className="project-card" key={project.title} href={project.github} target="_blank" rel="noreferrer">
            <div className="project-visual"><i className={`fas ${project.icon}`} /><span>{project.title}</span></div>
            <div className="project-body">
              <div className="flex items-start justify-between gap-4"><h3>{project.title}</h3><i className="fab fa-github text-lg" /></div>
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
