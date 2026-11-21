import { useReveal } from '../hooks/useReveal';

interface OtherProject {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  note?: string;
  achievement?: string;
  role?: string;
}

const OTHER_PROJECTS: OtherProject[] = [
  {
    title: 'VulnCraft',
    tagline: 'Cybersecurity Vulnerability Assessment Platform',
    role: 'Co-Founder & Full Stack Developer | 2025–Present',
    description:
      'A multi-service cybersecurity platform for automated vulnerability assessment. I built the Angular frontend, the administrative dashboard, and integrated 5+ Python scanning scripts through a FastAPI bridge to deliver actionable security reports.',
    tech: ['Angular', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'MongoDB', 'Vercel', 'Hugging Face Spaces'],
    highlights: [
      'Angular frontend & admin dashboard',
      'FastAPI bridge integrating 5+ Python scanning scripts',
      'SQL injection & rate-limiting detection',
      'Secure routing & role-based access control',
      'Multi-service cloud deployment (Vercel + Hugging Face Spaces)',
    ],
    achievement: "🏆 Team Achievement — 3rd Place in Africa, 2025 Huawei ICT Competition",
    github: 'https://github.com/mohamed1fares',
  },
  {
    title: 'Wasel',
    tagline: 'Hypermarket Inventory Management System',
    description:
      'A full-stack hypermarket management system handling 5,000+ inventory units across 15+ nested product categories, with a comprehensive administrative dashboard and advanced database aggregations.',
    tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
    highlights: [
      '5,000+ inventory units managed',
      '15+ nested product categories',
      'Administrative dashboard with CRUD operations',
      'MongoDB aggregation pipelines',
      'Role-based access control',
    ],
    note: 'Private project — not publicly available',
  },
  {
    title: 'DELMA',
    tagline: 'B2B Medical Supplies E-Commerce Platform',
    description:
      'A B2B e-commerce platform for medical supplies, featuring 100+ products, a full shopping cart system, JWT-secured authentication, and order lifecycle tracking from placement to delivery.',
    tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    highlights: [
      '100+ products catalog',
      'Shopping cart & checkout flow',
      'Order tracking: pending → shipped → delivered',
      'JWT authentication & RBAC',
      'B2B-focused admin interface',
    ],
    note: 'Private project — not publicly available',
  },
];

function ProjectCard({ project, index }: { project: OtherProject; index: number }) {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`card p-7 md:p-8 flex flex-col h-full transition-all duration-700 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms`, borderRadius: '16px' }}
    >
      {/* Header */}
      <div className="mb-5">
        {project.achievement && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', color: '#B45309' }}>
            {project.achievement}
          </div>
        )}
        <h3 className="text-xl font-bold text-text-primary mb-1">{project.title}</h3>
        <p className="text-sm font-medium text-accent mb-1">{project.tagline}</p>
        {project.role && (
          <p className="text-xs font-mono text-text-tertiary">{project.role}</p>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-6">{project.description}</p>

      {/* Highlights */}
      <div className="mb-6 flex-1">
        <p className="text-xs font-mono font-semibold uppercase tracking-wide text-text-tertiary mb-3">Key Work</p>
        <ul className="space-y-2">
          {project.highlights.map(h => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map(t => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>

      {/* Links / Note */}
      <div className="pt-4 border-t border-border flex items-center gap-3 flex-wrap">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-xs"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
        {project.note && (
          <span className="text-xs text-text-tertiary font-mono flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            {project.note}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();

  return (
    <section id="projects" className="py-24 md:py-32" style={{ background: '#FFFFFF' }}>
      <div className="container-portfolio">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out-expo ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-label">
            <span>Other Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            More work I've built
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/mohamed1fares?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
