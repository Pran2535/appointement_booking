import React from 'react'
import { doctors } from '../assets/assets'

const TopDoctors = () => {
  return (
    <div>
      <h1>Top Doctors to book</h1>
      <p>Simply browse through our extensive list of trusted doctors</p>
      <div className="">
        {doctors.slice(0,10).map((item, index)=>(
         <div className="">
            <img src={item.image} alt="" />
            <div className="">
                <p></p> <p>Available</p>
            </div>
            <p>{item.name}</p>
            <p>{item.speciality}</p>
         </div>
        ))}
      </div>
      <button>More</button>
    </div>
  )
}

export default TopDoctors
