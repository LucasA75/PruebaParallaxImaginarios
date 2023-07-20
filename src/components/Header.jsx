import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="Header__Container " id="Inicio">
      <section class="layout-hero d-flex flex-column text-light">
        <div class="header-content d-flex flex-column flex-fill">
          <div class="d-flex flex-column justify-content-center align-items-center flex-fill text-center">
            <h1 class="header-title display-1 ">Imaginarios de la Escena</h1>
            <p class="header-subtitle lead font-weight-lighter">
              Nuestra investigacion abrira muchas puertas hacia el arte
              escenico. <br></br>
              Conoce todo sobre esta
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
