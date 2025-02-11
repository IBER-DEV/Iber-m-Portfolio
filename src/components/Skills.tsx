import { Cloud, Database, Server, Terminal } from 'lucide-react'
import React from 'react'

export default function Skills() {
  return (
    <div id="skills" className="bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-sm transition-all duration-300 hover:shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pixelFloat ${2 + Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes pixelFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 10px) rotate(45deg); }
        }
      `}</style>

      <h2 className="text-3xl font-bold text-blue-400 mb-8 animate-fade-in relative">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation relative">
        <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-800/80 border border-gray-700/50 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_50%,transparent_75%)] bg-[length:4px_4px]" />
          <Server className="h-8 w-8 text-blue-500 mb-4 relative z-10" />
          <h3 className="text-xl font-semibold mb-2 text-white relative z-10">Infrastructure</h3>
          <ul className="space-y-2 text-gray-300 relative z-10">
            <li className="flex items-center space-x-2">
              <Cloud className="h-4 w-4" />
              <span>AWS / GCP / Azure</span>
            </li>
            <li>Kubernetes</li>
            <li>Docker</li>
            <li>Terraform</li>
          </ul>
        </div>

        <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-800/80 border border-gray-700/50 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_50%,transparent_75%)] bg-[length:4px_4px]" />
          <Database className="h-8 w-8 text-blue-500 mb-4 relative z-10" />
          <h3 className="text-xl font-semibold mb-2 text-white relative z-10">Databases</h3>
          <ul className="space-y-2 text-gray-300 relative z-10">
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Elasticsearch</li>
          </ul>
        </div>

        <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-gray-800/80 border border-gray-700/50 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_50%,transparent_75%)] bg-[length:4px_4px]" />
          <Terminal className="h-8 w-8 text-blue-500 mb-4 relative z-10" />
          <h3 className="text-xl font-semibold mb-2 text-white relative z-10">Languages</h3>
          <ul className="space-y-2 text-gray-300 relative z-10">
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