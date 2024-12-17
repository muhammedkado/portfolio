import React from 'react';
import { socialLinks } from '../../../constants/social';
import SocialLink from './SocialLink';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary-900 mb-6 animate-fade-in">
            Hi, I'm Muhammed Kado
          </h1>
          <p className="text-xl text-primary-700 mb-8 animate-fade-in-delay-1">
            Software Developer based in Istanbul, Turkey
          </p>
          <p className="text-lg text-primary-600 mb-8 animate-fade-in-delay-2">
            Specializing in Laravel, Flutter, and RFID-based systems
          </p>
          <div className="flex justify-center space-x-6 animate-fade-in-delay-3">
            {socialLinks.map((link) => (
              <SocialLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};