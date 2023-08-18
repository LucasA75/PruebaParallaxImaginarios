import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="generalFooter">
      <div className="containerFooter">
      <div className="datosPaginaFooter">
        <h5>Imaginarios en Escena</h5>
        <p>Este proyecto fue financiado por nose quien , aqui irian los datos o alguna info relacionada
        </p>
      </div>
      <div className="emailFooter">
        <p>Suscribete para recibir mas info</p>
        <label className="email">
        <input placeholder="Tu Email" name="email"></input>
        </label>
      </div>
      <div className="datosContactoFooter">
        <p>Iconos de Redes sociales</p>
      </div>
      <div className="masInfoFooter">
        <ul>
          <li>Sobre Nosotros</li>
          <li>Nuestro Equipo</li>
          <li>Nuestro Trabajo</li>
        </ul>
        <ul>
          <li>Terminos y condiciones</li>
          <li>Contacto</li>
          <li>En Proceso</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;
