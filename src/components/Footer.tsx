import { Code2, ArrowRight, Github, Linkedin, Mail, Heart } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    < footer className=" bg-gradient-to-b from-black to-gray-900 transition-colors duration-300" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Code2 className="h-6 w-6" />
                <span className="ml-2 font-semibold dark:text-white">Iber'm Portfolio</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-white">
                Building scalable systems and elegant solutions.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 bg-blue-500 dark:text-white rounded-lg hover:bg-blue-600 transition-colors text-sm group"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-3 dark:text-white">Quick Links</h3>
              <ul className="dark:text-white space-y-2 text-sm text-gray-600">
                <li><a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 ">Home</a></li>
                <li><a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#work" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Work</a></li>
                <li><a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Skills</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 dark:text-white">Connect</h3>
              <ul className="dark:text-white space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className=" flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="#" className=" flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#" className=" flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 dark:text-white">Location</h3>
              <p className="dark:text-white text-sm text-gray-600">
                Barranquilla <br />
                Atlantico, Colombia
              </p>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col dark:text-white sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
           
            <div className="dark:text-white flex items-center text-sm text-gray-600">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>using React & Tailwind</span>
            </div>
          </div>
        </div>
      </footer >
  )
}
