import { useState, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);

    const sections = NAV_ITEMS.map(item => ({
      id: item.id,
      el: document.getElementById(item.id),
    }));

    const scrollPos = window.scrollY + window.innerHeight / 3;
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.el && section.el.offsetTop <= scrollPos) {
        setActiveSection(section.id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container-portfolio flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 group"
            aria-label="Go to top"
          >
            <span className="w-9 h-9 flex items-center justify-center border border-accent text-accent font-mono text-sm font-medium tracking-wider group-hover:bg-accent group-hover:text-white transition-all duration-300">
              MF
            </span>
            <span className="hidden sm:block text-sm font-medium tracking-wide text-text-secondary group-hover:text-text-primary transition-colors duration-300">
              Mohamed Fares
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-text-tertiary hover:text-text-primary'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-accent" />
                )}
              </button>
            ))}
          </div>

          {/* Resume CTA (desktop) */}
          <a
            href="/Mohamed-Fares-Resume.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-[13px] font-medium tracking-wide uppercase border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
          >
            Résumé
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-6 h-px bg-text-primary transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-6 h-px bg-text-primary transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-text-primary transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg-primary transition-opacity duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full container-portfolio">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-3xl font-display py-3 transition-all duration-500 ${
                mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              } ${activeSection === item.id ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`}
              style={{ transitionDelay: mobileOpen ? `${i * 80 + 200}ms` : '0ms' }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Mohamed-Fares-Resume.pdf"
            download
            className={`mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide uppercase border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-500 ${
              mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: mobileOpen ? `${NAV_ITEMS.length * 80 + 200}ms` : '0ms' }}
          >
            Download Résumé
          </a>
        </div>
      </div>
    </>
  );
}
