import React from 'react';
import ExperienceItem from './ExperienceItem';
import { experiences } from '../../../constants/experiences';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-primary-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-100">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};