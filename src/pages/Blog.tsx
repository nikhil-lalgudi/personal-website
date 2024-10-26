import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <p className="text-gray-400">Coming soon...</p>
      </motion.div>
    </div>
  );
}