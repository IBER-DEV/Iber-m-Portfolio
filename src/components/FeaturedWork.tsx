import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const FeaturedWork = () => {
  const projects = [
    {
      title: 'Calculadora de Consumo Eléctrico',
      description: 'Desarrollé una aplicación para calcular gastos teóricos basados en el consumo eléctrico de electrodomésticos.',
      image: '/img/project1.png',
      tech: [
        { name: 'Next.js', dark: true },
        { name: 'Tailwind CSS', dark: false }
      ]
    },
    {
      title: 'Plataforma de Migración a la Nube',
      description: 'Desarrollé una plataforma automatizada de migración a la nube, reduciendo el tiempo de despliegue en un 60% y mejorando la utilización de recursos.',
      image: '/img/project2.png',
      tech: [
        { name: 'Next.js', dark: true },
        { name: 'Tailwind CSS', dark: false }
      ]
    },
    {
      title: 'Panel de Monitoreo IoT',
      description: 'Creé un sistema de monitoreo en tiempo real para dispositivos IoT con analíticas avanzadas y capacidades de mantenimiento predictivo.',
      image: '/img/project3.png',
      tech: [
        { name: 'Next.js', dark: true },
        { name: 'Tailwind CSS', dark: false }
      ]
    },
  ];

  return (
    <section id='work' className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="flex items-center gap-2 text-2xl font-bold mb-12">
            <code className="text-gray-400">&lt;/&gt;</code> Proyectos
          </h2>

          <div className="flex flex-col gap-16">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8">
                {/* Imagen del proyecto - mismo tamaño para todas */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-lg overflow-hidden border border-gray-800 bg-gray-900 aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Información del proyecto - mismo tamaño para todas */}
                <div className="w-full md:w-1/2 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  
                  {/* Tecnologías usadas */}
                  <div className="flex gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-md text-sm ${
                          tech.dark 
                            ? 'bg-gray-800 text-white' 
                            : 'bg-blue-600 text-white'
                        }`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>
                  
                  {/* Botones de acción */}
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href="#" 
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Preview
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