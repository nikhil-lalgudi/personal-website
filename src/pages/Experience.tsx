import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Edelweiss Financial Services Limited",
    role: "Quantitative Research Intern",
    duration: "May 2024 - Aug 2024 · 4 mos",
    location: "Mumbai, Maharashtra, India",
    description: "Alpha Research - entry/exit signals, pricing/volatility models, and heteroskedastic noise (domestic index options HFT/MFT algo dev)",
    skills: ["Time Series Analysis"]
  },
  {
    company: "Fledge",
    role: "Software Engineer & Product Manager",
    duration: "Jan 2024 - May 2024 · 5 mos",
    location: "Hanover, New Hampshire, United States",
    description: "AI powered networking CRM for students, gofledge.net",
    skills: ["Prompt Engineering", "Front-End Development"]
  },
  {
    company: "Davidson College",
    role: "Software Engineer & Product Manager",
    duration: "Jan 2024 - May 2024 · 5 mos",
    location: "Hanover, New Hampshire, United States · Remote",
    description: "AI powered networking CRM for students, gofledge.net",
    skills: ["Prompt Engineering", "Front-End Development"]
  },
];

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-8">Experience</h1>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}