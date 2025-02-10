import React from 'react';
import { BrainCircuit as Circuit, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)] opacity-20"></div>
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <Circuit className="w-16 h-16 text-blue-400 animate-pulse" />
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient">
            Hi, I'm Iber Masco
            </span>
          </h1>

          {/* Animated typing text effect */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl typing-text">
            Architecting tomorrow's solutions with innovative engineering and cutting-edge technology.
          </p>

          {/* CTA Button */}
          <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden">
            <span className="relative flex items-center gap-2">
              Get in Touch
              <Mail className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;