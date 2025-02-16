import React from 'react';
import { doctors } from '../assets/assets';

const TopDoctors = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <header className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            Top Doctors to Book
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </header>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
          {doctors.slice(0, 10).map((doctor, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>
              
              {/* Details Container */}
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    {doctor.speciality}
                  </p>
                </div>
                <button className="w-full py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-blue-600/20">
                  Book Appointment
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-16">
          <button className="group relative px-8 py-3.5 bg-slate-800 text-white font-medium rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="relative z-10 flex items-center space-x-2">
              <span>View More Doctors</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;