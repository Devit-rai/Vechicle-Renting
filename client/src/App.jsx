import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Signin from './Login/Signin'
import Signup from './Login/Signup'
import Landing from './Landing/Landing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
