import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      type: 'university',
      institution: 'Cairo University',
      degree: 'Bachelor of Computer Science',
      period: '2018 - 2022',
      gpa: '3.8/4.0',
      description: 'Specialized in Software Engineering with focus on web development and database systems.',
      icon: GraduationCap,
      color: 'from-blue-500 to-purple-600'
    },
    {
      type: 'certification',
      institution: 'AWS',
      degree: 'AWS Certified Solutions Architect',
      period: '2023',
      description: 'Certified in designing and deploying scalable systems on Amazon Web Services.',
      icon: Award,
      color: 'from-orange-500 to-red-600'
    },
    {
      type: 'course',
      institution: 'Meta',
      degree: 'Advanced React Developer',
      period: '2022',
      description: 'Comprehensive course covering React ecosystem, hooks, testing, and performance optimization.',
      icon: BookOpen,
      color: 'from-green-500 to-teal-600'
    }
  ];

  const courses = [
    'Full Stack Web Development Bootcamp',
    'Node.js and Express.js Masterclass',
    'Database Design and SQL Optimization',
    'DevOps and CI/CD Pipeline Management',
    'UI/UX Design Fundamentals',
    'Mobile App Development with React Native'
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Continuous learning and professional development through formal education and industry certifications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Formal Education & Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Formal Education & Certifications
              </h3>
              
              {education.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {item.degree}
                          </h4>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </div>
                        </div>
                        
                        <p className="text-blue-600 font-semibold mb-2">{item.institution}</p>
                        {item.gpa && (
                          <p className="text-sm text-green-600 font-medium mb-3">GPA: {item.gpa}</p>
                        )}
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column - Additional Courses */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-600" />
                Additional Courses
              </h3>
              
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="group flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-purple-300 hover:shadow-md transition-all duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover:text-purple-700 font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Highlight */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Key Learning Achievements
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Certifications</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border border-blue-100">
                    <div className="text-2xl font-bold text-purple-600">500+</div>
                    <div className="text-sm text-gray-600">Study Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
