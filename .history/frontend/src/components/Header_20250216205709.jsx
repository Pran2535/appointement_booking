import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-600 text-white px-6 md:px-10 lg:px-20 py-12">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className="flex items-center gap-4 bg-white text-gray-800 p-4 rounded-lg shadow-md">
          <img
            src={assets.group_profiles}
            alt="Trusted Doctors"
            className="w-16 h-16 rounded-full object-cover"
          />
          <p className="text-lg">
            Simply browse through our extensive list of trusted doctors,
            <br /> and schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold px-6 py-3 rounded-full shadow transition duration-300"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow Icon" className="w-5 h-5" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={assets.header_img}
          alt="Header Illustration"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Header;
