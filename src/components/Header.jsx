import React from 'react'
import { useRef,useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Header = () => {

    const h1Ref = useRef(null)
    useEffect(()=>{
        const elemento = h1Ref.current;
        gsap.fromTo(elemento,{marginTop:-400},{marginTop:0, duration:3})
    })

    return (
        <div className='Header__Container container-fluid bg-warning' id='Inicio'>
            <section class="layout-hero d-flex flex-column text-light min-vh-100">
                <div class="header-content d-flex flex-column flex-fill">
                    <div class="d-flex flex-column container justify-content-center align-items-center flex-fill text-center">
                        <h1 class="header-title display-1 " ref={h1Ref}>
                            Imaginarios de la Escena
                        </h1>
                        <p class="header-subtitle lead font-weight-lighter">
                            Nuestra investigacion abrira muchas puertas hacia el arte escenico.<br /> Brindaremos info
                            a todas las personas en esta pagina bla bvla
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header