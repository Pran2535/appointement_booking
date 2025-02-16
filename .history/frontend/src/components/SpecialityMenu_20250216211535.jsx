import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-4">Find by Speciality</h1>
      <p className="text-gray-600 text-center mb-8">
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="text-lg font-semibold text-gray-800">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
