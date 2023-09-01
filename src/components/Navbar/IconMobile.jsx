import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./iconMobile.css"

const IconMobile = ({pulsed}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const botonAbierto = () => {
    setNavbarOpen(!navbarOpen);
    pulsed(!navbarOpen);
  };

  return (
    <>
      {navbarOpen ? (
        <>
        <section className="NavLinksMobile" >
          <a className="linkNavbarMobile" href="#queEncontramosEnLaPQ" onClick={botonAbierto}>Info</a>
          <a className="linkNavbarMobile" href="#Temas" onClick={botonAbierto}>Temas</a>
          <a className="linkNavbarMobile" href="#Nosotros" onClick={botonAbierto}>Sobre Nosotros</a>
        </section>
        </>
      ) : (
        <div className="navbar-icon" onClick={botonAbierto}>
          <FontAwesomeIcon icon={faBars} color="white" size="xl" />
        </div>
      )}
    </>
  );
};

export default IconMobile;
