import React from 'react';
import { Brain, Code, Database, Network } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code className="w-6 h-6" />, name: 'Software Development', description: 'Full-stack development with modern technologies' },
    { icon: <Network className="w-6 h-6" />, name: 'Network Architecture', description: 'Designing robust and scalable network solutions' },
    { icon: <Database className="w-6 h-6" />, name: 'System Design', description: 'Creating efficient and maintainable systems' },
    { icon: <Brain className="w-6 h-6" />, name: 'Problem Solving', description: 'Analytical approach to complex challenges' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            About Me
          </h2>
          
          <div className="mb-12 text-gray-300 space-y-4">
            <p className="text-lg leading-relaxed">
              With over a decade of experience in systems engineering, I specialize in designing and implementing cutting-edge solutions that bridge the gap between complex technical challenges and business needs. My approach combines innovative thinking with practical execution to deliver robust, scalable systems.
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