import { User, Heart, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <User className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and stats */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 max-w-md mx-auto">
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white">
                    MF
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mohamed Fares</h3>
                  <p className="text-blue-600 font-semibold mb-4">Fullstack Developer</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">3+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">50+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Passion</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Hello! I'm Mohamed, a passionate fullstack developer
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I specialize in creating exceptional digital experiences through modern web technologies. 
                  With a strong foundation in both frontend and backend development, I bring ideas to life 
                  with clean, efficient, and scalable code.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm constantly learning and evolving with the latest technologies, always striving to 
                  deliver solutions that not only meet requirements but exceed expectations.
                </p>
              </div>
              
              {/* Values */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Passion Driven</h4>
                    <p className="text-gray-600 text-sm">Every project is approached with genuine enthusiasm and dedication.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Goal Oriented</h4>
                    <p className="text-gray-600 text-sm">Focused on delivering results that align with business objectives.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                    <p className="text-gray-600 text-sm">Always exploring new technologies and creative solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Collaboration</h4>
                    <p className="text-gray-600 text-sm">Strong communicator and team player who values feedback.</p>
                  </div>
                </div>
              </div>
              
              {/* Download CV Button */}
              <div>
                <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                  <span className="relative z-10">Download CV</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
