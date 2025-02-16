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
        <div className="flex flex-wrap gap-10 justify-center">
          {doctors.slice(0, 10).map((doctor, index) => (
            <div
              key={index}
              className="group w-[210px] h-[310px] bg-white rounded-2xl shadow-lg transition-transform duration-300 transform hover:-translate-y-3 hover:shadow-2xl flex flex-col overflow-hidden border border-gray-200"
            >
              {/* Image Container */}
              <div className="relative h-[110px] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Details Container */}
              <div className="flex-grow p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {doctor.speciality}
                  </p>
                </div>
                <button className="mt-2 py-2 px-3 bg-blue-600 text-white rounded-md text-xs font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-16">
          <button className="group relative px-8 py-3 bg-blue-600 text-white font-medium rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
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
            <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
