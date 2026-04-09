const skills = [
  'C', 'C++', 'Python', 'Go', 'TypeScript', 'React', 'Bash',
  'Linux', 'Docker', 'Git', 'TailwindCSS', 'Machine Learning',
  'Deep Learning', 'Kafka', 'Redis', 'Nest.js', 'Node.js', 'Socket.io',
];

const info = [
  { icon: 'fas fa-map-marker-alt', text: 'Paris, France' },
  { icon: 'fas fa-graduation-cap', text: '42 Paris — RNCP Lv.7' },
  { icon: 'fas fa-language', text: 'Korean · French · English' },
];

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative z-10">
      <div className="w-full max-w-4xl">
        <h2 className="font-mono text-[11px] tracking-widest uppercase text-primary/50 mb-3 text-center">
          About
        </h2>
        <div className="divider-gradient mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Left: profile card */}
          <div className="md:col-span-4 bg-bg-card/40 border border-border rounded-2xl p-6 flex flex-col items-center gap-5 hover:border-primary/20 transition-all duration-300">
            <div className="relative">
              <img
                src="/profile_image.JPG"
                alt="Donghan Kim"
                className="w-28 h-28 rounded-2xl object-cover border border-border grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-text-main font-semibold text-base">Donghan Kim</h3>
              <p className="text-primary/70 text-[12px] font-mono mt-1">Software Engineer</p>
            </div>

            <div className="w-full space-y-2.5 border-t border-border pt-4">
              {info.map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-text-subtle text-[12px] font-mono">
                  <i className={`${item.icon} text-primary/40 w-3.5 shrink-0`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio + skills */}
          <div className="md:col-span-8 flex flex-col gap-4">

            {/* Bio */}
            <div className="bg-bg-card/40 border border-border rounded-2xl p-6 hover:border-primary/20 transition-all duration-300">
              <p className="font-mono text-[10px] tracking-widest uppercase text-primary/40 mb-4">Bio</p>
              <p className="text-text-muted text-[14px] leading-[1.95]">
                I am a CS student at 42 Paris, pursuing a Master's degree (RNCP Level 7) in
                Computer Science. Passionate about all things AI/ML, I enjoy solving complex
                problems, learning new technologies, and building robust, scalable systems that
                bridge the gap between development and operations.
              </p>
            </div>

            {/* Skills bento */}
            <div className="bg-bg-card/40 border border-border rounded-2xl p-6 hover:border-primary/20 transition-all duration-300">
              <p className="font-mono text-[10px] tracking-widest uppercase text-primary/40 mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-primary/65 px-2.5 py-1 rounded-lg font-mono text-[11px] border border-border hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-200 bg-bg-surface/50 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
