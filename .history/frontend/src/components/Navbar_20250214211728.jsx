import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300 px-6 md:px-10">
      {/* Logo */}
      <img className="w-36 md:w-44 cursor-pointer" src={assets.logo} alt="Logo" />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <NavLink to="/" className="hover:text-blue-500 transition-all">
          Home
        </NavLink>
        <div className="border-l h-5 border-gray-300"></div>

        <NavLink to="/doctors" className="hover:text-blue-500 transition-all">
          All Doctors
        </NavLink>
        <div className="border-l h-5 border-gray-300"></div>

        <NavLink to="/about" className="hover:text-blue-500 transition-all">
          About
        </NavLink>
        <div className="border-l h-5 border-gray-300"></div>

        <NavLink to="/contact" className="hover:text-blue-500 transition-all">
          Contact
        </NavLink>
      </ul>

      {/* Button */}
      <button className="bg-blue-500 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-600 transition-all">
        Create Account
      </button>
    </div>
  )
}

export default Navbar
