import React from "react";
import "./Portada.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portada = ({ titulo, subTitulo }) => {
  return (
    <div className="headerContainer " id="Inicio">
      <section class="layoutHero text-light">
        <h1 class="portadaTitle">{titulo}</h1>
        <button>Descubre Más <FontAwesomeIcon className="icon-button" icon={faCircle} size="2xs"/></button>
      </section>
    </div>
  );
};

export default Portada;
