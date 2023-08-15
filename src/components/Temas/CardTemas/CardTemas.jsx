import React from "react";
import "./CardTemas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";

const CardTemas = ({ titulo, subtitulo }) => {
  return (
    <div className="cardContainer">
      <div className="containerIconCard">
        <FontAwesomeIcon size="xl" className="font-icon" icon={faBrush} />
      </div>
      <div className="textCard">
        <h5>{titulo}</h5>
        <p>{subtitulo}</p>
        <button>Leer Más</button>
      </div>
    </div>
  );
};

export default CardTemas;
