import React from 'react';

interface ExperienceEntry {
  company: string;
  logo: string;
  role: string;
  dateRange: string;
  description: string;
}

const ExperienceList: React.FC = () => {
  const experiences: ExperienceEntry[] = [
    {
      company: "Qube Research & Technologies",
      logo: "/logos/qube.png",
      role: "Quantitative Research Intern",
      dateRange: "May 2025 - Aug 2025",
      description: "MFT Alpha and Execution Research"
    },
    {
      company: "Edelweiss Financial Services Limited",
      logo: "/logos/edelweiss.png",
      role: "Quantitative Research Intern",
      dateRange: "May 2024 - Aug 2024",
      description: "Conducted statistical analysis on domestic index stocks"
    },
    {
      company: "Fledge",
      logo: "/logos/fledge.png",
      role: "Software Engineer & Product Manager",
      dateRange: "Jan 2024 - May 2024",
      description: "Developed user-facing features and managed product roadmap implementation"
    },
    {
      company: "Davidson College",
      logo: "/logos/davidson.png",
      role: "Mathematics and Computer Science Researcher",
      dateRange: "June 2022 - October 2022",
      description: "Researched algorithms for computational mathematics applications"
    },
    {
      company: "Rekosistem",
      logo: "/logos/rekosistem.png",
      role: "Data Science Intern",
      dateRange: "June 2022 - August 2022",
      description: "Built predictive models using Python and machine learning frameworks"
    },
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Experience</h1>
      
      {experiences.map((exp, index) => (
        <div key={index} style={{ display: 'flex', marginBottom: '40px', alignItems: 'flex-start' }}>
          <img 
            src={exp.logo} 
            alt={`${exp.company} logo`}
            style={{ 
              width: '80px', 
              height: '80px', 
              marginRight: '20px',
              objectFit: 'contain' 
            }}
          />
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
              <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{exp.company}</h2>
              <span style={{ margin: '0 10px' }}>•</span>
              <span style={{ color: '#999' }}>{exp.role}</span>
            </div>
            
            <p style={{ margin: '5px 0 10px 0', color: '#999' }}>{exp.dateRange}</p>
            
            <p style={{ margin: 0 }}>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;