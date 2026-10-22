import { useReveal } from '../hooks/useReveal';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: 'Clothes E-Commerce',
    subtitle: 'Full-Stack Platform',
    description:
      'A complete e-commerce solution built with Angular and Node.js featuring product browsing, cart management, user authentication, and responsive design across all devices.',
    tech: ['Angular', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    image: '/images/project-ecommerce.png',
    github: 'https://github.com/mohamed1fares/frontend-myapp',
    demo: 'https://mohamed1fares.github.io/frontend-myapp/home',
    featured: true,
  },
  {
    title: 'Smart E-Commerce',
    subtitle: 'Frontend Platform',
    description:
      'A headphones and electronics e-commerce platform with advanced product filtering, shopping cart with persistent state, and a clean storefront interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: '/images/project-platform.png',
    github: 'https://github.com/mohamed1fares/smart-e-commerce-platform-',
    demo: 'https://mohamed1fares.github.io/smart-e-commerce-platform-/',
  },
  {
    title: 'Developer Portfolio',
    subtitle: 'Personal Site',
    description:
      'An earlier portfolio website showcasing skills and projects, built with vanilla technologies and focused on clean layout and dark-themed visual design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/project-portfolio.png',
    github: 'https://github.com/mohamed1fares/portfolio-2',
    demo: 'https://mohamed1fares.github.io/portfolio-2/',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useReveal(0.1);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-0 lg:gap-0 transition-all duration-1000 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${project.featured ? '' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden group ${isEven ? '' : 'lg:order-2'}`}>
        <div className="aspect-[16/10] lg:aspect-auto lg:h-full">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-bg-tertiary ${isEven ? '' : 'lg:order-1'}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-6 h-px bg-accent" />
          <span className="text-accent text-[11px] font-mono font-medium tracking-widest uppercase">
            {project.subtitle}
          </span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl mb-4">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-3 py-1 text-[11px] font-mono font-medium tracking-wide text-text-secondary border border-border"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors duration-300"
          >
            Live Demo
            <svg className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();

  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-primary">
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
              Selected Work
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
            Projects I've <span className="italic text-text-secondary">built</span>
          </h2>
        </div>

        {/* Project List */}
        <div className="space-y-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/mohamed1fares?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border text-text-secondary text-sm font-medium tracking-wide uppercase hover:border-accent hover:text-accent transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
