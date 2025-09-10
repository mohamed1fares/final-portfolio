import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Globe, MessageSquare, Clock, Coffee } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohamed.fares@email.com',
      href: 'mailto:mohamed.fares@email.com',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 123 456 7890',
      href: 'tel:+201234567890',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      href: '#',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/mohamedfares',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mohamedfares',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/mohamedfares',
      color: 'hover:text-blue-400'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      href: '#',
      color: 'hover:text-purple-600'
    }
  ];

  const quickFacts = [
    {
      icon: Coffee,
      text: 'Fueled by coffee and curiosity'
    },
    {
      icon: Clock,
      text: 'Available for freelance projects'
    },
    {
      icon: MessageSquare,
      text: 'Usually responds within 24 hours'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/20 to-slate-900/20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-blue-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-blue-400" />
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-300 text-sm">{info.label}</p>
                          <p className="text-white font-semibold">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="group flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                      >
                        <IconComponent className={`w-6 h-6 text-gray-300 group-hover:scale-110 transition-all duration-300 ${social.color}`} />
                        <span className="text-white font-medium">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  {quickFacts.map((fact, index) => {
                    const IconComponent = fact.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">{fact.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Great</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'm here to help bring your ideas to life. Let's start the conversation!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:mohamed.fares@email.com"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                    Start a Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-300 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
