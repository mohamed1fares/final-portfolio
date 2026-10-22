import { useReveal } from '../hooks/useReveal';

interface SkillGroup {
  title: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['Angular', 'TypeScript', 'Next.js', 'React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'RxJS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'RESTful APIs', 'GraphQL', 'Microservices', 'Hono'],
  },
  {
    title: 'Data',
    skills: ['MongoDB', 'MySQL', 'Mongoose', 'Database Design'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git & GitHub', 'VS Code', 'Figma', 'Postman', 'Vite', 'Webpack', 'Cloudflare Workers'],
  },
];

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();

  return (
    <section id="skills" className="py-24 md:py-32 bg-bg-secondary">
      <div className="container-portfolio">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-16 md:mb-20 transition-all duration-1000 ease-out-expo ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-accent" />
            <span className="text-accent text-[13px] font-mono font-medium tracking-widest uppercase">
              Toolkit
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
            Technologies I <span className="italic text-text-secondary">work with</span>
          </h2>
        </div>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <SkillGroupCard key={group.title} group={group} index={groupIndex} />
          ))}
        </div>

        {/* Currently exploring */}
        <CurrentlyExploring />
      </div>
    </section>
  );
}

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xs font-mono font-medium tracking-widest uppercase text-text-tertiary mb-6 pb-4 border-b border-border">
        {group.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {group.skills.map(skill => (
          <span
            key={skill}
            className="px-4 py-2 text-sm text-text-secondary bg-bg-elevated border border-border hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function CurrentlyExploring() {
  const { ref, isVisible } = useReveal(0.1);
  const exploring = ['Cloudflare Workers', 'Edge Computing', 'AI/ML Integration', 'System Design'];

  return (
    <div
      ref={ref}
      className={`mt-16 pt-16 border-t border-border transition-all duration-1000 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="text-text-tertiary text-sm font-mono mb-4 tracking-wide">
        Currently exploring →
      </p>
      <div className="flex flex-wrap gap-3">
        {exploring.map(item => (
          <span
            key={item}
            className="px-4 py-2 text-sm text-accent border border-accent/30 bg-accent-subtle"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
