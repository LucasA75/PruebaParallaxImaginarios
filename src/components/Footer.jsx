import React from 'react'
import Person from "../assets/person.jpg"

const Footer = () => {
  return (
    <div className='Container__Footer container-fluid bg-warning d-flex flex-column justify-content-center ' id='Sobre'>
      <header>
        <h2 className='text-center'>¿Quién hizo parte de este proyecto?</h2>
      </header>
      <p>Aqui fotos de todos los que participaron - Creo que quedaria bien con un filtro monocromatico</p>
      <section className='row row-cols row-cols-md-3 text-center'>
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