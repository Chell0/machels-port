import { useState } from 'react';

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
      </div>
    </>
  );
};

export default App;
