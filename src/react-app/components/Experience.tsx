import { Briefcase, MapPin, Calendar, ExternalLink, TrendingUp } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechFlow Solutions',
      location: 'Cairo, Egypt',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Leading a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Implemented microservices architecture that improved system performance by 40%.',
      achievements: [
        'Led the migration of monolithic application to microservices architecture',
        'Reduced application load time by 60% through performance optimization',
        'Mentored 3 junior developers and established code review processes',
        'Implemented automated testing pipeline resulting in 95% test coverage'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'TypeScript'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd',
      location: 'Cairo, Egypt',
      period: '2022 - 2023',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects including e-commerce platforms and SaaS applications. Collaborated closely with UI/UX designers to create responsive and user-friendly interfaces.',
      achievements: [
        'Built 8+ production-ready web applications from scratch',
        'Integrated payment systems (Stripe, PayPal) for e-commerce platforms',
        'Optimized database queries resulting in 35% faster response times',
        'Implemented real-time chat functionality using WebSocket'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Redis', 'Socket.io', 'Stripe API'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupHub',
      location: 'Cairo, Egypt',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Focused on creating beautiful and intuitive user interfaces for startup clients. Worked in an agile environment with rapid prototyping and iterative development cycles.',
      achievements: [
        'Converted 15+ Figma designs to pixel-perfect React components',
        'Implemented responsive design principles across all projects',
        'Reduced bundle size by 45% through code splitting and optimization',
        'Collaborated with backend team to integrate RESTful APIs'
      ],
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'Git', 'Webpack'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Web Development Intern',
      company: 'CodeCraft Agency',
      location: 'Cairo, Egypt',
      period: '2020 - 2021',
      type: 'Internship',
      description: 'Learned fundamental web development concepts and contributed to client projects. Gained hands-on experience with modern development tools and frameworks.',
      achievements: [
        'Completed 6-month intensive web development program',
        'Contributed to 5+ client websites and web applications',
        'Learned version control and collaborative development practices',
        'Received recognition for exceptional learning progress'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Work Experience</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A journey of continuous growth, learning, and contributing to innovative projects across different industries.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10 shadow-lg"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                    <div className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:border-blue-300">
                      {/* Company and Period */}
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.period}</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Title and Company */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-3 h-3 bg-gradient-to-r ${exp.color} rounded-full`}></div>
                        <p className="text-lg font-semibold text-gray-700">{exp.company}</p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new projects and collaborate with amazing teams. 
                Let's build something incredible together!
              </p>
              <button className="group relative px-6 py-3 bg-white text-blue-600 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
