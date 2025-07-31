import { useState } from 'react'
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Authentication from './Components/Authentication/Authentication'

function App() {
  

  return (
    <div className=''>

      <Routes>
        <Route path='/*' element={false?<HomePage/>:<Authentication/>} />
      </Routes>
    </div>
  )
}

export default App
