interface Project {
  title: string;
  desc: string;
  tags: string;
  github: string;
  category: string;
}

const projects: Project[] = [
  { title: 'multilayer-perceptron', desc: 'MLP from scratch in NumPy. Backprop derived by hand before touching PyTorch.', tags: 'Python \u00b7 NumPy', github: 'https://github.com/Donghan5/multilayer_perceptron', category: 'Data' },
  { title: 'ft_linear_regression', desc: 'Linear regression with gradient descent, from scratch.', tags: 'Python \u00b7 NumPy', github: 'https://github.com/Donghan5/ft_linear_regression', category: 'Data' },
  { title: 'Understanding of ML', desc: 'Working through the canon, goal state is implementing Transformers end to end.', tags: 'Python \u00b7 C++ \u00b7 ML', github: 'https://github.com/Donghan5/Understanding_of_ML', category: 'Data' },
  { title: 'learning_kafka', desc: 'Hands-on with Kafka topics, consumers, and data-pipeline fundamentals.', tags: 'Kafka \u00b7 Python', github: 'https://github.com/Donghan5/learning_kafka', category: 'Data Infra' },
  { title: 'cloud-1', desc: 'Scaleway infra with Ansible provisioning and an Nginx reverse proxy, IaC throughout.', tags: 'Ansible \u00b7 Nginx \u00b7 DevOps', github: 'https://github.com/Donghan5/cloud-1', category: 'Infra' },
  { title: 'chatapp', desc: 'Full-stack chat with real-time messaging, deployed on Kubernetes with CI/CD.', tags: 'React \u00b7 Node \u00b7 K8s', github: 'https://github.com/Donghan5/chatapp', category: 'Web Infra' },
  { title: 'E-commerce API', desc: 'REST API with auth, products, orders, payments. Go + NestJS, PostgreSQL, Docker.', tags: 'Go \u00b7 NestJS \u00b7 PG', github: 'https://github.com/Donghan5/ecommerce_api', category: 'Web' },
  { title: 'weather_api', desc: 'Two-server weather service, Go + NestJS, Redis for caching.', tags: 'Go \u00b7 NestJS \u00b7 Redis', github: 'https://github.com/Donghan5/weather_api', category: 'Web' },
  { title: 'ft_transcendence', desc: 'Real-time multiplayer Pong, chat, and profiles. Full stack.', tags: 'TypeScript \u00b7 Web', github: 'https://github.com/Donghan5/ft_transcendence', category: 'Web' },
  { title: 'Weather app', desc: 'React + TS frontend for OpenWeatherMap, 5-day forecast and search.', tags: 'React \u00b7 TS \u00b7 Tailwind', github: 'https://github.com/Donghan5/weather_app', category: 'Web' },
  { title: 'Inception', desc: 'Multi-container stack with docker-compose: Nginx, WordPress, MariaDB.', tags: 'Docker \u00b7 Nginx', github: 'https://github.com/Donghan5/inception', category: 'Infra' },
  { title: 'webserv', desc: 'HTTP server in C++ handling GET and POST, socket-level.', tags: 'C++ \u00b7 HTTP', github: 'https://github.com/Donghan5/webserv', category: 'Low Infra' },
  { title: 'miniRT', desc: 'Ray tracer in C, geometry and lighting from first principles.', tags: 'C \u00b7 Graphics', github: 'https://github.com/Donghan5/miniRT', category: 'Low' },
  { title: 'minishell', desc: 'UNIX shell with parsing, execution, basic job control.', tags: 'C \u00b7 Systems', github: 'https://github.com/Donghan5/minishell', category: 'Low' },
  { title: 'Philosophers', desc: 'Dining philosophers in C with threads and mutexes, deadlock-free.', tags: 'C \u00b7 Threads', github: 'https://github.com/Donghan5/philosopher', category: 'Low' },
  { title: 'CPP Modules', desc: '00\u201309 \u2014 a full lap through C++ object orientation.', tags: 'C++ \u00b7 OOP', github: 'https://github.com/Donghan5/CPP_Modules', category: 'Low' },
  { title: 'push_swap', desc: 'Minimum-operation stack-sort puzzle in C.', tags: 'C \u00b7 Algorithms', github: 'https://github.com/Donghan5/push_swap', category: 'Low' },
  { title: 'libasm', desc: 'Assembly library for Unix syscalls and low-level interfacing.', tags: 'Assembly', github: 'https://github.com/Donghan5/libasm', category: 'Low' },
  { title: 'ft_printf', desc: 'Custom printf with variable args and format specifiers.', tags: 'C \u00b7 Library', github: 'https://github.com/Donghan5/ft_printf', category: 'Low' },
  { title: 'get_next_line', desc: 'Read-a-line function with dynamic buffering across fds.', tags: 'C \u00b7 I/O', github: 'https://github.com/Donghan5/get_next_line', category: 'Low' },
  { title: 'Libft', desc: 'The custom C standard-library replacement every 42 student ships first.', tags: 'C \u00b7 Library', github: 'https://github.com/Donghan5/Libft', category: 'Low' },
];

