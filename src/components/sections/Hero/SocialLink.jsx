import React from 'react';

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary-200 hover:text-white transition-colors duration-200 transform hover:scale-110"
    aria-label={label}
  >
    <Icon size={24} />
  </a>
);