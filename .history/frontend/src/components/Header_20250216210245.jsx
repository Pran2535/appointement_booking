import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="mt-4 flex flex-col md:flex-row justify-between items-center bg-blue-350 px-6 md:px-10 lg:px-20 py-12 text-white">
      {/* Left side */}
      <div className="w-full md:w-1/2 space-y-8 mb-8 md:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img 
              src={assets.group_profiles} 
              alt="Doctor Profiles" 
              className="w-32 h-auto object-contain"
            />
          </div>
          
          <p className="text-lg text-gray-100 leading-relaxed">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden md:block" /> 
            schedule your appointment hassle-free.
          </p>
        </div>

        <a 
          href="#" 
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold uppercase px-6 py-3 rounded-full shadow-lg transition-colors duration-300"
        >
          <span>Book Appointment</span>
          <img 
            src={assets.arrow_icon} 
            alt="Arrow" 
            className="w-5 h-5"
          />
        </a>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img 
          src={assets.header_img} 
          alt="Header illustration" 
          className="w-full max-w-lg h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
