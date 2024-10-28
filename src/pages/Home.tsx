import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-4xl font-bold mb-6">nikhil lalgudi vaidyanathan</h1>
        
        <p className="text-gray-400 mb-4">
          engineer. mathematician. problem solver. cs + honors math @umich.
        </p>
        
        <p className="text-gray-400 mb-4">
        interested in statistical methods, HPC, deep reinforcement learning, and building fault-tolerant systems. 
        </p>

        <p className="text-gray-400 mb-4">
        spent my childhood in vietnam, singapore, thailand, the philippines, indonesia, and india. prev experience in HFT research and ML development/training.
        </p>

         <p className="text-gray-400 mb-4">
          feel free to contact me at: <a href="mailto:nikhillv@umich.edu" className="underline">nikhillv@umich.edu</a>, love chatting about cool ideas
        </p>
        
      </motion.div>
    </div>
  );
}