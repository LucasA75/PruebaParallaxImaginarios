import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./iconMobile.css"
import { Link, useLocation } from "react-router-dom";

const IconMobile = ({pulsed}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation().pathname;

  const botonAbierto = () => {
    setNavbarOpen(!navbarOpen);
    pulsed(!navbarOpen);
  };



  return (
    <>{
      location === '/' &&
      (navbarOpen ? (
        <>
        <section className="NavLinksMobile" >
          <a className="linkNavbarMobile" href="#queEncontramosEnLaPQ" onClick={botonAbierto}>Info</a>
          <a className="linkNavbarMobile" href="#Temas" onClick={botonAbierto}>Temas</a>
          <Link className="linkNavbarMobile" to="/Nosotros" onClick={botonAbierto}>Nosotros</Link>
        </section>
        </>
      ) : (
        <div className="navbar-icon" onClick={botonAbierto}>
          <FontAwesomeIcon icon={faBars} color="white" size="xl" />
        </div>
      ))
    }
    </>
  );
};

export default IconMobile;
