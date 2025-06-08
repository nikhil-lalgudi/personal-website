import { motion } from 'framer-motion';

const education = [
  {
    school: "University of Michigan Rackham Graduate School",
    degree: "Masters's degree, Statistics",
    coursework: [
      "STATS 600: Regression Analysis",
      "STATS 610: Statistical Inference I",
      "STATS/MATH 626: Stochastic Analysis/Control",

    ],
  },
  {
    school: "University of Michigan College of Engineering",
    degree: "Bachelor's degree, Computer Science",
    coursework: [
      "EECS 203: Discrete Math",
      "EECS 280: Object-Oriented Programming in C++",
      "EECS 281: Data Structures and Algorithms",
      "EECS 301: Probabilistic Methods & Random Processes",
      "EECS 370: Computer Organization",
      "EECS 491: Distributed Systems",
      "EECS 553: (ECE) Theoretical Machine Learning*",
    ],
    concentration: "Systems + AI concentration.",
  },
  {
    school: "University of Michigan",
    degree: "Bachelor's degree, Honors Mathematics",
    courses: [
      "Math 217: Abstract Linear Algebra",
      "Math 395: Honors Analysis on Manifolds (Abstract Manifolds & Measure Theory)",
      "Math 451: Real Analysis",
      "Math 465: Combinatorics & Graph Theory",
      "Math 626: Stochastic Analysis/Control",
    ],
    cognateCourses: [
      "EECS 553: (ECE) Theoretical Machine Learning*",
    ]
  }
];

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center">
            Education
          </h1>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-zinc-900 p-8 rounded-lg">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{edu.school}</h3>
                      <p className="text-blue-400 font-medium">{edu.degree}</p>
                    </div>
                    
                    {edu.coursework && (
                      <div>
                        <p className="text-gray-300 font-medium mb-3">Courses:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.coursework.map((course, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span className="text-gray-400">{course}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-gray-500 text-sm mt-3">* Indicates a Graduate level course</p>
                      </div>
                    )}
                    
                    {edu.concentration && (
                      <p className="text-gray-400 italic">{edu.concentration}</p>
                    )}
                    
                    {edu.courses && (
                      <div>
                        <p className="text-gray-300 font-medium mb-3">Courses:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.courses.map((course, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span className="text-gray-400">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.cognateCourses && (
                      <div>
                        <p className="text-gray-300 font-medium mb-3">Cognate Courses:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.cognateCourses.map((course, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span className="text-gray-400">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
