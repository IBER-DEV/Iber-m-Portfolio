import { Cloud, Database, Server, Terminal } from 'lucide-react'
import React from 'react'





export default function Skills() {

  return (
    <div id="skills" className="bg-gray-900  rounded-3xl p-8 sm:p-12 shadow-sm transition-all duration-300 hover:shadow-lg">
               <h2 className="text-3xl font-bold text-blue-400 mb-8 animate-fade-in">Skills & Expertise</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
                 {/* Skill Cards */}

                 <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                   <Server className="h-8 w-8 text-blue-500 mb-4" />
                   <h3 className="text-xl font-semibold mb-2  ">Infrastructure</h3>
                   <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                     <li className="flex items-center space-x-2">
                       <Cloud className="h-4 w-4" />
                       <span>AWS / GCP / Azure</span>
                     </li>
                     <li>Kubernetes</li>
                     <li>Docker</li>
                     <li>Terraform</li>
                   </ul>
                 </div>
   
                 <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                   <Database className="h-8 w-8 text-blue-500 mb-4" />
                   <h3 className="text-xl font-semibold mb-2 dark:text-white">Databases</h3>
                   <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                     <li>PostgreSQL</li>
                     <li>MongoDB</li>
                     <li>Redis</li>
                     <li>Elasticsearch</li>
                   </ul>
                 </div>
   
                 <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                   <Terminal className="h-8 w-8 text-blue-500 mb-4" />
                   <h3 className="text-xl font-semibold mb-2 dark:text-white">Languages</h3>
                   <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                     <li>Python</li>
                     <li>Go</li>
                     <li>JavaScript/TypeScript</li>
                     <li>Java</li>
                   </ul>
                 </div>
               </div>
             </div>
   
  )

  
}

