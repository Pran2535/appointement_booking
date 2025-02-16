import React from 'react';
import { doctors } from '../assets/assets';

const TopDoctors = () => {
  return (
    <section className="py-20 bg-slate-50">
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
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-800 bg-opacity-0 group-hover:bg-opacity-25 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-800 group-hover:text-slate-600 transition-colors duration-300">
                      {doctor.name}
                    </h3>
                    <p className="text-slate-600 font-medium">
                      {doctor.speciality}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-sm font-medium">
                    Available
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <button className="w-full py-2 px-4 bg-slate-100 text-slate-800 rounded-lg font-medium hover:bg-slate-200 transition-colors duration-300">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-16">
          <button className="group relative px-8 py-4 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="relative z-10">View More Doctors</span>
            <div className="absolute inset-0 bg-slate-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
