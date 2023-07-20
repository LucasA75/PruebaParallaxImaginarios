import React from "react";
import "./About.css";

const About = ({ titulo, parrafo1, parrafo2 }) => {
  return (
    <>
      <section className="containerAbout">
        <h2 className="tituloAbout">{titulo}</h2>
        <div className="parrafosAbout">
          <div className="parrafoAbout">
            <p>{parrafo1}</p>
          </div>
          <div className="parrafoAbout">
            <p>{parrafo2}</p>
            {/* TODO: Agregar punto y orden */}
            <button>Mas Información</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
