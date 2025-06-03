import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const ContactMe = () => {
  return (
    <>
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
          Get in Touch
        </h2>
        <div className="bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-700">
          <p className="text-lg text-gray-300 text-center mb-8">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out!
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-white"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg mb-4">
              Or connect with me directly:
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:your.email@example.com"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                <Mail size={32} />
              </a>
              <a
                href="https://github.com/chell0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/gabrielmachelo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="https://x.com/CodeWithChelloh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
              >
                <Twitter size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
