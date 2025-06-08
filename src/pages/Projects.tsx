import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "MinGemma",
    description: "The most lightweight and efficient repository for training and fine-tuning Google's Gemma models.",
    github: "https://github.com/nikhil-lalgudi/minGemma"
  },
  {
    title: "TraPy",
    description: "The most comprehensive Python Library for technical analysis, stochastic realizations, and differential equations solvers with GPU support and efficient sensitivity analysis",
    github: "https://github.com/nikhil-lalgudi/traPy"
  },
  {
    title: "Advanced-DS",
    description: "Implementations and explanations of various advanced and probabilistic data structures compatible to C++ 17 and above.",
    github: "https://github.com/nikhil-lalgudi/Advanced-DS"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center">
            Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-zinc-900 p-6 rounded-lg h-full flex flex-col">
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 flex-grow">
                    {project.description}
                  </p>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" size={20} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}