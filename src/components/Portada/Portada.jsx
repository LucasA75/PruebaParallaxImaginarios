import React from "react";
import "./Portada.css";

const Portada = ({ titulo, subTitulo }) => {
  return (
    <div className="Header__Container " id="Inicio">
      <section class="layoutHero text-light">
        <h1 class="portadaTitle">{titulo}</h1>
        <button>Descubre Más</button>
      </section>
    </div>
  );
};

export default Portada;
