
import React, { useState, useEffect } from 'react';
import { Settings, Code2, MonitorDot, Github, Linkedin, Mail, Server, Database, Cloud, Terminal, Heart, ArrowRight, Sun, Moon, Menu, X, Contact } from 'lucide-react';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';



/**
 * Componente principal de la aplicación.
 * 
 * Este componente maneja el estado del menú móvil y el modo oscuro, y renderiza la estructura principal de la aplicación,
 * incluyendo la barra de navegación, las secciones de contenido y el pie de página.
 * 
 * @component
 * 
 * @returns {JSX.Element} El componente App.
 * 
 * @example
 * // Uso del componente App
 * <App />
 * 
 * @remarks
 * - Utiliza `useState` para manejar el estado del menú móvil y el modo oscuro.
 * - Utiliza `useEffect` para aplicar el modo oscuro al documento y guardar la preferencia en `localStorage`.
 * - Renderiza una barra de navegación con enlaces y botones para alternar el modo oscuro y el menú móvil.
 * - Renderiza varias secciones de contenido, incluyendo "Home", "About", "Work", "Skills" y "Contact".
 * 
 * @function
 * @name App
 */
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Sobre Mí' },
    { href: '#work', label: 'Proyectos' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <div className={`min-h-screen flex flex-col`}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop-blur-sm z-50 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-gray-700 dark:text-gray-300" />
              <span className="ml-2 font-semibold text-xl text-gray-700 dark:text-gray-300"></span>
              <span className="ml-2 font-semibold text-xl text-blue-400 hover:text-blue-300 text-shadow-[0_0_20px_rgb(0,255,255)]">Ing Iber Masco</span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden sm:flex space-x-8">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-blue-400 hover:text-blue-300 text-shadow-[0_0_20px_rgb(0,255,255)]">
                    {link.label}</a>
                ))}
              </div>
              <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white sm:hidden">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="sm:hidden flex flex-col bg-white dark:bg-gray-900 shadow-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-blue-400 hover:text-blue-300 text-shadow-[0_0_20px_rgb(0,255,255)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className=" min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Hero Section */}
        < Hero />
        {/* About Section */}

        {/* Sección de Habilidades */}
        < Skills />


        < About />
        {/* Tarjetas de proyectos */}

        <FeaturedWork />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-24 pb-16">






          {/* Sección de Contacto */}

          <ContactSection />

        </div>
      </main >
      {/* Footer */}

      <Footer />

    </div >
  );
}

export default App;