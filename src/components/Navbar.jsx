import React from "react";

const Navbar = () => {
  return (
    <nav className="site-nav navbar-expand-md navbar-dark w-100 py-2">
      <div className="navContainer container-fluid d-flex align-items-center">
        <a className="navbar-brand font-weight-normal" href="#Inicio">
          <p className="m-0 h4">Imaginarios de la Escena</p>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#myTogglerNav"
          aria-controls="#myTogglerNav"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <section className="collapse navbar-collapse" id="myTogglerNav">
          <div
            className="navbar-nav ms-auto text-uppercase"
            style={{ gap: "30px" }}
          >
            <a className="nav-item position-relative nav-link" href="#Sobre">
              Info
            </a>
            <a className="nav-item position-relative nav-link" href="#Chile">
              Chile en la PQ
            </a>
            <a className="nav-item position-relative nav-link" href="#Nosotros">
              Sobre Nosotros
            </a>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
