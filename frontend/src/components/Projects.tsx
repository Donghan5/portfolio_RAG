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
    description: 'Implemented Multilayer Perceptron (MLP) neural network from scratch.',
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
      className="project-row group block no-underline"
    >
      {/* Always visible row */}
      <div className="flex items-center gap-4 py-4 border-b border-border transition-colors duration-200 group-hover:border-primary/20">
        <span className="font-mono text-[10px] text-text-subtle/40 shrink-0 w-6 text-right select-none">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3
          className="font-display font-bold text-[15px] text-text-main group-hover:text-primary transition-colors duration-200 flex-1 leading-snug"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {project.title}
        </h3>
        {/* Tags: fade in on hover, desktop only */}
        <div className="hidden md:flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
          {project.tags.length > 3 && (
            <span className="tag">+{project.tags.length - 3}</span>
          )}
        </div>
        <i className="fas fa-arrow-up-right-from-square text-[9px] opacity-0 group-hover:opacity-60 text-primary transition-opacity duration-200 shrink-0" />
      </div>

      {/* Description: revealed on hover via grid-template-rows animation */}
      <div className="project-reveal">
        <div className="project-reveal-inner">
          <p className="font-mono text-[12px] text-text-muted leading-relaxed pl-10 pt-3 pb-4">
            {project.description}
          </p>
          {/* Tags on mobile in reveal panel */}
          <div className="flex md:hidden flex-wrap gap-1.5 pl-10 pb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
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
        <div className="rule-red mb-6" />

        {/* Column labels */}
        <div className="hidden md:flex items-center gap-4 mb-2 pl-10">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-subtle/50 flex-1">Project</span>
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-subtle/50">Stack · hover to reveal</span>
        </div>
        <div className="rule mb-0" />

        {/* Project rows */}
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}

        <div className="rule mt-0" />
      </div>
    </div>
  );
}
