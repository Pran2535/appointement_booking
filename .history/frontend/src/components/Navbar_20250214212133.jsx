import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img 
              className="w-32 md:w-40 lg:w-44 h-auto cursor-pointer transition-transform hover:scale-105" 
              src={assets.logo} 
              alt="Company Logo" 
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `font-medium transition-colors duration-200 hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  }`
                }
              >
                Home
              </NavLink>

              <div className="h-5 w-px bg-gray-300" aria-hidden="true" />

              <NavLink 
                to="/doctors" 
                className={({ isActive }) => 
                  `font-medium transition-colors duration-200 hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  }`
                }
              >
                All Doctors
              </NavLink>

              <div className="h-5 w-px bg-gray-300" aria-hidden="true" />

              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `font-medium transition-colors duration-200 hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  }`
                }
              >
                About
              </NavLink>

              <div className="h-5 w-px bg-gray-300" aria-hidden="true" />

              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `font-medium transition-colors duration-200 hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
                  }`
                }
              >
                Contact
              </NavLink>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button 
              className="
                bg-blue-600 
                hover:bg-blue-700 
                text-white 
                px-6 
                py-2.5 
                rounded-lg
                font-medium 
                transition-colors 
                duration-200
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500 
                focus:ring-offset-2
                shadow-sm
              "
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;