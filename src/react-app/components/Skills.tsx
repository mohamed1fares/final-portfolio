import { Code2, Database, Server, Smartphone, Cloud, Globe } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-600',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 98 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-600',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'GraphQL', level: 78 },
        { name: 'Microservices', level: 82 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-purple-500 to-violet-600',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'MySQL', level: 90 },
        { name: 'Prisma ORM', level: 82 },
        { name: 'Database Design', level: 85 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 82 },
        { name: 'Linux', level: 85 },
        { name: 'Nginx', level: 78 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS Development', level: 70 },
        { name: 'Android Development', level: 72 },
        { name: 'Mobile UI/UX', level: 88 },
        { name: 'App Store Deployment', level: 80 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Code2,
      color: 'from-teal-500 to-cyan-600',
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Figma', level: 85 },
        { name: 'Postman', level: 90 },
        { name: 'Jest Testing', level: 82 },
        { name: 'Agile/Scrum', level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code2 className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Skills & Expertise</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building exceptional digital experiences.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                          <span className="text-gray-500 text-xs">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Always Learning, Always Growing</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Blockchain', 'AI/ML', 'WebAssembly', 'Web3', 'Rust', 'Go'].map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
