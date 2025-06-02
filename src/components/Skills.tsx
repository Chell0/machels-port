import { Code, Database, Zap } from 'lucide-react';

const Skills = () => {
  return (
    <>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Code className="mr-3 text-indigo-400" size={28} /> Frontend
            </h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                HTML5 & CSS3
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                JavaScript(React.js, Next.js)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Tailwind CSS
              </li>
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Zap className="mr-3 text-indigo-400" size={28} /> Backend
            </h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Python (Flask, FastAPI)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                RESTful APIs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                CMS (Sanity.io)
              </li>
            </ul>
          </div>

          {/* Databases & Tools */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Database className="mr-3 text-indigo-400" size={28} /> Databases
              & Tools
            </h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                PostgreSQL
              </li>
              {/* <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                MongoDB
              </li> */}
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Git & GitHub
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
