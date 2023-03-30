import React, { useRef } from 'react'
import PQ from "../assets/PQ1.png";
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const About = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className='Container_About container-fluid' id='Sobre'>
      <section ref={ref} className='container-lg vh-100 d-flex align-items-center justify-content-center'>
        <h2 className='display-1 text-center parrafo'
          style={{
            transform: isInView ? "none" : "translateX(-250vw)",
            opacity: isInView ? "1" : "0",
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}

        >
        ¿Que es la PQ ?
        </h2>
      </section>
      <main className='Main__About container-lg'>
        <div className='row min-vh-100'>
          <div className='Main__Col1 col-md-3 display-1 '>
            <p className='border-bottom border-4 border-dark pb-5'>
              ¿Que es la PQ?
            </p>
          </div>
          <div className='Main__Col2 col-md-9'>
            <section className='d-flex flex-column my-5'>
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <p className='display-6 ms-xl-5 parrafo'>Un lugar donde se juntan los mejores exponentes del arte escenico</p>
                </div>
                <div className=" col-md-6 d-flex justify-content-center">
                  <figure className="Figure__About">
                    <img src={PQ} width={700} className='img-thumbnail' />
                    <figcaption className='font-weight-ligther'>PQ realizado en blabal- creditos: Jose Perez</figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section className='d-flex flex-column mt-5 pb-3'>
              <div className="row">
                <div className="col-md-6  d-flex justify-content-center align-items-center">
                  <p className='display-6 ms-xl-5'>Aqui puedes encontrar todo tipo de arte</p>
                </div>
                <div className="col-md-6  d-flex justify-content-center">
                  <figure className="Figure__About">
                    <img src={PQ} width={700} className='img-thumbnail' />
                    <figcaption className='font-weight-ligther'>PQ realizado en blabal- creditos: Jose Perez</figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section className='d-flex flex-column mt-5 pb-3'>
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
          </div>

        </div>
      </main>
    </div>
  )
}

export default About