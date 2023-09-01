import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="generalFooter">
      <div className="containerFooter">
        <div className="datosPaginaFooter">
          <h5>Imaginarios en Escena</h5>
          <p>
            Esta investigación se desarrolló gracias al trabajo constante de un
            equipo formidable.
          </p>
        </div>
        <div className="emailFooter">
          <p>Suscribete para recibir mas info</p>
          <label className="email">
            <input placeholder="Tu Email" name="email"></input>
          </label>
        </div>
        <div className="datosContactoFooter">
          <a href="#">
            <FontAwesomeIcon
              size="xl"
              className="font-icon"
              icon={faFacebook}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon size="xl" className="font-icon" icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon
              size="xl"
              className="font-icon"
              icon={faInstagram}
            />
          </a>
        </div>
        <div className="masInfoFooter">
          <ul>
            <li><span>Sobre Nosotros</span></li>
            <li><span>Nuestro Equipo</span></li>
            <li><span>Nuestro Trabajo</span></li>
          </ul>
          <ul>
            <li><span>Terminos y condiciones</span></li>
            <li><span>Contacto</span></li>
            <li><span>En Proceso</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
