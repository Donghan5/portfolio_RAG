import { useState } from 'react';

type Role = 'All' | 'Software Engineering' | 'Machine Learning' | 'Forward Deployment';
interface Project { title: string; roles: Role[]; label: string; description: string; evidence: string; tags: string[]; github: string; }
const projects: Project[] = [
  { title: 'Total Perspective Vortex', roles: ['Machine Learning'], label: 'Applied ML · EEG classification', description: 'An EEG motor-task classifier that turns raw EDF recordings into subject-specific predictions.', evidence: 'Built evaluation across 109 subjects, six experiments, and 1,962 held-out evaluations; the CSP pipeline reached 68.02% mean accuracy.', tags: ['Python', 'MNE', 'scikit-learn', 'Signal processing'], github: 'https://github.com/Donghan5/total-perspective-vortex' },
  { title: 'Portfolio RAG', roles: ['Machine Learning', 'Forward Deployment'], label: 'Retrieval system · Deployed product', description: 'A portfolio chatbot that combines semantic retrieval with a production-oriented web stack.', evidence: 'Designed a React, FastAPI, FastEmbed, Supabase pgvector, Groq, Docker, Render, and Vercel architecture with scoped CORS and health endpoints.', tags: ['FastAPI', 'RAG', 'pgvector', 'Docker'], github: 'https://github.com/Donghan5/portfolio_RAG' },
  { title: 'webserv', roles: ['Software Engineering'], label: 'Systems · HTTP server', description: 'A Nginx-inspired HTTP/1.1 server built from scratch in C++98.', evidence: 'Implemented an epoll event loop, non-blocking CGI pipes, protocol parsing, virtual hosts, and graceful shutdown handling.', tags: ['C++', 'epoll', 'HTTP/1.1', 'CGI'], github: 'https://github.com/Donghan5/webserv' },
  { title: 'Inception of Things', roles: ['Forward Deployment'], label: 'Infrastructure · GitOps', description: 'A local Kubernetes environment for deploying applications through repeatable, versioned infrastructure.', evidence: 'Provisioned K3s and k3d environments using Vagrant, then used Argo CD to practice an application delivery workflow.', tags: ['Kubernetes', 'Argo CD', 'K3s', 'Vagrant'], github: 'https://github.com/Donghan5/inception-of-things' },
  { title: 'Multilayer Perceptron', roles: ['Machine Learning', 'Software Engineering'], label: 'Model fundamentals · From scratch', description: 'A NumPy neural network for breast-tumor classification with a complete training and inference loop.', evidence: 'Implemented forward and backward propagation, train-only standardization, early stopping, Adam and SGD, and safe model serialization.', tags: ['Python', 'NumPy', 'Backpropagation', 'Optimization'], github: 'https://github.com/Donghan5/multilayer_perceptron' },
  { title: 'chatapp', roles: ['Software Engineering', 'Forward Deployment'], label: 'Distributed application · Delivery', description: 'A real-time chat platform built around messaging, persistence, and deployable services.', evidence: 'Combines TypeScript, PostgreSQL, Kafka, Kubernetes, and CI/CD concerns in a full-stack product.', tags: ['TypeScript', 'Kafka', 'PostgreSQL', 'Kubernetes'], github: 'https://github.com/Donghan5/chatapp' },
];
const roles: Role[] = ['All', 'Software Engineering', 'Machine Learning', 'Forward Deployment'];

export default function Projects() {
  const [activeRole, setActiveRole] = useState<Role>('All');
  const visibleProjects = activeRole === 'All' ? projects : projects.filter((project) => project.roles.includes(activeRole));
  return (
    <section className="section-wrap projects-section">
      <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2 className="section-title">Proof across the stack.</h2></div><p className="section-copy">Projects chosen for engineering depth, validation, and the ability to deliver working systems.</p></div>
      <div className="role-tabs" role="tablist" aria-label="Filter projects by role">{roles.map((role) => <button key={role} role="tab" aria-selected={activeRole === role} onClick={() => setActiveRole(role)} className={activeRole === role ? 'active' : ''}>{role}</button>)}</div>
      <div className="project-list">{visibleProjects.map((project, index) => <article className="project-row" key={project.title}><span className="project-number">0{index + 1}</span><div className="project-main"><p className="project-label">{project.label}</p><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-proof"><p>{project.evidence}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><i className="fab fa-github" aria-hidden="true" /></a></article>)}</div>
    </section>
  );
}
