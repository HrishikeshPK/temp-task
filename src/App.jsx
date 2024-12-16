import { useState } from 'react'

import './App.css'
import { Header } from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import { Body } from './Components/Body'

function App() {
  

  return (
    <>
     <Header/>
     <Routes>
     <Route path='/' element={<Body/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
