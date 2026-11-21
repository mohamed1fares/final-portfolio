import { useReveal } from '../hooks/useReveal';

export default function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: contentRef, isVisible: contentVisible } = useReveal(0.05);

  return (
    <section id="experience" className="py-24 md:py-32" style={{ background: '#FFFFFF' }}>
      <div className="container-portfolio">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out-expo ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-label">
            <span>Experience & Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            Background & Training
          </h2>
        </div>

        <div
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-16 transition-all duration-700 ease-out-expo ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-text-tertiary mb-8 pb-4 border-b border-border">
              Professional Experience
            </h3>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <span className="text-xs font-mono text-accent font-semibold tracking-wide">2025 — Present</span>
                </div>
                <h4 className="text-lg font-bold text-text-primary mb-0.5">Co-Founder & Full Stack Developer</h4>
                <p className="text-sm font-semibold text-accent mb-3">VulnCraft</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Co-founded and built VulnCraft, a cybersecurity vulnerability assessment platform. Architected the Angular frontend, administrative dashboard, and integrated Python scanning scripts via a FastAPI bridge.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Angular', 'Node.js', 'Python', 'FastAPI', 'MongoDB'].map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#B45309', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
                  🏆 Team — 3rd Place in Africa, 2025 Huawei ICT Competition
                </div>
              </div>
            </div>
          </div>

          {/* Education & Training */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-text-tertiary mb-8 pb-4 border-b border-border">
              Education & Training
            </h3>

            <div className="space-y-8">
              {/* BSc */}
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div>
                  <span className="text-xs font-mono text-accent font-semibold tracking-wide">2022 — June 2026</span>
                  <h4 className="text-base font-bold text-text-primary mt-1 mb-0.5">Bachelor of Science — Computer Science</h4>
                  <p className="text-sm text-text-secondary mb-1">6 October University</p>
                  <p className="text-xs font-mono text-text-tertiary mb-2">GPA: 3.5/4.0 · Specialization: Software Engineering & Web Development</p>
                </div>
              </div>

              {/* NTI */}
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div>
                  <span className="text-xs font-mono text-accent font-semibold tracking-wide">Jul 20 – Sep 4, 2025</span>
                  <h4 className="text-base font-bold text-text-primary mt-1 mb-0.5">MEAN Stack Web Developer Career Accelerator</h4>
                  <p className="text-sm text-text-secondary mb-1">National Telecommunication Institute (NTI)</p>
                  <p className="text-xs font-mono text-text-tertiary">180 technical hours + 30 freelancing hours · Score: 100%</p>
                </div>
              </div>

              {/* Huawei */}
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div>
                  <span className="text-xs font-mono text-accent font-semibold tracking-wide">September 29, 2024</span>
                  <h4 className="text-base font-bold text-text-primary mt-1 mb-0.5">AI Training — HCIA-AI V3.5 Course (Indonesian)</h4>
                  <p className="text-sm text-text-secondary mb-1">Huawei Talent Online</p>
                  <p className="text-xs text-text-tertiary leading-relaxed">Training completion certificate demonstrating AI fundamentals knowledge. This is a training completion record, not the professional HCIA-AI certification.</p>
                </div>
              </div>

              {/* ROUTE */}
              <div className="timeline-item">
                <div className="timeline-dot" style={{ background: '#94A3B8' }} />
                <div>
                  <span className="text-xs font-mono text-accent font-semibold tracking-wide">March 2024</span>
                  <h4 className="text-base font-bold text-text-primary mt-1 mb-0.5">UI/UX Design Training</h4>
                  <p className="text-sm text-text-secondary">ROUTE Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div
          className={`mt-20 transition-all duration-700 ease-out-expo ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-text-tertiary mb-8 pb-4 border-b border-border">
            Certificates
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* NTI Certificate */}
            <CertCard
              imageSrc="/images/cert-nti.jpg"
              title="MEAN Stack Web Developer Career Accelerator"
              org="National Telecommunication Institute (NTI)"
              date="Jul 20 – Sep 4, 2025"
              note="180 technical hrs + 30 freelancing hrs · Score: 100%"
            />

            {/* Huawei Certificate */}
            <CertCard
              imageSrc="/images/cert-huawei.jpg"
              title="HCIA-AI V3.5 Course (Indonesian)"
              org="Huawei Talent Online"
              date="September 29, 2024"
              note="Training completion certificate"
            />

            {/* ROUTE — text only */}
            <div
              className="cert-card p-6 flex flex-col justify-between"
              style={{ background: '#F8FAFC', cursor: 'default' }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(124, 58, 237, 0.1)' }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#7C3AED" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <h4 className="font-semibold text-text-primary mb-1">UI/UX Design Training</h4>
                <p className="text-sm text-text-secondary mb-1">ROUTE Academy</p>
                <p className="text-xs text-text-tertiary font-mono">March 2024</p>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-xs text-text-tertiary font-mono">Certificate not currently available for display</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertCard({ imageSrc, title, org, date, note }: {
  imageSrc: string;
  title: string;
  org: string;
  date: string;
  note?: string;
}) {
  const handleClick = () => {
    window.open(imageSrc, '_blank');
  };

  return (
    <div className="cert-card" onClick={handleClick} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && handleClick()} aria-label={`View ${title} certificate`}>
      <img
        src={imageSrc}
        alt={`${title} certificate`}
        className="cert-card-img"
        loading="lazy"
      />
      <div className="cert-card-body">
        <h4 className="text-sm font-semibold text-text-primary leading-snug mb-1">{title}</h4>
        <p className="text-xs text-text-secondary mb-1">{org}</p>
        <p className="text-xs text-text-tertiary font-mono">{date}</p>
        {note && <p className="text-[11px] text-text-tertiary mt-1.5 italic">{note}</p>}
        <div className="mt-2 flex items-center gap-1 text-xs text-accent">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803M10.5 7.5v6m3-3h-6" />
          </svg>
          Click to view full certificate
        </div>
      </div>
    </div>
  );
}
