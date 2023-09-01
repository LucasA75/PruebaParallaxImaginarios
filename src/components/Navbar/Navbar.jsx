import React,{useState} from "react";
import useScreenDimensions from "../../util/useScreenDimensions" 
import "./Navbar.css";
import IconMobile from "./IconMobile";

const Navbar = () => {
  const [pulsed, setPulsed] = useState(false);
  const { screenWidth } = useScreenDimensions();

  return (
    <nav className={`site-nav navbar-expand-md navbar-dark w-100 py-2 ${pulsed && "pulsed"} `} >
      <div className={`navContainer container-fluid  ${pulsed && "navContainerPulsed"}`}>
        <a className="navbar-brand font-weight-normal" href="#Inicio">
          <p className="m-0 h4">Imaginarios de la Escena</p>
        </a>
        {screenWidth < 767 ? 
          <IconMobile pulsed={setPulsed}/>
         : (
          <section className={`NavLinks`}>
            <div
              className="navbar-nav ms-auto text-uppercase"
              style={{ gap: "30px" }}
            >
              <a
                className="nav-item position-relative nav-link"
                href="#queEncontramosEnLaPQ"
              >
                Info
              </a>
              <a className="nav-item position-relative nav-link" href="#Temas">
                Temas
              </a>
              <a
                className="nav-item position-relative nav-link"
                href="#Nosotros"
              >
                Sobre Nosotros
              </a>
            </div>
          </section>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
