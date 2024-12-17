import React from 'react';
import { Link } from 'react-scroll';

const NavItem = ({ item }) => (
  <li>
    <Link
      to={item.toLowerCase()}
      smooth={true}
      duration={500}
      className="text-primary-600 hover:text-primary-800 cursor-pointer transition-colors duration-200 px-3 py-2 rounded-md hover:bg-primary-50"
    >
      {item}
    </Link>
  </li>
);