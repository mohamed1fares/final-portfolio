import TypingText from './TypingText';
import { Code2, Coffee, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/20 to-slate-900/20"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in">
            Hello, I'm
          </p>
          
          {/* Name with typing animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            <TypingText 
              text="Mohamed Fares" 
              speed={120}
              delay={500}
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            />
          </h1>
          
          {/* Title */}
          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-8 animate-fade-in-up delay-2000">
            <span className="text-blue-400">&lt;</span>
            <span className="font-semibold">Fullstack Developer</span>
            <span className="text-blue-400">/&gt;</span>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-3000">
            Passionate about creating exceptional digital experiences through clean code, 
            innovative solutions, and cutting-edge technologies.
          </p>
          
          {/* Skills badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-4000">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2">
              <Code2 className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Frontend</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-teal-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Backend</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-2">
              <Coffee className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-medium">DevOps</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-5000">
            <a 
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border-2 border-gray-300 text-gray-300 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
