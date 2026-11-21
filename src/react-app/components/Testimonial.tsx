import { useReveal } from '../hooks/useReveal';

export default function Testimonial() {
  const { ref: sectionRef, isVisible } = useReveal(0.1);

  return (
    <section id="testimonial" className="py-24 md:py-32" style={{ background: '#F8FAFC' }}>
      <div className="container-portfolio">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ease-out-expo ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-label">
            <span>Testimonial</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Trusted by Real Users
          </h2>
          <p className="text-text-secondary text-base mb-12 max-w-2xl leading-relaxed">
            Feedback from professionals who have experienced the software I build.
          </p>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* HTML5 Video Player */}
            <div className="lg:col-span-7 flex justify-center">
              <div
                className="w-full max-w-sm sm:max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900"
              >
                <video
                  controls
                  preload="metadata"
                  playsInline
                  poster="/images/testimonial-poster.jpg"
                  className="w-full h-auto block bg-black"
                  aria-label="Doctor Naira Hany video testimonial"
                >
                  <source src="/images/testimonial.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Context & Card */}
            <div className="lg:col-span-5">
              <div className="testimonial-card">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-indigo-100"
                    style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)' }}
                  >
                    👩‍⚕️
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary text-lg">د. نيرة هاني</h3>
                    <p className="text-sm font-medium text-accent">استشاري غدد صماء وسكر</p>
                    <p className="text-xs text-text-tertiary font-mono mt-0.5">Endocrine Hub Clinic</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-text-secondary leading-relaxed border-t border-border pt-5">
                  <p className="italic text-slate-700">
                    "معانا الدكتورة نيرة هاني، استشاري غدد صماء وسكر، في شهادة وتقييم عملي لنظام Clinic Hub لإدارة العيادات والمراكز الطبية."
                  </p>
                  <p>
                    فيديو توثيقي يوضح تجربة استخدام حقيقية للنظام في العيادة، تنظيم كشوفات ومواعيد المرضى، متابعة الجرعات والروشتات، والتكامل السلس مع فرق العمل والفرع.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://drnairahany.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:text-accent-light transition-colors group"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                      زيارة الموقع الرسمي: drnairahany.com
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-3">
                    Features Highlighted
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Clinic Hub Architecture',
                      'Customized Workflows',
                      'High Reliability',
                      'Continuous Updates',
                    ].map(tag => (
                      <span key={tag} className="feature-pill text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-text-tertiary">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Real testimonial with full permission. Fast-start MP4 streaming.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
