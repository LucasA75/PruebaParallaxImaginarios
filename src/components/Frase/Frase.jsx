import React from "react";
import "./Frase.css";

const Frase = ({frase, artista }) => {
  return (
    <div className="containerFrase">
      <div className="textosFrase">
        <img />
        <h5>
          “ {frase}
          ”
        </h5>
        <p>{artista}</p>
      </div>
    </div>
  );
};

export default Frase;
