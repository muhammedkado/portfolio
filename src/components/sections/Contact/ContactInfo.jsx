import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'mehmetkado9@gmail.com',
      link: 'mailto:mehmetkado9@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Istanbul, Turkey'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Muhammed Kado',
      link: 'https://www.linkedin.com/in/muhammed--kado-21355b1a9'
    }
  ];

  return (
    <div className="flex flex-col justify-center">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-primary-100 mb-4">
          Let's Connect
        </h3>
        <p className="text-primary-200">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
      </div>
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="text-secondary-400">
              <detail.icon size={24} />
            </div>
            <div>
              <h4 className="text-primary-200 text-sm">{detail.label}</h4>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-primary-100 hover:text-secondary-400 transition-colors duration-200"
                  target={detail.link.startsWith('http') ? '_blank' : undefined}
                  rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-primary-100">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;