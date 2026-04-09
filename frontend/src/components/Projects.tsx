interface Project {
  title: string;
  tags: string[];
  description: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'cloud-1',
    tags: ['Ansible', 'Nginx', 'DevOps', 'Cloud'],
    description:
      'Deployed and managed a scalable web infrastructure on Scaleway cloud, using Ansible for automated provisioning and configuration. Set up Nginx as a reverse proxy with infrastructure-as-code practices.',
    github: 'https://github.com/Donghan5/cloud-1',
  },
  {
    title: 'Weather app',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'OpenWeatherMap API'],
    description:
      'A weather application built with React and TypeScript, using the OpenWeatherMap API to fetch real-time weather data. Features include current weather, 5-day forecast, and search functionality.',
    github: 'https://github.com/Donghan5/weather_app',
  },
  {
    title: 'E-commerce API',
    tags: ['Go', 'TypeScript (nest.js)', 'PostgreSQL', 'Docker'],
    description:
      'A RESTful API for an e-commerce platform built with Typescript and Go using the Gin framework. Features include user authentication, product management, order processing, and payment integration.',
    github: 'https://github.com/Donghan5/ecommerce_api',
  },
  {
    title: 'weather_api',
    tags: ['Go', 'Typescript (nest.js)', 'Redis'],
    description:
      'A weather API service that provides current weather data and forecasts. Implements 2 servers with Go and Typescript (Nest.js), using Redis for caching.',
    github: 'https://github.com/Donghan5/weather_api',
  },
  {
    title: 'chatapp',
    tags: ['React', 'Typescript', 'Node.js', 'PostgreSQL', 'Kafka', 'K8s'],
    description:
      'A full-stack chat application with real-time messaging, user authentication, and group chats. Deployed using Kubernetes with a CI/CD pipeline.',
    github: 'https://github.com/Donghan5/chatapp',
  },
  {
    title: 'ft_linear_regression',
    tags: ['Python', 'Numpy'],
    description: 'Implemented basic linear regression from scratch.',
    github: 'https://github.com/Donghan5/ft_linear_regression',
  },
  {
    title: 'multilayer-perceptron',
    tags: ['Python', 'Numpy', 'Pandas'],
    description: 'Implemented Multilayer Perceptron (MLP).',
    github: 'https://github.com/Donghan5/multilayer_perceptron',
  },
  {
    title: 'learning_kafka',
    tags: ['Kafka', 'Data Engineering', 'Python'],
    description:
      'Understanding of Kafka concepts and data-pipeline through hands-on projects, with a goal of understanding fundamental principles.',
    github: 'https://github.com/Donghan5/learning_kafka',
  },
  {
    title: 'Understanding of ML',
    tags: ['Python', 'C++', 'C', 'ML'],
    description:
      'Understanding of Machine Learning concepts and algorithms through hands-on projects, with a goal of implementing Transformers.',
    github: 'https://github.com/Donghan5/Understanding_of_ML',
  },
  {
    title: 'libasm',
    tags: ['Assembly', 'Low-Level'],
    description:
      'A low-level programming library written in Assembly, focusing on Unix system calls and interfacing.',
    github: 'https://github.com/Donghan5/libasm',
  },
  {
    title: 'ft_transcendence',
    tags: ['TypeScript', 'Full-Stack', 'Web App'],
    description:
      'Developed a full-stack web application featuring real-time multiplayer Pong, chat, and user profiles.',
    github: 'https://github.com/Donghan5/ft_transcendence',
  },
  {
    title: 'Inception',
    tags: ['Docker', 'System Admin', 'Nginx'],
    description:
      'Set up a multi-container infrastructure using Docker and docker-compose, including Nginx, WordPress, and MariaDB.',
    github: 'https://github.com/Donghan5/inception',
  },
  {
    title: 'webserv',
    tags: ['C++', 'Networking', 'HTTP'],
    description:
      'Developed a simple HTTP server in C++ that handles GET and POST requests.',
    github: 'https://github.com/Donghan5/webserv',
  },
  {
    title: 'CPP Modules',
    tags: ['C++', 'OOP'],
    description:
      'Completed a series of C++ modules (00-09) to master object-oriented programming concepts.',
    github: 'https://github.com/Donghan5/CPP_Modules',
  },
  {
    title: 'miniRT',
    tags: ['C', 'Graphics', 'Ray Tracing'],
    description:
      'Implemented a ray tracing engine in C to render 3D scenes with various geometric objects and lighting effects.',
    github: 'https://github.com/Donghan5/miniRT',
  },
  {
    title: 'minishell',
    tags: ['C', 'System Programming', 'Shell'],
    description:
      'Developed a UNIX shell implementation with command parsing, execution, and basic job control.',
    github: 'https://github.com/Donghan5/minishell',
  },
  {
    title: 'Philosophers',
    tags: ['C', 'Multithreading', 'Concurrency'],
    description:
      'Solved the dining philosophers problem using C threads and mutexes to prevent deadlocks.',
    github: 'https://github.com/Donghan5/philosopher',
  },
  {
    title: 'push_swap',
    tags: ['C', 'Algorithm', 'Sorting'],
    description:
      'Created an efficient algorithm to sort a stack of numbers with limited operations.',
    github: 'https://github.com/Donghan5/push_swap',
  },
  {
    title: 'ft_printf',
    tags: ['C', 'Library', 'Formatting'],
    description:
      'Implemented a custom printf function in C to handle formatted output with variable argument lists.',
    github: 'https://github.com/Donghan5/ft_printf',
  },
  {
    title: 'get_next_line',
    tags: ['C', 'File I/O', 'Buffering'],
    description:
      'Implemented a function to read a line from a file descriptor, handling multiple files and dynamic memory.',
    github: 'https://github.com/Donghan5/get_next_line',
  },
  {
    title: 'Libft',
    tags: ['C', 'Library', 'Utilities'],
    description:
      'Developed a custom C library with essential functions to enhance programming efficiency and code reusability.',
    github: 'https://github.com/Donghan5/Libft',
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="group block no-underline py-6 transition-colors duration-200 hover:bg-bg-card/60"
      style={{ borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[32px_1fr_auto] gap-4 md:gap-6 items-start">
        {/* Index */}
        <span className="font-mono text-[10px] text-text-subtle/50 pt-0.5 hidden md:block">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3
              className="font-display font-bold text-[16px] text-text-main group-hover:text-primary transition-colors duration-200"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {project.title}
            </h3>
            <i className="fas fa-arrow-up-right-from-square text-[9px] text-text-subtle/0 group-hover:text-primary/50 transition-all duration-200 translate-x-[-4px] group-hover:translate-x-0" />
          </div>
          <p className="font-mono text-[12px] text-text-muted leading-[1.8]">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 md:justify-end md:max-w-[180px]">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen pt-12 relative z-10">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* Section header */}
        <div className="flex items-baseline justify-between mb-3">
          <h2
            className="font-display font-bold text-[11px] tracking-[0.25em] uppercase text-text-subtle"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Projects
          </h2>
          <span className="font-mono text-[10px] text-text-subtle/50 tracking-[0.12em]">
            § 03 · {projects.length} entries
          </span>
        </div>
        <div className="rule-red mb-10" />

        {/* Column labels */}
        <div className="grid-cols-[32px_1fr_auto] gap-6 items-center mb-2 hidden md:grid">
          <span />
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-subtle/50">Project</span>
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-subtle/50 text-right">Stack</span>
        </div>
        <div className="rule mb-0" />

        {/* Project rows */}
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
