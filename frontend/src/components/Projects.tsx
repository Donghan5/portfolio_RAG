interface Project {
  title: string;
  tags: string[];
  description: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'Weather app',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'OpenWeatherMap API'],
    description:
      'A weather application built with React and TypeScript, using the OpenWeatherMap API to fetch real-time weather data. Features include current weather, 5-day forecast, and search functionality for specific locations.',
    github: 'https://github.com/Donghan5/weather_app',
  },
  {
    title: 'E-commerce API',
    tags: ['Go', 'TypeScript(nest.js)', 'PostgreSQL', 'Docker'],
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="group block bg-bg-card/30 border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/20 hover:bg-bg-card/50 no-underline h-full"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-text-main text-[15px] font-medium group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <i className="fas fa-arrow-up-right-from-square text-text-subtle text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1.5" />
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] text-text-subtle px-1.5 py-0.5 rounded bg-border/40"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-text-muted text-[13px] leading-[1.7]">
        {project.description}
      </p>
    </a>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4 relative z-10">
      <div className="w-full max-w-4xl max-h-[75vh] overflow-y-auto scrollbar-hide bg-bg-surface/60 backdrop-blur-xl border border-border-bright/40 rounded-2xl px-8 py-8 shadow-[0_0_60px_rgba(0,0,0,0.4)]">
        <h2 className="font-mono text-xs tracking-widest uppercase text-primary/60 mb-2 text-center">
          Projects
        </h2>
        <div className="h-px bg-border mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
