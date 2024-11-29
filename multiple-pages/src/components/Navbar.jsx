import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">MyApp</h1>

        {/* Navigation Links */}
        <div className="space-x-6 hidden lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white text-lg hover:text-yellow-300 transition duration-300 ${isActive ? 'underline' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white text-lg hover:text-yellow-300 transition duration-300 ${isActive ? 'underline' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/profile/1"
            className={({ isActive }) =>
              `text-white text-lg hover:text-yellow-300 transition duration-300 ${isActive ? 'underline' : ''}`
            }
          >
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
