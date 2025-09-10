import { Heart, Code2, Coffee, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  MF
                </div>
                <span className="text-xl font-bold">Mohamed Fares</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
                Passionate fullstack developer dedicated to creating exceptional digital experiences 
                through clean code and innovative solutions.
              </p>
              <div className="flex items-center gap-2 text-gray-300">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-orange-500" />
                <span>by Mohamed Fares</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Tech Stack</h3>
              <ul className="space-y-2">
                {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'].map((tech) => (
                  <li key={tech} className="text-gray-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span>© {currentYear} Mohamed Fares. All rights reserved.</span>
                <div className="flex items-center gap-1">
                  <Code2 className="w-4 h-4" />
                  <span>Coded with passion</span>
                </div>
              </div>
              
              {/* Scroll to Top Button */}
              <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
        </div>
      </div>
    </footer>
  );
}
