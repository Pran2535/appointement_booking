import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const links = [
  { to: '/', label: 'Home' },
  { to: '/doctors', label: 'All Doctors' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu]=useState(false);
  const [token,setToken]=useState(true);


  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
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
            {links.map((l, i) => (
              <React.Fragment key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `font-medium transition-colors duration-200 hover:text-blue-600 ${
                      isActive ? 'text-blue-600' : 'text-gray-700'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
                {i < links.length - 1 && (
                  <div className="h-5 w-px bg-gray-300" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
            {
                token?
                <div className='flex items-center gap-2 cursor-pointer group relative' >
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-2.5 ' src={assets.dropdown_icon} alt="" />
                    <div>
                        <div>
                            <p>My Profile</p>
                            <p>My Appointments</p>
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
                
                :
                 <button
            onClick={() => navigate('/login')}
            className="hidden cursor-pointer md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
          >
            Create Account
          </button>
            }
         
        </div>
      </div>
    </nav>
  )
}

export default Navbar
