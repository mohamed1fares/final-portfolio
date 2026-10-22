import { useReveal } from '../hooks/useReveal';

interface ExperienceItem {
  period: string;
  type: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2025 — Present',
    type: 'Freelance',
    title: 'Full-Stack Developer',
    company: 'Freelance',
    location: 'Cairo, Egypt',
    description:
      'Building scalable web applications for clients using Angular, Node.js, and Express. Architecting both frontend and backend systems from scratch.',
    achievements: [
      'Designed and implemented microservices architecture for client projects',
      'Built production-ready applications with comprehensive testing',
      'Established code review processes and development best practices',
    ],
    tech: ['Angular', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
  },
  {
    period: '2024 — 2025',
    type: 'Part-Time',
    title: 'Full-Stack Developer',
    company: 'Digital Innovations Ltd',
    location: 'Cairo, Egypt',
    description:
      'Developed and maintained client projects including e-commerce platforms and web applications. Collaborated with UI/UX designers to create responsive interfaces.',
    achievements: [
      'Built 8+ production-ready web applications from scratch',
      'Integrated payment systems for e-commerce platforms',
      'Optimized database queries resulting in faster response times',
      'Implemented real-time features using WebSocket',
    ],
    tech: ['Angular', 'Express.js', 'MongoDB', 'Socket.io'],
  },
  {
    period: '2024',
    type: 'Internship',
    title: 'Web Development Intern',
    company: 'CodeCraft Agency',
    location: 'Cairo, Egypt',
    description:
      'Learned modern web development practices and contributed to client projects. Gained hands-on experience with development tools and collaborative workflows.',
    achievements: [
      'Contributed to 5+ client websites and web applications',
      'Learned version control and collaborative development practices',
      'Completed intensive web development training program',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'MySQL'],
  },
];

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-12 pb-16 last:pb-0 transition-all duration-1000 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-px flex justify-center -translate-x-[3px]">
        <div className="w-[7px] h-[7px] rounded-full bg-accent" />
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
        <span className="text-xs font-mono text-accent tracking-wide">{item.period}</span>
        <span className="text-xs font-mono text-text-tertiary tracking-wide">· {item.type}</span>
      </div>

      <h3 className="font-display text-xl md:text-2xl mb-1">{item.title}</h3>
      <p className="text-text-secondary text-sm mb-1">{item.company}</p>
      <p className="text-text-tertiary text-xs font-mono mb-5">{item.location}</p>

      <p className="text-text-secondary text-sm leading-relaxed mb-5">{item.description}</p>

      {/* Achievements */}
      <ul className="space-y-2 mb-6">
        {item.achievements.map((a, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
            <span className="block w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
            {a}
          </li>
        ))}
      </ul>

      {/* Tech */}
      <div className="flex flex-wrap gap-2">
        {item.tech.map(t => (
          <span key={t} className="px-3 py-1 text-[11px] font-mono text-text-tertiary border border-border">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();

  return (
    <section id="experience" className="py-24 md:py-32 bg-bg-primary">
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
              Experience
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
            Where I've <span className="italic text-text-secondary">worked</span>
          </h2>
        </div>

        {/* Education Highlight */}
        <EducationBanner />

        {/* Timeline */}
        <div className="mt-16">
          {EXPERIENCES.map((item, i) => (
            <ExperienceCard key={item.period} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationBanner() {
  const { ref, isVisible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-3 gap-6 p-8 md:p-10 bg-bg-secondary border border-border transition-all duration-1000 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div>
        <p className="text-xs font-mono text-accent tracking-wide uppercase mb-2">Education</p>
        <p className="font-display text-lg">BSc Computer Science</p>
        <p className="text-text-secondary text-sm mt-1">6 October University · GPA 3.5/4.0</p>
        <p className="text-text-tertiary text-xs font-mono mt-1">2022 — 2026</p>
      </div>
      <div>
        <p className="text-xs font-mono text-accent tracking-wide uppercase mb-2">Certification</p>
        <p className="font-display text-lg">MEAN Stack</p>
        <p className="text-text-secondary text-sm mt-1">National Telecommunication Institute (NTI)</p>
        <p className="text-text-tertiary text-xs font-mono mt-1">2025</p>
      </div>
      <div>
        <p className="text-xs font-mono text-accent tracking-wide uppercase mb-2">Training</p>
        <p className="font-display text-lg">UI/UX Design</p>
        <p className="text-text-secondary text-sm mt-1">ROUTE</p>
        <p className="text-text-tertiary text-xs font-mono mt-1">2024</p>
      </div>
    </div>
  );
}
