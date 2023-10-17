import React from "react";
import "./Portada.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portada = ({titulo, AvariableButton,subTitulo,imageBackground}) => {

  const estiloLayoutHero = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url(${imageBackground})`,
  };

  return (
    <div className="headerContainer" id="Inicio">
      <section className="layoutHero text-light" style={estiloLayoutHero}>
        <h1 className="portadaTitle">{titulo}</h1>
        <p>{subTitulo}</p>
        {AvariableButton && 
        <button>Descubre Más <FontAwesomeIcon className="icon-button" icon={faCircle} size="2xs"/></button>
        }
      </section>
    </div>
  );
};

export default Portada;
