import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Nikhil Lalgudi Vaidyanathan</h1>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/nikhil-lalgudi" className="text-gray-600 hover:text-gray-900">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4">
        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">MinGemma</h3>
              <p className="text-gray-600 mb-4">
                A minimalist implementation of the Gemma language model.
              </p>
              <a 
                href="https://github.com/nikhil-lalgudi/minGemma"
                className="text-blue-600 hover:text-blue-800"
              >
                View on GitHub →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">TraPy</h3>
              <p className="text-gray-600 mb-4">
                A Python-based trading and analysis platform.
              </p>
              <a 
                href="https://github.com/nikhil-lalgudi/traPy"
                className="text-blue-600 hover:text-blue-800"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education & Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <div className="mb-4">
                <p className="font-medium">Computer Science</p>
                <p className="text-gray-600">Relevant Coursework:</p>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  <li>EECS 280: Object-Oriented Programming in C++ </li>
                  <li>EECS 281: Data Structures and Algorithms</li>
                  <li>EECS 301: Probabilistic Methods & Random Processes </li>
                  <li>EECS 553: Theoretical Machine Learning* </li>
                </ul>
                <p className="font-medium">Honors Mathematics</p>
                <p className="text-gray-600">Relevant Coursework:</p>
                 <ul className="list-disc list-inside text-gray-600 ml-4">
                   <li>Math 217: Abstract Linear Algebra </li>
                   <li>Math 395: Honors Analysis on Manifolds I (Abstract Manifolds & Measure Theory) </li>
                   <li>Math 451: Real Analysis </li>
                   <li>Math 465: Combinatorics & Graph Theory </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center text-gray-600">
          © 2024 Nikhil Lalgudi Vaidyanathan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;