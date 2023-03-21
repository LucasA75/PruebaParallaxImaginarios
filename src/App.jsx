import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import "./App.css"
import About from './components/About'
import Chile from './components/Chile'
import Footer from './components/Footer'

function App() {

  return (
   <>
    <Navbar/>
    <Header/>
    <About/>
    <Chile/>
    <Footer/>
   </>
  )
}

export default App
