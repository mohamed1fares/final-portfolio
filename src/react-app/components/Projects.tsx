import { FolderOpen, ExternalLink, Github, Star, Eye, GitBranch } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced features including real-time inventory management, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'],
      github: '#',
      demo: '#',
      status: 'Completed',
      stats: {
        stars: 45,
        forks: 12,
        views: 1200
      },
      features: [
        'User authentication & authorization',
        'Shopping cart & wishlist functionality',
        'Payment gateway integration',
        'Order tracking system',
        'Admin dashboard with analytics'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Socket.io', 'Docker'],
      github: '#',
      demo: '#',
      status: 'Completed',
      stats: {
        stars: 32,
        forks: 8,
        views: 890
      },
      features: [
        'Real-time collaboration',
        'Kanban board interface',
        'Time tracking & reporting',
        'Team management',
        'File sharing capabilities'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful and responsive weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Redux', 'OpenWeather API', 'Maps API', 'Push Notifications'],
      github: '#',
      demo: '#',
      status: 'Completed',
      stats: {
        stars: 28,
        forks: 6,
        views: 650
      },
      features: [
        '7-day weather forecast',
        'Location-based services',
        'Interactive weather maps',
        'Push notifications for alerts',
        'Offline capability'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management platform with analytics, scheduling, and multi-platform integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Chart.js', 'Social APIs', 'Vercel'],
      github: '#',
      demo: '#',
      status: 'In Development',
      stats: {
        stars: 18,
        forks: 4,
        views: 420
      },
      features: [
        'Multi-platform integration',
        'Content scheduling',
        'Analytics & insights',
        'Team collaboration',
        'Automated reporting'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform with course management, progress tracking, and interactive learning tools.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MySQL', 'AWS S3', 'Video.js', 'JWT'],
      github: '#',
      demo: '#',
      status: 'Completed',
      stats: {
        stars: 52,
        forks: 15,
        views: 1500
      },
      features: [
        'Course creation & management',
        'Video streaming',
        'Progress tracking',
        'Quiz & assessment system',
        'Certificate generation'
      ],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'A real-time cryptocurrency tracking application with portfolio management and price alerts.',
      image: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Vuex', 'CoinGecko API', 'Chart.js', 'PWA', 'Firebase'],
      github: '#',
      demo: '#',
      status: 'Completed',
      stats: {
        stars: 38,
        forks: 9,
        views: 980
      },
      features: [
        'Real-time price tracking',
        'Portfolio management',
        'Price alerts & notifications',
        'Historical data charts',
        'News integration'
      ],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FolderOpen className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Featured Projects</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in full-stack development, 
              modern frameworks, and innovative problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-orange-100 text-orange-700 border border-orange-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Links - Show on Hover */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} className="w-8 h-8 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors duration-200">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.demo} className="w-8 h-8 bg-blue-600/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600/90 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitBranch className="w-4 h-4 text-green-500" />
                        <span>{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-blue-500" />
                        <span>{project.stats.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.demo}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.github}
                      className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/mohamedfares" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
