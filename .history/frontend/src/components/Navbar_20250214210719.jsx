import React from 'react'
import {assets}from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <img src={assets.logo} alt="" />
        <ul>
            <NavLink>
                <li>Home</li>
                <hr/>
                <li>All Doctors</li>
                <hr/>
                <li>Home</li>
                <hr/>
                <li>Home</li>
                <hr/>
                
            </NavLink>
        </ul>
    </div>
  )
}

export default Navbar
