import React from 'react';

const ExperienceItem = ({ title, company, date, description }) => (
  <div className="mb-12 transform hover:scale-105 transition-transform duration-200 p-6 rounded-lg bg-tech-gradient from-primary-800 to-primary-900/50 border border-primary-700/30 shadow-lg">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-semibold text-primary-100">{title}</h3>
      <span className="text-secondary-300 bg-secondary-900/50 px-3 py-1 rounded-full text-sm">{date}</span>
    </div>
    <h4 className="text-lg text-primary-200 mb-2">{company}</h4>
    <p className="text-primary-300">{description}</p>
  </div>
);