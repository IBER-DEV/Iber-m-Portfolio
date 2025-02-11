import { Github, Linkedin, Mail } from 'lucide-react'
import React, { useState, FormEvent } from 'react'

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: string; error?: string }>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({});

    try {
      const response = await fetch('http://localhost:3000/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: '¡Mensaje enviado correctamente!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus({ error: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div id="contact" className="bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-sm transition-all duration-300 hover:shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-8 animate-fade-in">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="transform transition-all duration-300 hover:-translate-y-1">
              <label htmlFor="name" className="block text-sm font text-white mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300  bg-gray-700  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </div>
            <div className="transform transition-all duration-300 hover:-translate-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300  bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </div>
            <div className="transform transition-all duration-300 hover:-translate-y-1">
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              ></textarea>
            </div>

            {status.success && (
              <div className="p-4 rounded-lg bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200">
                {status.success}
              </div>
            )}

            {status.error && (
              <div className="p-4 rounded-lg bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200">
                {status.error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white">Connect with me</h3>
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <Github className="h-6 w-6" />
              <span>github.com/iber</span>
            </a>
            <a href="https://www.linkedin.com/in/ibermasco" className="flex items-center space-x-3 text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
              <span>ivermasco5@gmail.com</span>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox" className="flex items-center space-x-3 text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              <Mail className="h-6 w-6" />
              <span>laura@example.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}