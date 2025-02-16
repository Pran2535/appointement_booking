import React from 'react';
import { doctors } from '../assets/assets';

const TopDoctors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Top Doctors to Book
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </header>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {doctors.slice(0, 10).map((doctor, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-800 font-semibold">{doctor.name}</p>
                <span className="text-green-500 font-medium">Available</span>
              </div>
              <p className="text-gray-600">{doctor.speciality}</p>
            </div>
          ))}
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
