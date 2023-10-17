import React from "react";
import "./CardTemas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const CardTemas = ({ titulo, subtitulo, icono,direccion }) => {

  const seleccionIcono ={
    1 : faBrush,
    2: faPalette,
    3: faFontAwesome,
  }

  return (
    <div className="cardContainer">
      <div className="containerIconCard">
        <FontAwesomeIcon size="xl" className="font-icon" icon={seleccionIcono[icono]} />
      </div>
      <div className="textCard">
        <h5>{titulo}</h5>
        <p>{subtitulo}</p>
        <Link className="enlaceCard" to={direccion}>Leer Más</Link>
      </div>
    </div>
  );
};

export default CardTemas;
