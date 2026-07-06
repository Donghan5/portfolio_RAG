const links = [
  ['fa-envelope', 'donghank@student.42.fr', 'mailto:donghank@student.42.fr'],
  ['fa-linkedin', 'linkedin.com/in/donghan-kim01', 'https://www.linkedin.com/in/donghan-kim01'],
  ['fa-github', 'github.com/Donghan5', 'https://github.com/Donghan5'],
];

export default function Contact() {
  return (
    <footer className="border-t border-border">
      <section className="section-wrap py-16 text-center">
        <p className="eyebrow">Let’s connect</p><h2 className="section-title">Get in touch</h2>
        <p className="section-copy mx-auto mt-2">I’m open to thoughtful conversations, opportunities, and collaborations.</p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-5 md:gap-12">
          {links.map(([icon, label, href]) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><i className={`${icon === 'fa-envelope' ? 'fas' : 'fab'} ${icon} text-primary mr-2`} />{label}</a>)}
        </div>
      </section>
      <div className="border-t border-border py-5 px-6 text-center text-[12px] text-text-subtle">© 2026 Donghan Kim. Built with care and clean interfaces.</div>
    </footer>
  );
}
