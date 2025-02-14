import React from 'react'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyAppointments from './pages/MyAppointments'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/myappointments' element={<MyAppointments />} />
      </Routes>
    </div>
  )
}

export default App
