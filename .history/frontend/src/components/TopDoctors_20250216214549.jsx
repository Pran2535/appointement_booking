import React from 'react';
import { doctors } from '../assets/assets';

const TopDoctors = () => {
  return (
    <section className="py-20 bg-[#e0e0e0]">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {doctors.slice(0, 10).map((doctor, index) => (
            <div
              key={index}
              className="group bg-[#e0e0e0] rounded-[30px] overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '15px 15px 30px #bebebe, -15px -15px 30px #ffffff'
              }}
            >
              <div className="relative overflow-hidden rounded-t-[30px]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-800 group-hover:text-slate-600 transition-colors duration-300">
                      {doctor.name}
                    </h3>
                    <p className="text-slate-600 text-sm font-medium">
                      {doctor.speciality}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/50 text-slate-600 text-sm font-medium backdrop-blur-sm">
                    Available
                  </span>
                </div>

                <button 
                  className="w-full py-3 px-4 rounded-2xl font-medium transition-all duration-300 bg-[#e0e0e0]"
                  style={{
                    boxShadow: '5px 5px 10px #bebebe, -5px -5px 10px #ffffff'
                  }}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-16">
          <button 
            className="group relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 text-slate-700 bg-[#e0e0e0] hover:scale-105"
            style={{
              boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff'
            }}
          >
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;