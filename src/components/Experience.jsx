import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Software Developer</h3>
              <span className="text-gray-600">May 2023 - Present</span>
            </div>
            <h4 className="text-lg text-gray-700 mb-2">USTEK RFID</h4>
            <p className="text-gray-600">
              Enhancing RFID-based laundry management system by designing and implementing
              new features to meet client needs. Focus on innovation and error minimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;