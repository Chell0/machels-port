import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  // Navigation State
  const [activeSection, setActiveSection] = useState('home');
  // State for mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle smooth scrolling to different sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Helper to check if a section is active
  const isActive = (section: string) => activeSection === section;

  return (
    <>
      <div className="min-h-screen text-gray-100 bg-gradient-to-br from-gray-900 to-gray-800 font-inter">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-900 shadow-lg bg-opacity-90 backdrop-blur-sm">
          <div className="container flex items-center justify-between px-4 mx-auto">
            <a
              href="/"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-indigo-400 transition-colors duration-300 hover:text-indigo-300"
            >
              Machel.dev
            </a>
            <div className="hidden space-x-6 md:flex">
              <button
                onClick={() => scrollToSection('about')}
                className={`text-lg transition-colors duration-300 ${
                  isActive('about')
                    ? 'text-indigo-400 font-semibold'
                    : 'text-gray-300 hover:text-indigo-400'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`text-lg transition-colors duration-300 ${
                  isActive('skills')
                    ? 'text-indigo-400 font-semibold'
                    : 'text-gray-300 hover:text-indigo-400'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`text-lg transition-colors duration-300 ${
                  isActive('projects')
                    ? 'text-indigo-400 font-semibold'
                    : 'text-gray-300 hover:text-indigo-400'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-lg transition-colors duration-300 ${
                  isActive('contact')
                    ? 'text-indigo-400 font-semibold'
                    : 'text-gray-300 hover:text-indigo-400'
                }`}
              >
                Contact
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-gray-300 hover:text-indigo-400 focus:outline-none"
                aria-label="Open mobile menu"
                onClick={() => setMobileOpen(open => !open)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
              {/* Mobile menu dropdown */}
              {mobileOpen && (
                <div className="absolute z-50 flex flex-col w-48 py-2 mt-2 space-y-2 bg-gray-900 rounded-lg shadow-lg right-4 bg-opacity-95">
                  <button
                    onClick={() => {
                      scrollToSection('about');
                      setMobileOpen(false);
                    }}
                    className={`text-left px-4 py-2 text-lg transition-colors duration-300 ${
                      isActive('about')
                        ? 'text-indigo-400 font-semibold'
                        : 'text-gray-300 hover:text-indigo-400'
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('skills');
                      setMobileOpen(false);
                    }}
                    className={`text-left px-4 py-2 text-lg transition-colors duration-300 ${
                      isActive('skills')
                        ? 'text-indigo-400 font-semibold'
                        : 'text-gray-300 hover:text-indigo-400'
                    }`}
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('projects');
                      setMobileOpen(false);
                    }}
                    className={`text-left px-4 py-2 text-lg transition-colors duration-300 ${
                      isActive('projects')
                        ? 'text-indigo-400 font-semibold'
                        : 'text-gray-300 hover:text-indigo-400'
                    }`}
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('contact');
                      setMobileOpen(false);
                    }}
                    className={`text-left px-4 py-2 text-lg transition-colors duration-300 ${
                      isActive('contact')
                        ? 'text-indigo-400 font-semibold'
                        : 'text-gray-300 hover:text-indigo-400'
                    }`}
                  >
                    Contact
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="relative flex items-center justify-center min-h-screen pt-20 px-4 text-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                'url(https://placehold.co/1920x1080/000000/HHHHHH? text=Abstract+Background)',
            }}
          ></div>
          <div className="relative z-10 p-8 bg-gray-800 bg-opacity-70 rounded-xl shadow-2xl max-w-3xl border border-gray-700">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
              Hi, I&apos;m{' '}
              <span className="text-indigo-400">Machel Odhiambo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
              A passionate{' '}
              <span className="font-semibold text-indigo-300">
                Software Developer
              </span>{' '}
              crafting engaging and efficient web applications.
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
            >
              View My Work <ChevronDown className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-20 px-4 bg-gray-900">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gray-800">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-gray-900">
          <Projects />
        </section>
      </div>
    </>
  );
};

export default App;
