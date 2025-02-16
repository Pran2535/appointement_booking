import React from 'react'
import {assets} from '../assets/assets'
const Header = () => {
  return (
    <div>
      {/* { left side } */}
      <div className="">
<p>Book Appointment <br /> With Trusted Doctors</p>
<div className="">
    <img src={assets.group_profiles} alt="" />
    <p> Simply browse through our extensive list of trusted doctors,
        <br /> schedule your apppointment hassle-free.
    </p>
</div>
< a href="">Book Appointment <img src={assets.arrow_icon} alt="" />
</a>
      </div>
{/* { right side } */}
<div className="">
<img src={assets.header_img} alt="" />
</div>
    </div>
  )
}

export default Header
