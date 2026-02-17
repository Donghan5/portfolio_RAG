const skills = [
  'C', 'C++', 'Python', 'Go', 'TypeScript', 'React', 'Bash',
  'Linux', 'Docker', 'Git', 'TailwindCSS', 'Machine Learning',
  'Deep Learning', 'Kafka', 'Redis', 'Nest.js', 'Node.js', 'Socket.io',
];

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4 relative z-10">
      <div className="w-full max-w-4xl max-h-[75vh] overflow-y-auto scrollbar-hide bg-bg-surface/60 backdrop-blur-xl border border-border-bright/40 rounded-2xl px-8 py-8 shadow-[0_0_60px_rgba(0,0,0,0.4)]">
        <h2 className="font-mono text-xs tracking-widest uppercase text-primary/60 mb-2 text-center">
          About
        </h2>
        <div className="h-px bg-border mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start">
          <img
            src="/profile_image.JPG"
            alt="Donghan Kim"
            className="w-[160px] md:w-full aspect-square rounded-2xl object-cover border border-border bg-bg-card transition-all duration-300 hover:border-primary/40 mx-auto md:mx-0 grayscale hover:grayscale-0"
          />
          <div>
            <p className="text-text-muted text-[15px] leading-[1.9] mb-8 max-w-2xl">
              I am a CS student at 42 Paris, pursuing a Master's degree (RNCP Level 7) in
              Computer Science. Passionate about all things AI/ML, I enjoy solving complex
              problems, learning new technologies, and building robust, scalable systems that
              bridge the gap between development and operations.
            </p>
            <p className="font-mono text-text-subtle text-[11px] tracking-widest uppercase mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-primary/70 px-2.5 py-1 rounded-md font-mono text-[11px] border border-border hover:border-primary/30 hover:text-primary transition-all duration-200 bg-bg-card/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
