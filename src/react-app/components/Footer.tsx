export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-border" style={{ background: '#FFFFFF' }}>
      <div className="container-portfolio">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          {/* Left */}
          <div className="flex items-center gap-3">
            <img
              src="/images/avatar.jpg"
              alt="Mohamed Fares"
              className="w-8 h-8 rounded-lg object-cover ring-2 ring-accent/20"
            />
            <div>
              <p className="text-sm font-semibold text-text-primary">Mohamed Fares</p>
              <p className="text-xs text-text-tertiary">
                © {new Date().getFullYear()} ·{' '}
                <a
                  href="mailto:mohamed.fares.developer@gmail.com"
                  className="hover:text-accent transition-colors duration-300"
                >
                  mohamed.fares.developer@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-xs font-mono">
              <a
                href="https://github.com/mohamed1fares"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-accent transition-colors duration-300"
              >
                GitHub
              </a>
              <span className="text-border-strong">/</span>
              <a
                href="https://www.linkedin.com/in/mohamed-fares-ismail"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-accent transition-colors duration-300"
              >
                LinkedIn
              </a>
              <span className="text-border-strong">/</span>
              <a
                href="/Mohamed_Fares_CV.pdf"
                download
                className="text-text-tertiary hover:text-accent transition-colors duration-300"
              >
                CV
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 text-xs font-mono text-text-tertiary hover:text-accent tracking-wide uppercase transition-colors duration-300"
            >
              Top
              <svg className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-xs text-text-tertiary mt-6 font-mono">
          Full Stack Developer · Angular · TypeScript · Node.js · Express.js · Giza, Egypt
        </p>
      </div>
    </footer>
  );
}
