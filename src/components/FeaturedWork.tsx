import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const FeaturedWork = () => {
  const projects = [
    {
      title: 'Electric Consumption Calculator',
      description: 'Developed an application to calculate theoretical expenses based on the electrical consumption of household appliances.',
      image: './public/img/project1.png',
      tags: ['React', 'JavaScript', 'Tyscript'],
    },
    {
      title: 'Cloud Migration Platform',
      description: 'Developed an automated cloud migration platform reducing deployment time by 60% and improving resource utilization.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
      tags: ['Cloud Computing', 'Automation', 'DevOps'],
    },
    {
      title: 'IoT Monitoring Dashboard',
      description: 'Created a real-time monitoring system for IoT devices with advanced analytics and predictive maintenance capabilities.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=2000',
      tags: ['IoT', 'Analytics', 'Real-time Data'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Featured Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                      Code
                    </button>
                    <a href="https://calculadora-de-consumo-electrico.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;