import React from "react";
import "./Resumen.css";
import Button from "../Button/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        <Button text={'Leer Más'} icon={faArrowRight}></Button>
      </div>
    </section>
  );
};

export default Resumen;
