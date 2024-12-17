import React from 'react';

const SkillCategory = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = {
    "Frontend": [
      "HTML", "CSS", "SASS", "React", "Flutter", "Bootstrap", "jQuery"
    ],
    "Backend": [
      "PHP", "Laravel", "Zend Framework", "REST API"
    ],
    "Database": [
      "MySQL", "PostgreSQL", "SQLite", "Cloud Firestore"
    ],
    "Cloud & Tools": [
      "Firebase", "Firebase Auth", "Firebase Cloud Messaging", "Azure", "AWS"
    ],
    "Languages": [
      "Kurdish (Native)", "Arabic (Native)", "Turkish (Native)", "English (Intermediate)"
    ]
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-4xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <SkillCategory key={category} title={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;