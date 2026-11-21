import { useState, type FormEvent } from 'react';
import { useReveal } from '../hooks/useReveal';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { ref: sectionRef, isVisible } = useReveal(0.1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields before submitting.');
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      let sent = false;

      // 1. First attempt: call local /api/contact (Hono + Cloudflare Worker backend)
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          }),
        });

        if (res.ok) {
          sent = true;
        } else {
          const errData = await res.json().catch(() => ({}));
          if (res.status === 400 && errData.error) {
            throw new Error(errData.error);
          }
        }
      } catch (backendErr) {
        if (backendErr instanceof Error && !backendErr.message.includes('fetch') && !backendErr.message.includes('Failed')) {
          throw backendErr;
        }
      }

      // 2. Direct fallback via FormSubmit directly to mohamed.fares.developer@gmail.com
      if (!sent) {
        const directRes = await fetch('https://formsubmit.co/ajax/mohamed.fares.developer@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            _replyto: formData.email.trim(),
            _subject: `[Portfolio Contact] ${formData.subject.trim()} - from ${formData.name.trim()}`,
            message: formData.message.trim(),
          }),
        });

        if (!directRes.ok) {
          throw new Error('Could not deliver message right now. Please email directly.');
        }
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 7000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong while sending.');
    }
  };

  const contactLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Email',
      value: 'mohamed.fares.developer@gmail.com',
      href: 'mailto:mohamed.fares.developer@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: 'Phone',
      value: '+20 115 665 4953',
      href: 'tel:+201156654953',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/mohamed1fares',
      href: 'https://github.com/mohamed1fares',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/mohamed-fares-ismail',
      href: 'https://www.linkedin.com/in/mohamed-fares-ismail',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Giza, Egypt',
      href: null,
    },
  ];

  const inputClasses =
    'w-full bg-[#FFFFFF] border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all duration-200';

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: '#FFFFFF' }}>
      <div className="container-portfolio">
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ease-out-expo ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-label">
            <span>Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
            Let's work together
          </h2>
          <p className="text-text-secondary text-base max-w-lg mb-14">
            Have a project in mind, an opportunity, or a question? Send me a message directly through the form below or reach out via email.
          </p>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 card p-8 sm:p-10 border border-border">
              <h3 className="text-lg font-bold text-text-primary mb-2">Send a Message</h3>
              <p className="text-xs text-text-secondary mb-6">Messages are delivered directly to my inbox.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-text-secondary uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. John Doe"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-text-secondary uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="john@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-medium text-text-secondary uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-text-secondary uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Describe your project, timeline, or requirements..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-sm text-emerald-800 flex items-start gap-3">
                    <span className="text-base font-bold text-emerald-600">✓</span>
                    <div>
                      <p className="font-semibold">Message delivered successfully!</p>
                      <p className="text-xs text-emerald-700 mt-0.5">Thank you for reaching out. I will respond to your email as soon as possible.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800 flex items-start gap-3">
                    <span className="text-base font-bold text-red-600">✕</span>
                    <div>
                      <p className="font-semibold">Failed to send message</p>
                      <p className="text-xs text-red-700 mt-0.5">{errorMsg || 'Please try again or email directly.'}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Direct Contact Links */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-lg font-bold text-text-primary mb-2">Direct Contact</h3>
              <p className="text-xs text-text-secondary mb-4">Feel free to connect or reach out directly.</p>

              {contactLinks.map(link => (
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300 card"
                    style={{ background: '#F8FAFC' }}
                  >
                    <span
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-text-secondary group-hover:text-accent group-hover:bg-accent-subtle transition-all duration-300"
                      style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}
                    >
                      {link.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider mb-0.5">{link.label}</p>
                      <p className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors duration-300 truncate">{link.value}</p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={link.label}
                    className="flex items-center gap-4 p-4 rounded-xl card"
                    style={{ background: '#F8FAFC' }}
                  >
                    <span
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-text-secondary"
                      style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}
                    >
                      {link.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider mb-0.5">{link.label}</p>
                      <p className="text-sm font-semibold text-text-primary truncate">{link.value}</p>
                    </div>
                  </div>
                )
              ))}

              <div className="pt-6">
                <a
                  href="/Mohamed_Fares_CV.pdf"
                  download
                  className="btn-secondary w-full justify-center"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
