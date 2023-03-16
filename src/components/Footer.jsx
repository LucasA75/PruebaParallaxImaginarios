import React from 'react'
import Person from "../assets/person.jpg"

const Footer = () => {
  return (
    <div className='Container__Footer container-fluid bg-warning d-flex flex-column justify-content-center ' id='Nosotros'>
      <header className='container-lg vh-100 d-flex align-items-center justify-content-center'>
        <h2 className='text-center'>¿Quién Somos?</h2>
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
      <footer>
        Terminos y condiciones - mas info - fotos de licencias ... etc
      </footer>
    </div>
  )
}

export default Footer