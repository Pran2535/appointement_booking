import React from 'react'
import {assets}from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img src={assets.logo} alt="" />
        <ul>
            <NavLink>
                <li>Home</li>
                <hr/>
                <li>All Doctors</li>
                <hr/>
                <li>About</li>
                <hr/>
                <li>Contact</li>
                <hr/>
                
            </NavLink>
        </ul>
        <div className="">
            <button>Create account</button>
        </div>
    </div>
  )
}

export default Navbar
