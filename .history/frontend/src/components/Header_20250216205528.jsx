import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-600 text-white px-6 md:px-10 lg:px-20 py-10">
      {/* Left Side */}
      <div className="flex flex-col gap-4 md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className="flex items-center gap-4 bg-white text-black p-4 rounded-lg shadow-md">
          <img src={assets.group_profiles} alt="Doctors" className="w-16 h-16 rounded-full" />
          <p className="text-lg">
            Simply browse through our extensive list of trusted doctors,
            <br /> schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-lg transition-all duration-300 w-fit"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow" className="w-5 h-5" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center">
        <img src={assets.header_img} alt="Header" className="w-full md:w-[80%] lg:w-[70%] max-w-md rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Header;
