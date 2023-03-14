import React from 'react'
import Person from "/person.jpg"

const Footer = () => {
  return (
    <div className='Container__Footer container-fluid bg-warning' id='Sobre'>
      <header>
        <h2 className='text-center'>Quien Hizo parte de este proyecto?</h2>
      </header>
      <p>Aqui fotos de todos los que participaron - Creo que quedaria bien con un filtro monocromatico</p>
      <section className=' d-flex row-cols-3'>
        <div className="col">
          <img src={Person} width={300}></img>
        </div>
        <div className="col">
          <img src={Person}width={300}></img>
        </div>
        <div className="col">
          <img src={Person}width={300}></img>
        </div> 
      </section>
      <section className=' d-flex mt-4 row-cols-3 '>
        <div className="col">
          <img src={Person} width={300}></img>
        </div>
        <div className="col">
          <img src={Person}width={300}></img>
        </div>
        <div className="col">
          <img src={Person}width={300}></img>
        </div> 
      </section>
    <footer>
      Terminos y condiciones - mas info - fotos de licencias ... etc
    </footer>
    </div>
  )
}

export default Footer