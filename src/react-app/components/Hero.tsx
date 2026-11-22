import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)' }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #CBD5E1 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Blue accent blob */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="container-portfolio relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-28 lg:py-0 min-h-screen lg:min-h-0 lg:py-32">

          {/* Text Column */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 mb-6 transition-all duration-700 ease-out-expo ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-subtle border border-accent/20 text-accent text-xs font-mono font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-text-primary mb-4 transition-all duration-800 ease-out-expo ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '350ms', fontFamily: 'Inter, sans-serif' }}
            >
              Mohamed
              <span className="block text-accent">Fares</span>
            </h1>

            {/* Title */}
            <p
              className={`text-xl md:text-2xl font-semibold text-text-secondary mb-2 transition-all duration-700 ease-out-expo ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              Full Stack Developer
            </p>

            {/* Specialization pills */}
            <div
              className={`flex flex-wrap gap-2 mb-7 transition-all duration-700 ease-out-expo ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {['Angular', 'TypeScript', 'Node.js', 'Express.js'].map(tech => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>

            {/* Description */}
            <p
              className={`text-text-secondary text-base md:text-lg leading-relaxed max-w-lg mb-10 transition-all duration-700 ease-out-expo ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              I build practical, end-to-end web applications — from responsive Angular interfaces
              to backend APIs, database architecture, and real-world integrations.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap items-center gap-3 mb-10 transition-all duration-700 ease-out-expo ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '850ms' }}
            >
              <button onClick={() => scrollTo('clinic-hub')} className="btn-primary">
                Explore My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a href="/Mohamed_Fares_CV.pdf" download className="btn-secondary">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Social links + location */}
            <div
              className={`flex flex-wrap items-center gap-5 transition-all duration-700 ease-out-expo ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <a
                href="https://github.com/mohamed1fares"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-fares-ismail"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <button onClick={() => scrollTo('contact')} className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Contact Me
              </button>
              <span className="flex items-center gap-1.5 text-sm text-text-tertiary">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                </svg>
                Giza, Egypt
              </span>
            </div>
          </div>

          {/* Portrait Column */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 ease-out-expo ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative">
              {/* Portrait frame */}
              <div
                className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] overflow-hidden"
                style={{ borderRadius: '24px', boxShadow: '0 20px 60px rgba(37, 99, 235, 0.15), 0 8px 24px rgba(0,0,0,0.08)' }}
              >
                <img
                  src="/images/huawei-hero.jpg"
                  alt="Mohamed Fares — Full Stack Developer"
                  className="img-portrait"
                  loading="eager"
                  style={{ objectPosition: 'center 20%' }}
                />
                {/* Subtle overlay for color harmony */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(37,99,235,0.08) 0%, transparent 50%)' }}
                />
              </div>

              {/* Floating accent card */}
              <div
                className="absolute -bottom-5 -left-5 card p-4 hidden sm:flex items-center gap-3"
                style={{ borderRadius: '12px', minWidth: '180px' }}
              >
                <span className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold text-text-primary">Full Stack</p>
                  <p className="text-[11px] text-text-tertiary">Angular · Node.js</p>
                </div>
              </div>

              {/* NTI badge */}
              <div
                className="absolute -top-4 -right-4 card p-3 text-center hidden sm:block"
                style={{ borderRadius: '12px', minWidth: '100px' }}
              >
                <p className="text-[11px] font-mono font-semibold text-accent">NTI</p>
                <p className="text-[10px] text-text-tertiary leading-tight">100% Score</p>
                <p className="text-[10px] text-text-tertiary">2025</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`hidden lg:flex scroll-indicator transition-all duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1400ms' }}
      >
        <div className="scroll-indicator-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
