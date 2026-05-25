import { useState } from 'react';

interface Project {
  title: string;
  desc: string;
  tags: string;
  github: string;
  category: string;
}

interface CaseStudy {
  title: string;
  category: string;
  github: string;
  summary: string;
  points: string[];
  stack: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Portfolio RAG Chat',
    category: 'ML System · Retrieval · Deployment',
    github: 'https://github.com/Donghan5/portfolio_RAG',
    summary:
      'A live portfolio with an AI chat layer: React/Vite on Vercel, FastAPI in Docker on Render, FastEmbed embeddings, Supabase pgvector retrieval, and Groq generation.',
    points: [
      'Verified live on donghank.website and in the public repository.',
      'POST /api/chat embeds the question, retrieves top context chunks, and returns a generated answer.',
      'Backend uses a startup-loaded embedding model, async LLM calls, and CORS-scoped frontend origins.',
    ],
    stack: 'React · FastAPI · FastEmbed · pgvector · Docker · Vercel · Render',
  },
  {
    title: 'Multilayer Perceptron',
    category: 'Model Fundamentals · NumPy · Backpropagation',
    github: 'https://github.com/Donghan5/multilayer_perceptron',
    summary:
      'A from-scratch MLP for the Wisconsin Breast Cancer dataset, built to show model internals and training mechanics without TensorFlow or PyTorch.',
    points: [
      'Implements fully connected layers, forward propagation, backward propagation, softmax, and cross-entropy.',
      'Includes mini-batch training, train-only standardization, early stopping, SGD, and Adam.',
      'Maintains tests for activation derivatives, gradient correctness, optimizer behavior, IO, and training flow.',
    ],
    stack: 'Python · NumPy · pandas · pytest',
  },
  {
    title: 'Total Perspective Vortex',
    category: 'Applied ML · EEG Signal Classification',
    github: 'https://github.com/Donghan5/total-perspective-vortex',
    summary:
      'An EEG motor-imagery pipeline centered on PhysioNet EDF data preparation and feature construction for downstream classification work.',
    points: [
      'Processes EEG data from PhysioNet, parses and filters EDF signals, and standardizes channels and montage.',
      'Renames annotations for hands / feet classes, applies average reference projection, and filters the 7-30 Hz band.',
      'Extracts epochs, crops learning segments, and constructs X feature matrix and y label array.',
      'Targets dimensionality reduction, scikit-learn pipeline usage, and real-time stream classification.',
    ],
    stack: 'Python · MNE · scikit-learn · EDF · PhysioNet',
  },
];

const projects: Project[] = [
  { title: 'ft_linear_regression', desc: 'Linear regression with gradient descent, from scratch.', tags: 'Python · NumPy', github: 'https://github.com/Donghan5/ft_linear_regression', category: 'Data' },
  { title: 'Understanding of ML', desc: 'Working through ML concepts toward end-to-end model implementations.', tags: 'Python · C++ · ML', github: 'https://github.com/Donghan5/Understanding_of_ML', category: 'Data' },
  { title: 'learning_kafka', desc: 'Hands-on Kafka topics, consumers, and data-pipeline fundamentals.', tags: 'Kafka · Python', github: 'https://github.com/Donghan5/learning_kafka', category: 'Data Infra' },
  { title: 'cloud-1', desc: 'Scaleway infra with Ansible provisioning and an Nginx reverse proxy, IaC throughout.', tags: 'Ansible · Nginx · DevOps', github: 'https://github.com/Donghan5/cloud-1', category: 'Infra' },
  { title: 'chatapp', desc: 'Full-stack chat with real-time messaging, deployed on Kubernetes with CI/CD.', tags: 'React · Node · K8s', github: 'https://github.com/Donghan5/chatapp', category: 'Web Infra' },
  { title: 'E-commerce API', desc: 'REST API with auth, products, orders, payments. Go + NestJS, PostgreSQL, Docker.', tags: 'Go · NestJS · PG', github: 'https://github.com/Donghan5/ecommerce_api', category: 'Web' },
  { title: 'weather_api', desc: 'Two-server weather service, Go + NestJS, Redis for caching.', tags: 'Go · NestJS · Redis', github: 'https://github.com/Donghan5/weather_api', category: 'Web' },
  { title: 'ft_transcendence', desc: 'Real-time multiplayer Pong, chat, and profiles. Full stack.', tags: 'TypeScript · Web', github: 'https://github.com/Donghan5/ft_transcendence', category: 'Web' },
  { title: 'Weather app', desc: 'React + TS frontend for OpenWeatherMap, 5-day forecast and search.', tags: 'React · TS · Tailwind', github: 'https://github.com/Donghan5/weather_app', category: 'Web' },
  { title: 'Inception', desc: 'Multi-container stack with docker-compose: Nginx, WordPress, MariaDB.', tags: 'Docker · Nginx', github: 'https://github.com/Donghan5/inception', category: 'Infra' },
  { title: 'webserv', desc: 'HTTP server in C++ handling GET and POST, socket-level.', tags: 'C++ · HTTP', github: 'https://github.com/Donghan5/webserv', category: 'Low Infra' },
  { title: 'miniRT', desc: 'Ray tracer in C, geometry and lighting from first principles.', tags: 'C · Graphics', github: 'https://github.com/Donghan5/miniRT', category: 'Low' },
  { title: 'minishell', desc: 'UNIX shell with parsing, execution, and process management.', tags: 'C · Systems', github: 'https://github.com/Donghan5/minishell', category: 'Low' },
  { title: 'Philosophers', desc: 'Dining philosophers in C with threads and mutexes.', tags: 'C · Threads', github: 'https://github.com/Donghan5/philosopher', category: 'Low' },
  { title: 'CPP Modules', desc: '00-09: a full lap through C++ object orientation.', tags: 'C++ · OOP', github: 'https://github.com/Donghan5/CPP_Modules', category: 'Low' },
  { title: 'push_swap', desc: 'Minimum-operation stack-sort puzzle in C.', tags: 'C · Algorithms', github: 'https://github.com/Donghan5/push_swap', category: 'Low' },
  { title: 'libasm', desc: 'Assembly library for Unix syscalls and low-level interfacing.', tags: 'Assembly', github: 'https://github.com/Donghan5/libasm', category: 'Low' },
  { title: 'ft_printf', desc: 'Custom printf with variable args and format specifiers.', tags: 'C · Library', github: 'https://github.com/Donghan5/ft_printf', category: 'Low' },
  { title: 'get_next_line', desc: 'Read-a-line function with dynamic buffering across file descriptors.', tags: 'C · I/O', github: 'https://github.com/Donghan5/get_next_line', category: 'Low' },
  { title: 'Libft', desc: 'Custom C standard-library replacement for 42 fundamentals.', tags: 'C · Library', github: 'https://github.com/Donghan5/Libft', category: 'Low' },
];

