// import { useState } from 'react'
import About from './Components/About/About.jsx'
import HomePage from './Components/Homepage/HomePage.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Routes>
    <Route path='/'  element={<HomePage/>}  />
    <Route path='/About'  element={<About/>}  />

   
    </Routes>
    
    {/* <HomePage/> */}
      
    </>
  )
}

export default App
