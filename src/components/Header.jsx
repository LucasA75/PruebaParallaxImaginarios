import React from 'react'

const Header = () => {
    return (
        <div className='Header__Container container-fluid bg-warning'>
            <section class="layout-hero d-flex flex-column text-light min-vh-100">
                <div class="header-content d-flex flex-column flex-fill">
                    <div class="d-flex flex-column container justify-content-center align-items-center flex-fill text-center">
                        <h3 class="header-title display-2 font-weight-lighter">
                            Imaginarios de la Escena
                        </h3>
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