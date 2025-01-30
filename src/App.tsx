import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

// Pages
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <nav className="fixed w-full top-0 bg-black/50 backdrop-blur-sm z-50">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <ul className="flex justify-center space-x-8">
              <li><Link to="/" className="hover:text-gray-300">home</Link></li>
              <li><Link to="/experience" className="hover:text-gray-300">experience</Link></li>
              <li><Link to="/education" className="hover:text-gray-300">education</Link></li>
              <li><Link to="/projects" className="hover:text-gray-300">projects</Link></li>
              <li><Link to="/blog" className="hover:text-gray-300">blog</Link></li>
            </ul>
          </div>
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-6">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://github.com/nikhil-lalgudi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://medium.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaMedium size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/nikhil-vaidyanathan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;