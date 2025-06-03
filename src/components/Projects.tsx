import { ExternalLink, GitBranch } from 'lucide-react';

// My Projects Data
const projects = [
  {
    id: 1,
    title: 'My Portfolio Website',
    description:
      'A personal portfolio website to showcase my skills and projects.',
    technologies: ['HTML5', 'CSS3', 'React', 'Tailwind CSS'],
    imageUrl: '/images/projects/machel.png',
    liveLink: 'https://example.com/portfolio',
    githubLink: 'https://github.com/Chell0/machels-port',
  },
  {
    id: 2,
    title: 'Agency Web Portfolio',
    description:
      'A professional web portfolio for an agency, highlighting services and projects.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    imageUrl: '/images/projects/kazifiti.png',
    liveLink: 'https://kazifiti.com',
    githubLink: 'https://github.com/Chell0/tukoWaksBana',
  },
  {
    id: 3,
    title: 'Blog Website',
    description:
      'A modern blog website with a clean design and easy navigation.',
    technologies: [
      'Next',
      'TypeScript',
      'Tailwind CSS',
      'Sanity.io(CMS)',
      'bun',
    ],
    imageUrl: '/images/projects/machtbewusst_hamburg.png',
    liveLink: 'https://www.machtbewusst-hamburg.de',
    githubLink: 'https://github.com/Chell0/machtbewwust',
  },
  {
    id: 4,
    title: 'Surveyor Webportfolio',
    description:
      'A web portfolio for a surveyor, showcasing their services and projects.',
    technologies: ['Next', 'TypeScript', 'Tailwind CSS', 'bun'],
    imageUrl: '/images/projects/charles_ochieng.png',
    liveLink: 'https://charles-ochieng.vercel.app',
    githubLink: 'https://github.com/Chell0/randys-port',
  },
];

const Projects = () => {
  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 transform hover:scale-102 transition-transform duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-indigo-700 text-indigo-100 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 text-sm"
                  >
                    <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 text-gray-200 rounded-full hover:bg-gray-600 transition-colors duration-300 text-sm"
                  >
                    <GitBranch className="mr-2 w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
