import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black to-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl w-full"
      >
        <div className="text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            nikhil lalgudi vaidyanathan
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 font-light tracking-wide">
              engineer. mathematician. problem solver.
            </p>
            
            <p className="text-xl text-gray-300 font-light tracking-wide">
              cs + honors math @umich, incoming stats masters @umich
            </p>

            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-gray-400 leading-relaxed">
                currently an alpha/execution researcher at the fastest growing hedge fund in the world
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                interested in statistical methods, HPC, deep reinforcement learning, and building fault-tolerant systems
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                grew up in vietnam, singapore, thailand, the philippines, indonesia, and india
              </p>
            </div>

            <div className="flex justify-center space-x-6 pt-4">
              <a 
                href="mailto:nikhillv@umich.edu" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope size={24} />
              </a>
              <a 
                href="https://github.com/nikhil-lalgudi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/nikhil-lalgudi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}