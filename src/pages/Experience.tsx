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
    <div className="max-w-4xl mx-auto px-4 py-12 bg-black text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-12">Experience</h1>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="pb-2"
            >
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-gray-400 mt-1">{exp.company}</p>
              <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
