import { Cloud, Database, Server, Terminal } from 'lucide-react';
import React from 'react';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const skillsData = {
  Infrastructure: [
    { name: 'AWS / GCP / Azure', icon: Cloud, description: 'Cloud platforms for scalable infrastructure' },
    { name: 'Kubernetes', description: 'Container orchestration for microservices' },
    { name: 'Docker', description: 'Containerization for consistent deployments' },
    { name: 'Terraform', description: 'Infrastructure as code for automation' },
  ],
  Databases: [
    { name: 'PostgreSQL', description: 'Relational database for robust data storage' },
    { name: 'MongoDB', description: 'NoSQL database for flexible schemas' },
    { name: 'Redis', description: 'In-memory store for caching' },
    { name: 'Elasticsearch', description: 'Search and analytics engine' },
  ],
  Languages: [
    { name: 'Python', description: 'Versatile language for automation and backend' },
    { name: 'Go', description: 'Efficient language for concurrent systems' },
    { name: 'Java', description: 'Robust language for enterprise applications' },
  ],
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full px-4 py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center text-blue-400 mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
         Habilidades
        </motion.h2>

        <Tab.Group>
          <Tab.List className="flex justify-center flex-wrap gap-4 mb-12">
            {Object.keys(skillsData).map((category) => (
              <Tab key={category} as={React.Fragment}>
                {({ selected }) => (
                  <motion.button
                    className={classNames(
                      'py-2 px-6 rounded-xl font-semibold text-sm transition-all duration-300',
                      selected
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    )}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {Object.entries(skillsData).map(([category, skills], index) => (
              <Tab.Panel key={category}>
                <motion.div
                  className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="p-6 rounded-2xl bg-gray-800 border border-gray-700/50 hover:border-blue-500 transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        {skill.icon && <skill.icon className="h-5 w-5 text-blue-400" />}
                        <h3 className="text-gray-200 font-semibold text-lg">{skill.name}</h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
