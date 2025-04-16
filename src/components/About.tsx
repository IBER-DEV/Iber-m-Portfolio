import React from 'react';
import { Brain, Code, Database, Network } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code className="w-6 h-6" />, name: 'Desarrollo de Software', description: 'Desarrollo full-stack utilizando las tecnologías más modernas.' },
    { icon: <Network className="w-6 h-6" />, name: 'Arquitectura de Redes', description: 'Diseño de soluciones de red robustas y escalables.' },
    { icon: <Database className="w-6 h-6" />, name: 'Diseño de Sistemas', description: 'Creación de sistemas eficientes y fáciles de mantener.' },
    { icon: <Brain className="w-6 h-6" />, name: 'Resolución de Problemas', description: 'Enfoque analítico para desafíos complejos.' },
  ];

  return (
    <section id='about' className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Sobre Mí
          </h2>
          
          <div className="mb-12 text-gray-300 space-y-4">
            <p className="text-lg leading-relaxed">
              Con más de 1 año de experiencia en ingeniería de sistemas, me especializo en diseñar e implementar soluciones innovadoras que conectan desafíos técnicos complejos con las necesidades del negocio. Mi enfoque combina pensamiento innovador con ejecución práctica para ofrecer sistemas robustos y escalables.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
                    <p className="text-gray-400">{skill.description}</p>
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

export default About;