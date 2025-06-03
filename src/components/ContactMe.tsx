import { useForm, ValidationError } from '@formspree/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const ContactMe = () => {
  const [state, handleSubmit] = useForm('mdkzojwy');

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-2xl shadow-2xl animate-fade-in-up">
          <p className="text-2xl font-bold text-white text-center mb-2 animate-bounce">
            🎉 Thank you for reaching out!
          </p>
          <p className="text-lg text-white text-center opacity-90 animate-fade-in">
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <style>
          {`
            @keyframes fade-in-up {
              0% { opacity: 0; transform: translateY(40px);}
              100% { opacity: 1; transform: translateY(0);}
            }
            .animate-fade-in-up {
              animation: fade-in-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
            }
            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fade-in {
              animation: fade-in 1.2s 0.4s both;
            }
          `}
        </style>
      </div>
    );
  }

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
          <form
            className="space-y-6"
            onSubmit={e => {
              void handleSubmit(e);
            }}
          >
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
                name="email"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-white"
                placeholder="your.email@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
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
                name="message"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-white"
                placeholder="Your message here..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
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
