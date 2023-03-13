import React from 'react'
import PQ from '../../public/PQ1.png';
const About = () => {
  return (
    <div className='Container_About container-fluid bg-danger'>
        <h3 className='display-1'>Que es la PQ?</h3>
            Fotos, Fotos y Mas Fotos que se mueven con el scroll
            <main>
              <div>
              <h4 className='display-3'>La PQ es:</h4>
              <p className='display-6'>Un lugar donde se juntan los mejores exponentes del arte escenico</p>
              <figure>
                <img src={PQ} width={500}/>
                <figcaption className='text-white'>PQ realizado en blabal- creditos: Jose Perez</figcaption>
              </figure>
              </div>
              <div>
                <p>Aqui puedes encontrar todo tipo de arte</p>
              </div>
              <div>
                <p>Lo mas importante es la libertad de expresion</p>
              </div>
            </main>
        </div>
  )
}

export default About