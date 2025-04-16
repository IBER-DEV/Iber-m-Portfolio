import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-sm">
            Creando sistemas escalables y soluciones elegantes.
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/Iber-masco"
            className="hover:text-accent transition-colors duration-300"
            target="_blank"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/iber-masco/"
            className="hover:text-accent transition-colors duration-300"
            target="_blank"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:ibermasco@gmail.com"
            className="hover:text-accent transition-colors duration-300"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">© 2024 Iber Masco</p>
          </div>
      </div>
    </footer>
  );
}
