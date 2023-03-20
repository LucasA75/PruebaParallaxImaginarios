import React from 'react'
import Person from "../assets/person.jpg"
import { useRef,useEffect } from 'react'
import { useInView } from 'framer-motion'

const Footer = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className='Container__Footer container-fluid bg-warning d-flex flex-column justify-content-center p-0' id='Nosotros'>
      <header className='container-lg vh-100 d-flex align-items-center justify-content-center'>
        <div ref={ref} className='bg-primary position-' style={{paddingTop:"200px", paddingBottom:"200px"}}>
        <h2 className='text-center'
        style={{
          transform: isInView ? "none" : "translateX(-250vw)",
          opacity: isInView ? "1" : "0",
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }}
        >¿Quién Somos?</h2>
        </div>   
      </header>
      <section className='Section__Footer row row-cols row-cols-md-3 text-center'>
        <div className="col mb-4">
          <img src={Person} width={300}></img>
        </div>
        <div className="col mb-4">
          <img src={Person} width={300}></img>
        </div>
        <div className="col mb-4">
          <img src={Person} width={300}></img>
        </div>
        <div className="col mb-4">
          <img src={Person} width={300}></img>
        </div>
        <div className="col mb-4">
          <img src={Person} width={300}></img>
        </div>
        <div className="col mb-4">
          <img src={Person} width={300}></img>
        </div>
      </section>
      <footer className='text-bg-dark container-fluid'>
        <span className='border border-white border-2'>
           <h3 className='pt-2'>Imaginarios de la Escena</h3>
        </span>
        <section>
          <ul>
            <li>Terminos y Condiciones</li>
            <li>Contacto</li>
            <li>Mas Info sobre la Investigacion</li>
          </ul>
        </section>
      </footer>
    </div>
  )
}

export default Footer