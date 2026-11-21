import { useState, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'clinic-hub', label: 'Clinic Hub' },
  { id: 'projects', label: 'Projects' },
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
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-portfolio flex items-center justify-between h-16 md:h-18" style={{ height: scrolled ? '64px' : '72px', transition: 'height 0.4s var(--ease-out)' }}>
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2.5 group"
            aria-label="Go to top"
          >
            <img
              src="/images/avatar.jpg"
              alt="Mohamed Fares"
              className="w-8 h-8 rounded-lg object-cover ring-2 ring-accent/20 group-hover:ring-accent transition-all duration-300"
            />
            <span className="hidden sm:block text-sm font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
              Mohamed Fares
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3 py-2 text-[13px] font-medium tracking-wide rounded-md transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-accent bg-accent-subtle'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="/Mohamed_Fares_CV.pdf"
              download
              className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
              aria-label="Download CV"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-bg-primary transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-400 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full container-portfolio gap-2 pt-16">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-2xl font-semibold py-2 w-full text-left transition-all duration-400 ${
                mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              } ${activeSection === item.id ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`}
              style={{ transitionDelay: mobileOpen ? `${i * 60 + 100}ms` : '0ms' }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Mohamed_Fares_CV.pdf"
            download
            className={`mt-6 btn-primary transition-all duration-400 ${
              mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: mobileOpen ? `${NAV_ITEMS.length * 60 + 100}ms` : '0ms' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
