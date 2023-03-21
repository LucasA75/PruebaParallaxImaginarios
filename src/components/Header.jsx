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
    {/*         <motion.div
                style={{ width: "300px", background: "blue", height: "300px", opacity:0.2}}
                drag
                whileHover={{ opacity: 1 }}
                whileTap={{
                    opacity: 1,
                    scale: 1.05,
                    boxShadow: "0px 5px 8px #222",
                }}
                whileDrag={{ scale: 1.1, boxShadow: "0px 10px 16px #222" }}
                transition={{ duration: 0.6 }}
            >asdasd</motion.div> */}
        </div>
    )
}

export default Header