const filters = [
  { label: 'All', tag: 'all' },
  { label: 'Data & ML', tag: 'Data' },
  { label: 'Infra & DevOps', tag: 'Infra' },
  { label: 'Full-stack', tag: 'Web' },
  { label: 'Low-level', tag: 'Low' },
];

import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <div className="relative z-10">
      <div className="max-w-[880px] mx-auto px-8 py-[7.3rem] text-center">

        <div className="flex items-baseline justify-between mb-2.5">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle">Selected work</span>
          <span className="font-mono text-[11px] tracking-[0.14em] text-text-subtle">&sect; 03 &middot; {projects.length} entries</span>
        </div>
        <div className="rule-accent mx-auto mb-1.5" />
        <div className="rule mb-14" />

        <h2 className="font-display font-light text-[clamp(2rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.025em] text-text-main mb-6">
          What I've actually <em className="font-normal italic text-primary">built.</em>
        </h2>
        <p className="font-serif-alt font-light text-[20px] leading-[1.55] text-text-main max-w-[56ch] mx-auto mb-12">
          A mixed archive &mdash; data-oriented projects, infra work from 42,
          and the low-level C I cut my teeth on.
        </p>

        {/* Filters */}
        <div className="flex gap-5 flex-wrap justify-center mb-4 pb-5 border-b border-border">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-subtle mr-2">Filter</span>
          {filters.map((f) => (
            <button
              key={f.tag}
              onClick={() => setActiveFilter(f.tag)}
              className={`font-mono text-[12px] tracking-[0.04em] bg-transparent border-0 p-0 pb-0.5 cursor-pointer transition-colors duration-200 ${
                activeFilter === f.tag ? 'text-text-main border-b border-primary' : 'text-text-muted hover:text-text-main border-b border-transparent'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Featured */}
        <div className="my-10 py-10 border-t border-b border-border">
          <div className="flex items-baseline justify-center gap-6 mb-3.5">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-primary">Featured &middot; In production</span>
            <span className="font-mono text-[11px] text-text-subtle">2025 &mdash; Present</span>
          </div>
          <h3 className="font-serif font-normal text-[34px] leading-[1.1] tracking-[-0.02em] mb-4">Portfolio with RAG chat</h3>
          <p className="font-sans text-[17px] leading-[1.7] text-text-main max-w-[52ch] mx-auto mb-5">
            This site is itself a project &mdash; React on Vercel,
            FastAPI on Render with <em className="font-serif-alt italic">FastEmbed</em> (ONNX),
            Supabase pgvector for retrieval, Groq Llama 3 70B for generation.
          </p>
          <div className="font-mono text-[12px] text-text-muted tracking-[0.04em]">
            React &middot; FastAPI &middot; pgvector &middot; Groq &middot; Docker
            <a href="https://github.com/Donghan5/portfolio_RAG" target="_blank" rel="noreferrer" className="ml-5 text-text-main underline decoration-border-bright underline-offset-3 hover:text-primary hover:decoration-primary transition-colors duration-200">Architecture &rarr;</a>
          </div>
        </div>

        {/* Table head */}
        <div className="grid grid-cols-[36px_1fr_auto] gap-4 pb-2.5 font-mono text-[10px] tracking-[0.18em] uppercase text-text-subtle max-md:grid-cols-[28px_1fr] max-md:[&>.col-tags]:hidden">
          <span>No.</span>
          <span>Project &middot; description</span>
          <span className="col-tags">Stack</span>
        </div>

        {/* Project rows */}
        {filtered.map((p, i) => (
          <a
            key={p.title}
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="grid grid-cols-[36px_1fr_auto] gap-4 items-baseline py-4 border-t border-border no-underline text-text-main relative transition-colors duration-200 hover:bg-bg-card-hover group max-md:grid-cols-[28px_1fr] last:border-b"
          >
            <span className="font-mono text-[11px] text-text-subtle">{String(i + 1).padStart(2, '0')}</span>
            <span className="font-serif font-normal text-[20px] leading-[1.2] tracking-[-0.01em] group-hover:text-primary transition-colors duration-200 max-md:text-[18px]">
              {p.title}
              <span className="font-serif-alt italic text-text-subtle text-[15px] font-light mx-1.5 max-md:hidden">&mdash;</span>
              <span className="font-sans text-[14px] text-text-muted font-normal tracking-normal max-md:block max-md:mt-1">{p.desc}</span>
            </span>
            <span className="font-mono text-[11px] text-text-subtle tracking-[0.02em] whitespace-nowrap max-md:hidden">{p.tags}</span>
            <span className="absolute right-[-22px] top-1/2 -translate-y-1/2 opacity-0 font-mono text-primary transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">&rarr;</span>
          </a>
        ))}

        <p className="mt-12 font-serif-alt italic text-[14px] text-text-muted max-w-[50ch] mx-auto">
          A fuller list lives on <a href="https://github.com/Donghan5" target="_blank" rel="noreferrer" className="text-text-main decoration-border-bright">github.com/Donghan5</a>. These are the ones I'd actually defend.
        </p>
      </div>
    </div>
  );
}
