import React from 'react';
import NavItem from './NavItem';
import { navItems } from '../../../constants/navigation';

const Header = () => {
  return (
    <header className="fixed w-full bg-primary-900/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-100 hover:text-white transition-colors duration-200">
            Muhammed Kado
          </h1>
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavItem key={item} item={item} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};