export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-bg-primary border-t border-border">
      <div className="container-portfolio">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-6">
            <span className="w-9 h-9 flex items-center justify-center border border-border text-text-tertiary font-mono text-sm">
              MF
            </span>
            <div>
              <p className="text-sm text-text-secondary">
                © {new Date().getFullYear()} Mohamed Fares
              </p>
              <p className="text-xs text-text-tertiary mt-0.5">
                <a
                  href="mailto:mohamed.fares.engineer@gmail.com"
                  className="hover:text-accent transition-colors duration-300"
                >
                  mohamed.fares.engineer@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Center / Right */}
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
              <span className="text-border">/</span>
              <a
                href="https://www.linkedin.com/in/mohamed-fares-ismail"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-accent transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-xs font-mono text-text-tertiary hover:text-accent tracking-wide uppercase transition-colors duration-300"
            >
              Back to top
              <svg className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
