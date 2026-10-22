import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end pb-16 md:pb-24 lg:items-center lg:pb-0 overflow-hidden"
    >
      {/* Background Image — Portrait */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/95 to-bg-primary/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/40 z-10" />
        <img
          src="/images/portrait.jpg"
          alt=""
          className="w-full h-full object-cover object-top opacity-40 lg:opacity-50"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="container-portfolio relative z-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ease-out-expo ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <span className="block w-12 h-px bg-accent" />
            <span className="text-accent text-[13px] font-mono font-medium tracking-widest uppercase">
              Full-Stack Engineer
            </span>
          </div>

          {/* Name */}
          <h1
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6 transition-all duration-1000 ease-out-expo ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            Mohamed
            <br />
            <span className="italic text-text-secondary">Fares</span>
          </h1>

          {/* Description */}
          <p
            className={`text-text-secondary text-base md:text-lg leading-relaxed max-w-lg mb-10 transition-all duration-700 ease-out-expo ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            I build modern web applications with Angular, Node.js, and the MEAN stack.
            Focused on clean architecture, real engineering, and products people actually use.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap items-center gap-4 transition-all duration-700 ease-out-expo ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-white text-sm font-medium tracking-wide uppercase hover:bg-accent-light transition-colors duration-300"
            >
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-text-secondary text-sm font-medium tracking-wide uppercase hover:border-text-secondary hover:text-text-primary transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll indicator */}
          <div
            className={`hidden lg:flex items-center gap-3 mt-20 transition-all duration-700 ease-out-expo ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <div className="w-px h-12 bg-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full bg-accent animate-pulse" style={{ height: '100%', animation: 'scrollPulse 2s ease-in-out infinite' }} />
            </div>
            <span className="text-text-tertiary text-xs font-mono tracking-widest uppercase">Scroll</span>
          </div>
        </div>
      </div>

      {/* Side Info — Desktop Only */}
      <div
        className={`hidden xl:flex flex-col items-center gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-30 transition-all duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1400ms' }}
      >
        <a href="https://github.com/mohamed1fares" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-accent transition-colors duration-300" aria-label="GitHub">
          <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/mohamed-fares-ismail" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
          <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <span className="w-px h-16 bg-border mt-2" />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
