import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import "./App.css"
import About from './components/About'
import Info from './components/Info'
import Footer from './components/Footer'

function App() {

  return (
   <>
    <Navbar/>
    <Header/>
    <About></About>
    <Info/>
    <Footer/>
   </>
  )
}

export default App
