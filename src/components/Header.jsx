import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className='Header__Container container-fluid bg-warning' id='Inicio'>
            <section class="layout-hero d-flex flex-column text-light min-vh-100">
                <div class="header-content d-flex flex-column flex-fill">
                    <div class="d-flex flex-column container justify-content-center align-items-center flex-fill text-center">
                        <h1 class="header-title display-1 ">
                            Imaginarios de la Escena
                        </h1>
                        <p class="header-subtitle lead font-weight-lighter">
                            Nuestra investigacion abrira muchas puertas hacia el arte escenico. <br></br>
                            Conoce todo sobre esta
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header