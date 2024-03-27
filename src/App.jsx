import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Service from './components/Service'
import ProductDisplay from './components/ProductDisplay'
import NewArrival from './components/NewArrival'
function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
    <ProductDisplay/>
    <NewArrival/>
    
    </>
  )
}

export default App
