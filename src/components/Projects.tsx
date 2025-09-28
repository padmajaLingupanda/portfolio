import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SMART WALKING STICK FOR VISUALLY IMPAIRED PEOPLE',
      description: 'The System tested for Accuracy and Checked by the visually impaired person it detects obstacles within the distance of about 2 meters for the user. TOOLS-C, Arduino UNO, Ultrasonic Sensor..',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['C', 'Arduino UNO', 'Ultrasonic Sensor'],
      liveUrl:'https://example.com',
      githubUrl: 'https://github.com/padmajaLingupanda',
      featured: true,
    },
    {
      title: 'FAKE NEWS DETECTION',
      description:'Developed a Machine Learning model using Python & NLP to classify fake vs real news articles with 92% accuracy. TOOLS-HTML, CSS, and JavaScript.',
      image:'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',

      tags: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/padmajaLingupanda',
      featured: true,
    },
    {
      title: 'PORTFOLIO WEBSITE',
      description: 'Developed a responsive portfolio website using HTML, CSS, and JavaScript to showcase personal projects and technical skills..',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Chart.js', 'Weather API', 'Geolocation'],
      liveUrl:'https://example.com',
      githubUrl: 'https://github.com/padmajaLingupanda',
      featured: true,
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 right-3 flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/50 text-gray-400 rounded-full text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/padmajaLingupanda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;