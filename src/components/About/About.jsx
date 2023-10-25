import React from "react";
import "./About.css";
import Button from "../Button/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = ({ titulo, parrafo1, parrafo2, button }) => {
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
            {
              button &&  <Button toAdress={button.link} text={button.text} icon={faArrowRight}></Button>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
