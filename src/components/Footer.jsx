import React from 'react'
import Person from "../assets/person.jpg"
import { useRef,useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

  const h2Ref = useRef(null)
  useEffect(()=>{
      const element = h2Ref.current;

      

      gsap.fromTo(element,{y:-400},{y:0, duration:3, scrollTrigger:{
          markers: true,
          start:"-500",
          end:"+500",
          trigger: element,
      }
      })
  },[])


  return (
    <div className='Container__Footer container-fluid bg-warning d-flex flex-column justify-content-center p-0' id='Nosotros'>
      <header className='container-lg vh-100 d-flex align-items-center justify-content-center'>
        <h2 className='text-center' ref={h2Ref}>¿Quién Somos?</h2>
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