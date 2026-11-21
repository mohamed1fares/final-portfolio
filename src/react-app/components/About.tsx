import { useReveal } from '../hooks/useReveal';

export default function About() {
  const { ref: sectionRef, isVisible } = useReveal();

  return (
    <section id="about" className="py-24 md:py-32" style={{ background: '#FFFFFF' }}>
      <div className="container-portfolio" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Text Column */}
          <div
            className={`transition-all duration-800 ease-out-expo ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="section-label">
              <span>About</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-8">
              Building software that{' '}
              <span className="text-accent">solves real problems</span>
            </h2>

            <div className="space-y-5 text-text-secondary text-base leading-relaxed">
              <p>
                I'm Mohamed Fares, a Full Stack Developer based in Giza, Egypt, specializing in Angular, TypeScript, Node.js, and Express.js.
              </p>
              <p>
                I build end-to-end web applications — from responsive Angular frontend interfaces to backend APIs, database architecture, authentication systems, and third-party integrations. My focus is on building software that works reliably in real environments and supports actual workflows.
              </p>
              <p>
                My work includes developing <strong className="text-text-primary font-semibold">Clinic Hub</strong>, a multi-platform clinic management system serving multiple clinic branches, and contributing as Co-Founder & Full Stack Developer at <strong className="text-text-primary font-semibold">VulnCraft</strong>, a cybersecurity assessment platform that reached 3rd place in Africa at the 2025 Huawei ICT Competition.
              </p>
              <p>
                I have a Bachelor of Science in Computer Science from 6 October University (GPA 3.5/4.0, graduated June 2026, specialization: Software Engineering & Web Development) and have trained at the National Telecommunication Institute (NTI) in MEAN Stack development with a 100% score.
              </p>
            </div>

            {/* Key attributes */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: '🧩', label: 'Full Stack', desc: 'Frontend to backend' },
                { icon: '🏗️', label: 'Architecture', desc: 'Scalable systems design' },
                { icon: '🔗', label: 'Integrations', desc: 'APIs & webhooks' },
                { icon: '🛡️', label: 'Auth & RBAC', desc: 'JWT, OAuth, roles' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{item.label}</p>
                    <p className="text-xs text-text-tertiary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image + details column */}
          <div
            className={`transition-all duration-800 ease-out-expo delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Huawei photo */}
            <div className="relative overflow-hidden rounded-2xl mb-8" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
              <img
                src="/images/huawei-about.jpg"
                alt="Mohamed Fares at the Huawei ICT Competition 2025"
                className="w-full object-cover"
                style={{ height: '460px', objectPosition: 'center 35%' }}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, rgba(23,43,77,0.85) 0%, transparent 100%)' }}>
                <p className="text-white text-xs font-mono font-medium">Huawei ICT Competition — Africa Finals 2025</p>
                <p className="text-blue-200 text-xs mt-0.5">VulnCraft Team — 🏆 3rd Place, Africa</p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="space-y-3">
              {[
                { label: 'Education', value: 'BSc Computer Science — 6 October University', sub: 'GPA 3.5/4.0 · Graduated June 2026' },
                { label: 'Training', value: 'MEAN Stack — National Telecommunication Institute', sub: '180 hrs · Score: 100%' },
                { label: 'Location', value: 'Giza, Egypt', sub: 'Open to remote opportunities' },
              ].map(fact => (
                <div key={fact.label} className="flex gap-4 p-4 rounded-xl" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <span className="text-xs font-mono font-semibold text-accent uppercase tracking-wide w-20 flex-shrink-0 pt-0.5">{fact.label}</span>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{fact.value}</p>
                    <p className="text-xs text-text-tertiary mt-0.5">{fact.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
