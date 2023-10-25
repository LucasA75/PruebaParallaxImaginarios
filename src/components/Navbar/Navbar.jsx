import React,{ useState} from "react";
import useScreenDimensions from "../../util/useScreenDimensions" 
import "./Navbar.css";
import IconMobile from "./IconMobile";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [pulsed, setPulsed] = useState(false);
  const { screenWidth } = useScreenDimensions();
  const location = useLocation().pathname;

    return (
    <nav className={`site-nav navbar-expand-md navbar-dark w-100 py-3 ${pulsed && "pulsed"} `} >
      <div className={`navContainer container-fluid  ${pulsed && "navContainerPulsed"}`}>
        <Link className="navbar-brand font-weight-normal" to={'/'}>
          <p className="m-0 h4">Imaginarios de la Escena</p>
        </Link>
        {screenWidth < 767 ? 
          <IconMobile pulsed={setPulsed}/>
         : 
         (
          location === '/' &&
          <section className={`NavLinks`}>
            <div
              className="navbar-nav ms-auto text-uppercase"
              style={{ gap: "30px" }}
            >
              <a
                className="nav-item position-relative nav-link"
                href="#Info"
              >
                Info
              </a>
              <a className="nav-item position-relative nav-link" href={"#Temas"}>
                Temas
              </a>
              <Link to="/Nosotros"
                className="nav-item position-relative nav-link"
              >Nosotros</Link>              
            </div>
          </section>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
