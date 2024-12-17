import React from 'react';

const ExperienceItem = ({ title, company, date, description }) => (
  <div className="mb-12 transform hover:scale-105 transition-transform duration-200 p-6 rounded-lg bg-gradient-to-r from-primary-50 to-white border border-primary-100 shadow-lg">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-semibold text-primary-700">{title}</h3>
      <span className="text-secondary-600 bg-secondary-50 px-3 py-1 rounded-full text-sm">{date}</span>
    </div>
    <h4 className="text-lg text-primary-600 mb-2">{company}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);