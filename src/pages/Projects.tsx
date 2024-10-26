import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "MinGemma",
    description: "A minimalist implementation of the Gemma language model.",
    github: "https://github.com/nikhil-lalgudi/minGemma"
  },
  {
    title: "TraPy",
    description: "A Python-based trading and analysis platform.",
    github: "https://github.com/nikhil-lalgudi/traPy"
  }
];

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}