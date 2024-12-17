import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm Muhammed Kado
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Software Developer based in Istanbul, Turkey
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Specializing in Laravel, Flutter, and RFID-based systems
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/muhammedkado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammed--kado-21355b1a9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:mehmetkado9@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;