import React from "react";
import "./CardTemas.css";

const CardTemas = ({ titulo, subtitulo }) => {
  return (
    <div className="cardContainer">
      <img className="iconoCard" />
      <div className="textCard">
        <h5>{titulo}</h5>
        <p>{subtitulo}</p>
        <button>Leer Más</button>
      </div>
    </div>
  );
};

export default CardTemas;