const filters = [
  { label: 'All', tag: 'all' },
  { label: 'Data & ML', tag: 'Data' },
  { label: 'Infra & DevOps', tag: 'Infra' },
  { label: 'Full-stack', tag: 'Web' },
  { label: 'Low-level', tag: 'Low' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <div className="relative z-10">
      <div className="max-w-[1040px] mx-auto px-6 sm:px-8 py-20 md:py-28">

        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2.5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">Selected case studies</span>
          <span className="font-mono text-[11px] tracking-[0.14em] text-text-subtle">&sect; 03 &middot; {caseStudies.length} primary</span>
        </div>
        <div className="rule-accent mb-1.5" />
        <div className="rule mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] gap-8 md:gap-14 mb-12">
          <h2 className="font-display font-light text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] text-text-main">
            Evidence for applied ML systems, from <em className="font-normal italic text-primary">data</em> to deployment.
          </h2>
          <p className="font-serif-alt font-light text-[20px] leading-[1.55] text-text-main">
            The strongest signal here is machine-learning engineering: model fundamentals,
            data preprocessing, retrieval workflows, and production-oriented systems.
          </p>
        </div>

        <div className="case-study-grid mb-16">
          {caseStudies.map((project, i) => (
            <article key={project.title} className="case-study-card">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-primary">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-mono text-[11px] text-text-subtle">{project.category}</span>
              </div>
              <h3 className="font-serif font-normal text-[26px] md:text-[30px] leading-[1.12] text-text-main mb-4">
                {project.title}
              </h3>
              <p className="font-sans text-[16px] leading-[1.7] text-text-main mb-5">
                {project.summary}
              </p>
              <ul className="case-study-list mb-6">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-border">
                <span className="font-mono text-[11px] leading-[1.6] text-text-subtle">{project.stack}</span>
                <a href={project.github} target="_blank" rel="noreferrer" className="font-mono text-[12px] text-text-main underline decoration-border-bright underline-offset-3 hover:text-primary hover:decoration-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-bg">
                  Repository &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex gap-5 flex-wrap items-center mb-6 pb-5 border-b border-border">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle mr-2">Archive</span>
          {filters.map((f) => (
            <button
              key={f.tag}
              onClick={() => setActiveFilter(f.tag)}
              className={`font-mono text-[12px] tracking-[0.04em] bg-transparent border-0 p-0 pb-0.5 cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-bg ${
                activeFilter === f.tag ? 'text-text-main border-b border-primary' : 'text-text-muted hover:text-text-main border-b border-transparent'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filtered.map((p, i) => (
            <a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="block p-6 no-underline text-text-main group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
            >
              <span className="block font-mono text-[11px] text-text-subtle mb-2">{String(i + 1).padStart(2, '0')}</span>
              <span className="block font-serif font-normal text-[20px] leading-[1.2] group-hover:text-primary transition-colors duration-200 mb-1.5">
                {p.title}
              </span>
              <span className="block font-sans text-[14px] text-text-muted leading-[1.6] mb-2">{p.desc}</span>
              <span className="block font-mono text-[11px] text-text-subtle tracking-[0.02em]">{p.tags}</span>
            </a>
          ))}
        </div>

        <p className="mt-12 font-serif-alt italic text-[14px] text-text-muted max-w-[50ch]">
          A fuller list lives on <a href="https://github.com/Donghan5" target="_blank" rel="noreferrer" className="text-text-main decoration-border-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-bg">github.com/Donghan5</a>.
        </p>
      </div>
    </div>
  );
}
