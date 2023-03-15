import React from 'react'
import PQ from "../assets/PQ1.png";

const Info = () => {
  return (
    <div className='Container__Info container-fluid m-0 p-3 bg-dark' id='Chile'>
      <h2 className='text-light text-center'>¿Cuál es la relación de la PQ con Chile?</h2>
      <section className='container-lg d-flex flex-column'>
        <h5 className='text-white display-6'>Tuvimos la oportunidad de representar a Chile en la PQ y poder nutrirnos de todo el arte que se muestra
          para poder asi traer todo ese conocimiento a nuestra tierra
        </h5>
        <img src={PQ} className='img-thumbnail' />
      </section>
      <section className='container-lg'>
      <p className='text-white m-0 display-6'>Nuestro Objetivo es que los que esten interesados en el arte teatral se beneficien de nuestra investigacion
          y puedan brindarles una nueva perspectiva o forma de vista del arte escenico
        </p>
       <p className='text-white'>
        Aqui va yun grupo de imagenes que se mueven de arriba a abajo segun el scroll
        </p>
        <div className="row row-col-3">
          <div className="col">
          <img src={PQ} width={700} className='img-thumbnail' />
          </div>
          <div className="col">
          <img src={PQ} width={700} className='img-thumbnail' />
          </div>
          <div className="col">
          <img src={PQ} width={700} className='img-thumbnail' />
          </div>
          </div> 
      </section>
    </div>
  )
}

export default Info