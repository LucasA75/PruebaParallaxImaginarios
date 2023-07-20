import React from 'react'
import PQ from "../assets/PQ1.png";
import { useRef } from 'react';
import { useInView } from 'framer-motion';


const Chile = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className='Container__Info container-fluid m-0 p-3 bg-dark' id='Chile'>
      <section ref={ref} className='container-lg min-vh-100 d-flex align-items-center justify-content-center'>
        <h2 className='text-light'
          style={{
            transform: isInView ? "none" : "translateX(-250vw)",
            opacity: isInView ? "1" : "0",
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}

        >Relación de la PQ con Chile</h2>
      </section>
      <section className='container-lg d-flex flex-column'>
        <h5 className='text-white display-6 py-5'>Tuvimos la oportunidad de representar a <span className='Chile__Section__span'>Chile</span> en la PQ y poder nutrirnos de todo el arte que se muestra
          para poder asi traer todo ese conocimiento a nuestra tierra
        </h5>
        <img src={PQ} className='img-thumbnail' />
      </section>
      <section className='container-lg'>
        <p className='text-white m-0 display-6 py-5'><span className='Chile__Section__span'>Nuestro objetivo</span> es que los que esten interesados en el arte teatral se beneficien de nuestra investigacion
          y puedan brindarles una nueva perspectiva o forma de vista del arte escenico
        </p>
        <section className="Chile__Section__img row row-col-3 mt-3 pb-5">
          <div className="col">
            <img src={PQ} width={700} className='img-thumbnail' />
          </div>
          <div className="col">
            <img src={PQ} width={700} className='img-thumbnail' />
          </div>
          <div className="col">
            <img src={PQ} width={700} className='img-thumbnail' />
          </div>
        </section>
      </section>
    </div>
  )
}

export default Chile