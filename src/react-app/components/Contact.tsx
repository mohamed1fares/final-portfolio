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
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
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
      setErrorMsg('Please fill in all fields before sending.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      let sent = false;

      // 1. Try internal /api/contact (Cloudflare Worker + D1 Database)
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
        } else if (res.status === 400) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || 'Please check the entered fields.');
        }
      } catch (primaryErr) {
        // If it's a validation error, don't fallback, just show it
        if (primaryErr instanceof Error && primaryErr.message && !primaryErr.message.includes('fetch') && !primaryErr.message.includes('404')) {
          throw primaryErr;
        }
      }

      // 2. Resilient Fallback: Direct FormSubmit (works on GitHub Pages, Vercel, Netlify)
      if (!sent) {
        const fallbackRes = await fetch('https://formsubmit.co/ajax/mf7059708@gmail.com', {
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

        if (!fallbackRes.ok) {
          throw new Error('Unable to send message. Please reach out directly via email.');
        }
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const inputClasses =
    'w-full bg-transparent border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none transition-colors duration-300';

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-secondary">
      <div className="container-portfolio">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 md:mb-20 transition-all duration-1000 ease-out-expo ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-accent" />
            <span className="text-accent text-[13px] font-mono font-medium tracking-widest uppercase">
              Contact
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Let's work <span className="italic text-text-secondary">together</span>
          </h2>
          <p className="text-text-secondary text-base max-w-lg">
            Have a project in mind or want to collaborate? Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-text-tertiary tracking-wide uppercase mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-text-tertiary tracking-wide uppercase mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-text-tertiary tracking-wide uppercase mb-2">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  placeholder="What's this about?"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-text-tertiary tracking-wide uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell me about your project or idea..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white text-sm font-medium tracking-wide uppercase hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === 'sending' ? (
                  <>
                    Sending
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="p-4 bg-accent/10 border border-accent/30 text-sm text-accent flex items-start gap-3 animate-fade-in">
                  <span className="text-base font-bold">✓</span>
                  <div>
                    <p className="font-medium text-text-primary">Message sent successfully!</p>
                    <p className="text-xs text-text-secondary mt-0.5">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 text-sm text-red-400 flex flex-col gap-2 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <span>✕</span>
                    <p>{errorMsg || 'Failed to send message. Please try again or email directly.'}</p>
                  </div>
                  <a
                    href={`mailto:mohamed.fares.engineer@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message || '')}`}
                    className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline mt-1"
                  >
                    Click here to send directly via email app →
                  </a>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-xs font-mono text-text-tertiary tracking-widest uppercase mb-4">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:mohamed.fares.engineer@gmail.com"
                  className="group flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 border border-border group-hover:border-accent transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span className="text-sm">mohamed.fares.engineer@gmail.com</span>
                </a>
                <a
                  href="tel:+201029120929"
                  className="group flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 border border-border group-hover:border-accent transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <span className="text-sm">+20 102 912 0929</span>
                </a>
                <div className="flex items-center gap-4 text-text-secondary">
                  <span className="flex items-center justify-center w-10 h-10 border border-border">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                    </svg>
                  </span>
                  <span className="text-sm">Giza, Egypt</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono text-text-tertiary tracking-widest uppercase mb-4">
                Social
              </h3>
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/mohamed1fares', label: 'GitHub', icon: <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /> },
                  { href: 'https://www.linkedin.com/in/mohamed-fares-ismail', label: 'LinkedIn', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center w-10 h-10 border border-border text-text-tertiary hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-text-tertiary text-xs font-mono">
                Usually responds within 24 hours.<br />
                Available for freelance projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
