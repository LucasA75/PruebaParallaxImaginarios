import React from "react";
import "./Resumen.css";

const Resumen = ({ titulo, subtitulo }) => {
  return (
    <section className="containerResumen">
      <div className="fotosResumen">
        <img src="bocetonegro.jpg" />
        <img src="2019-06-16 13.15.40.jpg" />
        <img src="IMG_8838.jpg" />
      </div>
      <div className="parrafoResumen">
        <h4>{titulo}</h4>
        <p>{subtitulo}</p>
        <button>Leer Más</button>
      </div>
    </section>
  );
};

export default Resumen;
