import React from "react";
import { motion } from "framer-motion";
import "./Portada.css";

const Portada = ({ titulo, subTitulo }) => {
  return (
    <div className="Header__Container " id="Inicio">
      <section class="layout-hero d-flex flex-column text-light">
        <h1 class="portadaTitle">{titulo}</h1>
        {/* <p class="header-subtitle lead font-weight-lighter">{subTitulo}</p> */}
        <button>Descubre Más</button>
      </section>
    </div>
  );
};

export default Portada;
