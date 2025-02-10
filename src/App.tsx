
import React, { useState, useEffect } from 'react';
import { Settings, Code2, MonitorDot, Github, Linkedin, Mail, Server, Database, Cloud, Globe, Lock, Terminal, Heart, ArrowRight, Sun, Moon, Menu, X } from 'lucide-react';



function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-gray-700 dark:text-gray-300" />
              <span className="ml-2 font-semibold text-xl text-gray-700 dark:text-gray-300">Ing Iber Masco</span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden sm:flex space-x-8">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>
              <button onClick={toggleDarkMode} className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
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
                className="px-4 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-24 pb-16">
          {/* Hero Section */}
         <div
            id="home"
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-3xl shadow-sm 
            transition-all duration-300 hover:shadow-lg animate-fade-in items-start justify-end px-4 pb-10 sm:px-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.leonardo.ai/users/a7d6d6b5-649e-4971-8460-3dd25d863632/generations/6893f9f4-6da6-45ac-99c9-b1477528aba4/segments/1:4:1/Flux_Dev_Create_a_vibrant_background_image_depicting_the_dynam_0.jpeg")`,
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight">
                Hi, I'm Iber Masco</h1>
              <p className="text-white text-sm font-normal leading-normal sm:text-base sm:font-normal sm:leading-normal">
              I’m a Systems Engineer student at Universidad Simón Bolívar with over a year of experience in full-stack software development. 
              I specialize in Python, Java, React, Angular, and SQL databases. 
                </p>
            </div> 
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold leading-normal sm:text-base sm:font-bold transition-colors">
              Get in Touch
            </button>
          </div>


          {/* About Section */}
          <div id="about" className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-sm transition-all duration-300 hover:shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/public/img/perfil img.jpg"
                  alt="Profile"
                  className="w-full h-64 object-cover rounded-2xl transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  With over 2 years of experience in systems engineering, I've developed a deep understanding
                  of cloud infrastructure, DevOps practices, and distributed systems.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                My journey began as a Systems Engineering student at Universidad Simón Bolívar, where I built a strong foundation in programming. Since then, 
                I’ve developed custom solutions for businesses, explored cloud infrastructure, and honed my skills in distributed systems and DevOps. 
                I am driven by a passion for creating impactful solutions and thriving in innovative environments.
                </p>
                <div className="pt-4">
                  <h3 className="font-semibold text-lg mb-2 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-300">Systems Engineer - Simon Bolivar University</p>
                  <p className="text-gray-600 dark:text-gray-300">Software Programming Techician - SENA</p>
                </div>
              </div>
            </div>
          </div>

          <div id="work" className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-sm transition-all duration-300 hover:shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation">
              {/* Project Cards */}
              <a href="https://calculadora-de-consumo-electrico.vercel.app/" target="_blank" rel="noopener noreferrer" className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="./public/img/project1.png"
                  alt="Kubernetes Project"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Electric Consumption Calculator</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Developed an application to calculate theoretical expenses based on the electrical consumption of household appliances.
                    Users can input their devices and usage to get an estimate of their electricity costs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm transition-colors">React</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm transition-colors">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm transition-colors">CSS</span>
                  </div>
                </div>
              </a>



              <div className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="Monitoring System"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">Monitoring System</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Designed a monitoring system to detect and alert on critical incidents.
                    Integrated with Prometheus and PagerDuty.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm transition-colors">Prometheus</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm transition-colors">Grafana</span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm transition-colors">Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-sm transition-all duration-300 hover:shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">Skills & Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
              {/* Skill Cards */}
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <Server className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white ">Infrastructure</h3>
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

          {/* Contact Section */}
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
        </div>
      </main >
      {/* Footer */}
      < footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 transition-colors duration-300" >
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
    </div >
  );
}

export default App;