import { useReveal } from '../hooks/useReveal';

export default function About() {
  const { ref: sectionRef, isVisible } = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-bg-secondary">
      <div className="container-portfolio" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ease-out-expo ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/huawei.jpg"
                alt="Mohamed Fares at the Huawei ICT Competition"
                className="img-editorial"
                loading="lazy"
              />
              {/* Photo caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="text-xs font-mono text-text-secondary tracking-wide">
                  Huawei ICT Competition — 2026
                </p>
              </div>
            </div>
            {/* Accent frame detail */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-accent hidden lg:block" />
          </div>

          {/* Text Column */}
          <div
            className={`transition-all duration-1000 ease-out-expo delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-accent" />
              <span className="text-accent text-[13px] font-mono font-medium tracking-widest uppercase">
                About
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              Engineer, not just <span className="italic text-text-secondary">developer</span>
            </h2>

            <div className="space-y-5 text-text-secondary text-base leading-relaxed">
              <p>
                I'm Mohamed Fares, a Full-Stack Engineer based in Giza, Egypt. I specialize in
                Angular, Node.js, Express, and MongoDB — the MEAN stack — crafting scalable
                solutions with clean and maintainable code.
              </p>
              <p>
                I'm a Computer Science student at 6 October University (GPA 3.5/4.0, graduating 2026),
                and I've trained at the National Telecommunication Institute (NTI) in MEAN Stack
                development. I approach software with an engineering mindset: thinking about
                architecture, maintainability, and real user impact.
              </p>
              <p>
                When I'm not coding, I'm competing — I represented at the Huawei ICT Competition,
                and I'm always exploring new technologies to stay sharp and push my boundaries.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <div className="text-3xl font-display text-accent">2+</div>
                <div className="text-sm text-text-tertiary mt-1">Years Building</div>
              </div>
              <div>
                <div className="text-3xl font-display text-accent">25+</div>
                <div className="text-sm text-text-tertiary mt-1">Projects Shipped</div>
              </div>
              <div>
                <div className="text-3xl font-display text-accent">NTI</div>
                <div className="text-sm text-text-tertiary mt-1">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
