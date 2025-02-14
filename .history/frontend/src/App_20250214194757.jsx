import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyAppointments from './pages/MyAppointments'
import Doctors from './pages/Doctors'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/myappointments' element={<MyAppointments />} />
        <Route path='/doctors' element={<Doctors/>}/>
      </Routes>
    </div>
  )
}

export default App
