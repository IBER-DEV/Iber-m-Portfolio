import { Github, Linkedin, Mail} from 'lucide-react'
import React from 'react'

export default function ContactSection() {
  return (
    <div id="contact" className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-sm transition-all duration-300 hover:shadow-lg">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">Get in Touch</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation">
      <div>
        <form className="space-y-4">
          <div className="transform transition-all duration-300 hover:-translate-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            />
          </div>
          <div className="transform transition-all duration-300 hover:-translate-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            />
          </div>
          <div className="transform transition-all duration-300 hover:-translate-y-1">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            ></textarea>
          </div>
          <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Send Message
          </button>
        </form>
      </div>
      <div className="space-y-6">
        <h3 className="text-xl font-semibold dark:text-white">Connect with me</h3>
        <div className="space-y-4">
          <a href="#" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
            <Github className="h-6 w-6" />
            <span>github.com/iber</span>
          </a>
          <a href="https://www.linkedin.com/in/ibermasco" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
            <Linkedin className="h-6 w-6" />
            <span>ivermasco5@gmail.com</span>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
            <Mail className="h-6 w-6" />
            <span>laura@example.com</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
