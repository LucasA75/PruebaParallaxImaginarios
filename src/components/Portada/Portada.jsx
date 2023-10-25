import React from "react";
import "./Portada.css";
import Button from "../Button/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        <Button text={'Descubre Más'} style={'noFill'} icon={faArrowRight}></Button>
        }
      </section>
    </div>
  );
};

export default Portada;
