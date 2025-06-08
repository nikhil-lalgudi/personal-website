"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Qube Research & Technologies",
    role: "Quantitative Research Intern",
    duration: "May 2025 - Aug 2025",
  },
  {
    company: "Edelweiss Financial Services Limited",
    role: "Quantitative Research Intern",
    duration: "May 2024 - Aug 2024",
  },
  {
    company: "Fledge",
    role: "Software Engineer & Product Manager",
    duration: "Jan 2024 - May 2024",
  },
  {
    company: "Davidson College",
    role: "Mathematics and Computer Science Researcher",
    duration: "June 2022 - October 2022",
  },
  {
    company: "Rekosistem",
    role: "Data Science Intern",
    duration: "June 2022 - August 2022",
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center">
            Experience
          </h1>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-gray-700 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-zinc-800/70 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.role}</h3>
                  <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
