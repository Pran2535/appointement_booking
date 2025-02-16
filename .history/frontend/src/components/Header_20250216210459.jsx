import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="mt-4 flex flex-col md:flex-row justify-between items-center bg-blue-400 px-6 md:px-10 lg:px-20 py-12 text-white">
      {/* Left side */}
      <div className="w-full md:w-1/2 space-y-10 mb-8 md:mb-0">
        <div className="space-y-2">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Book Appointment
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue-100 leading-relaxed">
            With Trusted Doctors
          </h2>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <img 
              src={assets.group_profiles}
              alt="Doctor Profiles"
              className="w-32 h-auto object-contain drop-shadow-lg"
            />
          </div>
          
          <div className="space-y-3">
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-light tracking-wide">
              Simply browse through our extensive list of trusted doctors,
            </p>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-light tracking-wide">
              schedule your appointment hassle-free.
            </p>
          </div>
        </div>

        <a 
          href="#"
          className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold uppercase px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 tracking-wider text-sm"
        >
          <span>Book Appointment</span>
          <img 
            src={assets.arrow_icon}
            alt="Arrow"
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <img 
          src={assets.header_img}
          alt="Header illustration"
          className="w-full max-w-lg h-auto object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Header;