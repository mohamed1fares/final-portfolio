import { useReveal } from '../hooks/useReveal';

interface SkillCategory {
  title: string;
  color: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    color: '#2563EB',
    skills: ['Angular 20', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'Bootstrap', 'Tailwind CSS', 'Angular Material', 'RxJS'],
  },
  {
    title: 'Backend',
    color: '#7C3AED',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'OAuth', 'RBAC', 'Middleware', 'Webhooks'],
  },
  {
    title: 'Databases',
    color: '#059669',
    skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Mongoose', 'SQL'],
  },
  {
    title: 'Integrations',
    color: '#D97706',
    skills: ['WhatsApp Business API', 'n8n', 'FastAPI', 'Python'],
  },
  {
    title: 'Tools & Platforms',
    color: '#64748B',
    skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Cloudinary', 'Hugging Face Spaces', 'Jira', 'Trello'],
  },
];

function SkillGroup({ category, index }: { category: SkillCategory; index: number }) {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: category.color }} />
        <h3
          className="text-xs font-mono font-semibold uppercase tracking-widest"
          style={{ color: category.color }}
        >
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map(skill => (
          <span
            key={skill}
            className="px-3.5 py-2 text-sm font-medium text-text-secondary rounded-lg transition-all duration-200 cursor-default hover:scale-105"
            style={{
              background: '#FFFFFF',
              border: '1.5px solid #E2E8F0',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = category.color;
              (e.currentTarget as HTMLElement).style.color = category.color;
              (e.currentTarget as HTMLElement).style.background = `${category.color}0D`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0';
              (e.currentTarget as HTMLElement).style.color = '#64748B';
              (e.currentTarget as HTMLElement).style.background = '#FFFFFF';
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();

  return (
    <section id="skills" className="py-24 md:py-32" style={{ background: '#F8FAFC' }}>
      <div className="container-portfolio">
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ease-out-expo ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-label">
            <span>Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            Technologies I work with
          </h2>
          <p className="text-text-secondary text-base mt-4 max-w-xl">
            A focused set of technologies I use to build complete, production-ready applications — from Angular interfaces to backend APIs and cloud deployments.
          </p>
        </div>

        <div className="space-y-10">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillGroup key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
