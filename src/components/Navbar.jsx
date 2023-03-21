import React from 'react'

const Navbar = () => {

  return (
    <nav className="site-nav navbar navbar-expand-md navbar-dark w-100 position-fixed py-2 bg-dark">
      <div className="Nav-Container container-fluid d-flex align-items-center">
        <a className="navbar-brand font-weight-normal" href="#Inicio">
          {/*   <i className="fas fa-cube mr-2"></i> */}
          <p className='m-0'>
            Imaginarios de la Escena
          </p>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myTogglerNav"
          aria-controls="#myTogglerNav" aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <section className="collapse navbar-collapse" id="myTogglerNav">
          <div className="navbar-nav ms-auto text-uppercase">
            <a className="nav-item position-relative nav-link" href="#Sobre">Info</a>
            <a className="nav-item position-relative nav-link" href="#Chile">Chile en la PQ</a>
            <a className="nav-item position-relative nav-link" href="#Nosotros">Sobre Nosotros</a>
          </div>
        </section>
      </div>
    </nav>
  )
}

export default Navbar