import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import "./App.css"
import About from './components/About'
import Info from './components/Info'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navbar/>
    <Header/>
    <About/>
    <Info/>
    <Footer/>
   </div>
  )
}

export default App
