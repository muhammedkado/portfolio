import React from 'react';

const ProjectCard = ({ title, date, description, tech, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <span className="text-sm text-gray-600">{date}</span>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mb-4">
      <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
      <p className="text-gray-600">{tech}</p>
    </div>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        View Project →
      </a>
    )}
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Full-Featured POS System",
      date: "February 2024 - May 2024",
      description: "Manages products, users, and categories for retail environments",
      tech: "Laravel, PostgreSQL, jQuery",
      link: "#"
    },
    {
      title: "Project Management App",
      date: "September 2022 - January 2023",
      description: "Android app with project management features including member joining, applicant tracking, and messaging",
      tech: "Flutter (Bloc), Firebase",
      link: "#"
    },
    {
      title: "Socia App",
      date: "January 2023 - February 2023",
      description: "Social media app with photo posts, real-time messaging, and profile management",
      tech: "Flutter, Bloc, Firebase",
      link: "#"
    },
    {
      title: "Notes App",
      date: "February 2023 - March 2023",
      description: "Fully functional notes app with modern UI",
      tech: "Flutter, Firebase",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;