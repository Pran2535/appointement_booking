import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <section
      id="speciality"
      className="px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center space-y-4 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Find by Speciality
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
          </p>
        </header>

        {/* Speciality Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {specialityData.map((item, index) => (
            <Link
              key={index}
              to={`/doctors/${item.speciality}`}
              className="group flex flex-col items-center bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                <img
                  src={item.image}
                  alt={item.speciality}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800 text-center tracking-wide group-hover:text-blue-600 transition-colors duration-300">
                {item.speciality}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialityMenu;
