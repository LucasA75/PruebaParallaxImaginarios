import React from 'react'
import PQ from '/PQ1.png';
const About = () => {
  return (
    <div className='Container_About container-fluid bg-danger'>
      <h3 className='display-1 text-center'>Que es la PQ?</h3>
      {/* Borrar esto despues */}
      Fotos, Fotos y Mas Fotos que se mueven con el scroll
      <main>
        <section className='d-flex flex-column '>
          <h4 className='display-3'>La PQ es:</h4>
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <p className='display-6 ms-xl-5'>Un lugar donde se juntan los mejores exponentes del arte escenico</p>
            </div>
            <div className="col d-flex justify-content-center">
              <figure className="Figure__About">
                <img src={PQ} width={700} className='img-thumbnail' />
                <figcaption className='font-weight-ligther'>PQ realizado en blabal- creditos: Jose Perez</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className='d-flex flex-column'>
        <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
            <figure className="Figure__About">
                <img src={PQ} width={700} className='img-thumbnail' />
                <figcaption className='font-weight-ligther'>PQ realizado en blabal- creditos: Jose Perez</figcaption>
              </figure>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
            <p className='display-6 ms-xl-5'>Aqui puedes encontrar todo tipo de arte</p>
            </div>
          </div>
        </section>
        <section className='d-flex flex-column'>
        <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <p className='display-6 ms-xl-5'>Lo mas importante es la libertad de expresion</p>
            </div>
            <div className="col d-flex justify-content-center">
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