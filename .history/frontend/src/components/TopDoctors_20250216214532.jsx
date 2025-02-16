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
        <div className="flex flex-wrap gap-8 justify-center">
          {doctors.slice(0, 10).map((doctor, index) => (
            <div
              key={index}
              // From Uiverse.io by adamgiebl
              className="group w-[190px] h-[254px] bg-[#e0e0e0] rounded-[30px] shadow-[15px_15px_30px_#bebebe,_-15px_-15px_30px_#ffffff] transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-[130px] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Details Container */}
              <div className="flex-grow p-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-slate-600">
                    {doctor.speciality}
                  </p>
                </div>
                <button className="mt-2 py-1 px-2 bg-slate-100 text-slate-700 rounded-md text-xs font-medium hover:bg-slate-200 transition-colors duration-300">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-16">
          <button className="group relative px-8 py-3 bg-slate-800 text-white font-medium rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
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
            <div className="absolute inset-0 bg-slate-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
