import { motion } from 'framer-motion';

const education = [
  {
    school: "University of Michigan College of Engineering",
    degree: "Bachelor's degree, Computer Science",
    duration: "2023 - 2026",
    activities: ["V1 Michigan", "Indian American Student Association", "PERMIAS Michigan"],
    coursework: [
      "EECS 280: Object-Oriented Programming in C++",
      "EECS 281: Data Structures and Algorithms",
      "EECS 301: Probabilistic Methods & Random Processes",
      "EECS 553: (ECE) Theoretical Machine Learning*"
    ],
    concentration: "Systems + AI concentration"
  },
  {
    school: "University of Michigan",
    degree: "BS/MS, Honors Mathematics",
    duration: "Sep 2023 - 2026",
    courses: [
      "Math 395: Honors Analysis on Manifolds (Abstract Manifolds & Measure Theory)",
      "Math 217: Abstract Linear Algebra",
      "MATH 465: Combinatorics & Graph Theory",
      "MATH 451: Real Analysis"
    ]
  }
];

export default function Education() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">Education</h1>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 p-6 rounded-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="text-gray-400">{edu.degree}</p>
                  <p className="text-gray-500 text-sm mb-4">{edu.duration}</p>
                  
                  {edu.activities && (
                    <div className="mb-4">
                      <p className="text-gray-300 font-medium">Activities and Societies:</p>
                      <p className="text-gray-400">{edu.activities.join(", ")}</p>
                    </div>
                  )}
                  
                  {edu.coursework && (
                    <div className="mb-4">
                      <p className="text-gray-300 font-medium">Relevant Coursework:</p>
                      <ul className="list-disc list-inside text-gray-400">
                        {edu.coursework.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {edu.concentration && (
                    <p className="text-gray-400">{edu.concentration}</p>
                  )}
                  
                  {edu.courses && (
                    <div>
                      <p className="text-gray-300 font-medium">Courses:</p>
                      <ul className="list-disc list-inside text-gray-400">
                        {edu.courses.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}