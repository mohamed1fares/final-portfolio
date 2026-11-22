import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

type LightboxImg = string | null;

function ScreenshotGallery({ onOpen }: { onOpen: (src: string) => void }) {
  const screenshots = [
    { src: '/images/clinic-login.jpg', label: 'Login Screen', desc: 'JWT-secured authentication' },
    { src: '/images/clinic-branches.jpg', label: 'Branch Selection', desc: 'Multi-branch management' },
    { src: '/images/clinic-loading.png', label: 'App Loader', desc: 'Angular 20 splash screen' },
    { src: '/images/clinic-records.jpg', label: 'Clinical Records', desc: 'Patient history & vitals' },
    { src: '/images/clinic-finance.jpg', label: 'Finance & Billing', desc: 'Payment tracking & reports' },
  ];

  return (
    <div className="gallery-grid">
      {screenshots.map((s) => (
        <div
          key={s.src}
          className="gallery-item"
          onClick={() => onOpen(s.src)}
          role="button"
          tabIndex={0}
          aria-label={`View screenshot: ${s.label}`}
          onKeyDown={(e) => e.key === 'Enter' && onOpen(s.src)}
        >
          <img src={s.src} alt={s.label} loading="lazy" />
          <div className="gallery-overlay">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803M10.5 7.5v6m3-3h-6" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2.5 text-white" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)' }}>
            <p className="text-xs font-semibold leading-tight">{s.label}</p>
            <p className="text-[10px] opacity-80">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ArchitectureDiagram() {
  const layers = [
    {
      title: 'Frontend Clients',
      color: '#2563EB',
      nodes: [
        { icon: '🌐', label: 'Web', sub: 'Angular 20' },
        { icon: '🖥️', label: 'Desktop', sub: 'Electron' },
        { icon: '📱', label: 'Mobile', sub: 'PWA' },
      ],
    },
    {
      title: 'Backend API Layer',
      color: '#7C3AED',
      nodes: [
        { icon: '⚡', label: 'Node.js', sub: 'Express.js' },
        { icon: '🔑', label: 'Auth', sub: 'JWT + RBAC' },
        { icon: '🔗', label: 'REST API', sub: 'Endpoints' },
      ],
    },
    {
      title: 'Data & Integrations',
      color: '#059669',
      nodes: [
        { icon: '🗄️', label: 'PostgreSQL', sub: 'Supabase' },
        { icon: '💬', label: 'WhatsApp', sub: 'Business API' },
        { icon: '🤖', label: 'n8n', sub: 'Automation' },
      ],
    },
  ];

  return (
    <div className="space-y-4">
      {layers.map((layer, li) => (
        <div key={layer.title}>
          <p className="text-xs font-mono font-semibold uppercase tracking-wide mb-3" style={{ color: layer.color }}>{layer.title}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {layer.nodes.map(node => (
              <div key={node.label} className="arch-node">
                <div className="arch-icon">{node.icon}</div>
                <div className="arch-label">{node.label}</div>
                <div className="arch-sub">{node.sub}</div>
              </div>
            ))}
          </div>
          {li < layers.length - 1 && (
            <div className="flex justify-center my-3">
              <svg className="w-5 h-5 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ClinicHub() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: contentRef, isVisible: contentVisible } = useReveal(0.05);
  const [lightbox, setLightbox] = useState<LightboxImg>(null);

  const techStack = [
    'Angular 20', 'TypeScript', 'Node.js', 'Express.js',
    'PostgreSQL', 'Supabase', 'REST APIs', 'JWT', 'RBAC',
    'WhatsApp Business API', 'n8n', 'Webhooks', 'Vercel',
  ];

  const features = [
    { icon: '👥', title: 'Patient Management', desc: 'Complete patient profiles, history, and clinical records' },
    { icon: '📅', title: 'Appointment Scheduling', desc: 'Multi-branch booking with daily queue management' },
    { icon: '🏥', title: 'Medical Records', desc: 'Diagnoses, prescriptions, vitals, and follow-up tracking' },
    { icon: '💊', title: 'Injection Packages', desc: 'Dose scheduling, progress tracking, and package management' },
    { icon: '💰', title: 'Finance & Billing', desc: 'Payment tracking, financial cycles, and reporting' },
    { icon: '👔', title: 'HR & Payroll', desc: 'Employee management, shifts, and financial deductions' },
    { icon: '🏢', title: 'Multi-Branch', desc: 'Central management across all clinic branches' },
    { icon: '💬', title: 'WhatsApp Booking', desc: 'Automated appointment booking via WhatsApp Business API' },
  ];

  const userRoles = ['Administrators', 'Receptionists', 'Doctors', 'Patients'];

  return (
    <section id="clinic-hub" className="py-24 md:py-32" style={{ background: '#F8FAFC' }}>
      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Screenshot preview"
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-lg transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close preview"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img src={lightbox} alt="Screenshot full view" onClick={e => e.stopPropagation()} />
        </div>
      )}

      <div className="container-portfolio">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 md:mb-20 transition-all duration-800 ease-out-expo ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-label">
            <span>Featured Project</span>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-3">
                Clinic Hub
              </h2>
              <p className="text-lg text-text-secondary font-medium">
                End-to-End Multi-Platform Clinic Management System
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="badge-whatsapp">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Integrated
              </span>
              <span className="tech-badge">Multi-Platform</span>
              <span className="tech-badge">Multi-Branch</span>
            </div>
          </div>
        </div>

        <div
          ref={contentRef}
          className={`space-y-16 transition-all duration-800 ease-out-expo ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Problem → Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-7" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(239, 68, 68, 0.1)' }}>🔴</span>
                <h3 className="font-semibold text-text-primary text-sm uppercase tracking-wide">The Problem</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Dr. Naira Hany's clinic (Endocrine & Diabetes specialist) needed a unified system to manage patient records, appointment queues, injection packages, billing, staff shifts, and multi-branch operations — all in real time, with WhatsApp-based booking coordination.
              </p>
            </div>
            <div className="rounded-2xl p-7" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(37, 99, 235, 0.1)' }}>🔵</span>
                <h3 className="font-semibold text-text-primary text-sm uppercase tracking-wide">My Solution</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                I architected and built a full-stack multi-platform clinic management system: an Angular 20 frontend, a Node.js/Express.js backend API, a PostgreSQL database on Supabase, and WhatsApp Business API integration via webhooks and n8n automation — all sharing one backend layer across web, desktop, and mobile clients.
              </p>
            </div>
          </div>

          {/* Screenshots gallery */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
              <span className="w-1 h-6 rounded-full bg-accent" />
              System Screenshots
            </h3>
            <ScreenshotGallery onOpen={setLightbox} />
            <p className="text-xs text-text-tertiary mt-3 font-mono">
              * Sensitive patient data has been excluded. Screenshots show UI structure and workflow only.
            </p>
          </div>

          {/* System Architecture */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-1 h-6 rounded-full bg-accent" />
                System Architecture
              </h3>
              <ArchitectureDiagram />
            </div>

            <div className="space-y-6">
              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
                  <span className="w-1 h-6 rounded-full bg-accent" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              {/* User Roles */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide font-mono">User Roles</h4>
                <div className="flex flex-wrap gap-2">
                  {userRoles.map(role => (
                    <span key={role} className="feature-pill">
                      <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* WhatsApp Integration */}
              <div className="rounded-xl p-5" style={{ background: 'rgba(37, 211, 102, 0.06)', border: '1px solid rgba(37, 211, 102, 0.2)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#128C7E">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <h4 className="font-semibold text-sm" style={{ color: '#128C7E' }}>WhatsApp Integration</h4>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  The WhatsApp Business API sends appointment-related messages to patients. Incoming WhatsApp interactions trigger webhooks that route through n8n automation workflows, which coordinate with the Node.js/Express backend to process appointment data and update the database.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['WhatsApp Business API', 'Webhooks', 'n8n', 'Node.js Backend'].map(t => (
                    <span key={t} className="text-[11px] font-mono font-medium px-2 py-0.5 rounded" style={{ background: 'rgba(37, 211, 102, 0.12)', color: '#128C7E', border: '1px solid rgba(37, 211, 102, 0.25)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
              <span className="w-1 h-6 rounded-full bg-accent" />
              Core Features
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map(f => (
                <div
                  key={f.title}
                  className="p-5 rounded-xl"
                  style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                >
                  <span className="text-2xl block mb-3">{f.icon}</span>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{f.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div className="rounded-2xl p-8" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
            <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
              <span className="w-1 h-6 rounded-full bg-accent" />
              My Role & Responsibilities
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  area: 'Frontend',
                  color: '#2563EB',
                  items: ['Angular 20 architecture', 'Component-based UI design', 'RxJS state management', 'Responsive layouts (web/mobile)', 'Role-based interface views', 'Multi-language (AR/EN)'],
                },
                {
                  area: 'Backend',
                  color: '#7C3AED',
                  items: ['Node.js / Express.js API', 'JWT authentication system', 'Role-based access control', 'RESTful endpoint design', 'Webhook handlers', 'Business logic & middleware'],
                },
                {
                  area: 'Database & Integrations',
                  color: '#059669',
                  items: ['PostgreSQL schema design', 'Supabase configuration', 'WhatsApp Business API', 'n8n workflow automation', 'Vercel deployment', 'Cloudinary (media)'],
                },
              ].map(section => (
                <div key={section.area}>
                  <p className="text-xs font-mono font-semibold uppercase tracking-wide mb-3" style={{ color: section.color }}>{section.area}</p>
                  <ul className="space-y-2">
                    {section.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: section.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
