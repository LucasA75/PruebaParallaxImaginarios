import React from 'react'
import PQ from "../assets/PQ1.png";
const About = () => {
  return (
    <div className='Container_About container-fluid bg-danger' id='Info'>
      <section className='container-lg vh-100 d-flex align-items-center justify-content-center'>
      <h2 className='display-1 text-center'>Que es la PQ?</h2>
      </section>
      {/* Borrar esto despues */}
      Fotos, Fotos y Mas Fotos que se mueven con el scroll
      <main className='Main__About container-lg'>
        <section className='d-flex flex-column my-3'>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <p className='display-6 ms-xl-5'>Un lugar donde se juntan los mejores exponentes del arte escenico</p>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <figure className="Figure__About">
                <img src={PQ} width={700} className='img-thumbnail' />
                <figcaption className='font-weight-ligther'>PQ realizado en blabal- creditos: Jose Perez</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className='d-flex flex-column my-3'>
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
            <figure className="Figure__About">
                <img src={PQ} width={700} className='img-thumbnail' />
                <figcaption className='font-weight-ligther'>PQ realizado en blabal- creditos: Jose Perez</figcaption>
              </figure>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
            <p className='display-6 ms-xl-5'>Aqui puedes encontrar todo tipo de arte</p>
            </div>
          </div>
        </section>
        <section className='d-flex flex-column mt-3 pb-3'>
        <div className="row">
            <div className="col-md-6  d-flex justify-content-center align-items-center">
              <p className='display-6 ms-xl-5'>Lo mas importante es la libertad de expresion</p>
            </div>
            <div className="col-md-6  d-flex justify-content-center">
              <figure className="Figure__About">
                <img src={PQ} width={700} className='img-thumbnail' />
                <figcaption className='font-weight-ligther'>PQ realizado en blabal- creditos: Jose Perez</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About