import React from 'react'

const Navbar = () => {
  return (
      <nav className="site-nav navbar navbar-expand-md navbar-dark w-100 position-fixed">
    <div className="container-fluid ">
      <a className="navbar-brand font-weight-normal" href="#page-hero">
      {/*   <i className="fas fa-cube mr-2"></i> */}Imaginarios de la Escena</a>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myTogglerNav"
        aria-controls="#myTogglerNav" aria-label="Toggle Navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <section className="collapse navbar-collapse" id="myTogglerNav">
        <div className="navbar-nav ms-auto text-uppercase">
          <a className="nav-item nav-link" href="#meet">meet</a>
          <a className="nav-item nav-link" href="#types">types</a>
          <a className="nav-item nav-link" href="#friend">friend</a>
          <a className="nav-item nav-link" href="#hire">hire</a>
        </div>
      </section>
    </div>
  </nav>
  )
}

export default Navbar