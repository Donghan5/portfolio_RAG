export default function HomePage() {
  return (
    <section className="hero-shell">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-1">Software Engineer / Machine Learning Engineer / Forward Deployment Engineer</p>
          <h1 className="hero-2">I build systems that turn difficult problems into useful software.</h1>
          <p className="hero-3">From low-level networking and model training to cloud deployment, I work across the full path from idea to operating system.</p>
          <div className="hero-actions hero-4"><a href="#projects" className="button-primary">Explore selected work <i className="fas fa-arrow-down" aria-hidden="true" /></a><a href="mailto:donghank@student.42.fr" className="button-secondary">Start a conversation</a></div>
        </div>
        <aside className="hero-profile hero-5" aria-label="Profile"><img src="/profile_image.JPG" alt="Donghan Kim" /><div><p className="profile-name">Donghan Kim</p><p className="profile-meta">42 Paris · AI and systems engineering</p></div></aside>
      </div>
      <div className="hero-status" aria-label="Current focus"><span>Available for engineering opportunities</span><span>Based in Paris</span><span>Open to Europe and remote</span></div>
    </section>
  );
}
