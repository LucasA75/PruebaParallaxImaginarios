import React, { useRef, useEffect } from "react";
import Person from "../assets/person.jpg";
import { useInView } from "framer-motion";
import "./css/Equipo.css";

const Equipo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="Container__Footer container-fluid bg-warning d-flex flex-column justify-content-center p-0">
      <header className="container-lg vh-100 d-flex align-items-center justify-content-center">
        <div
          ref={ref}
          className=""
          style={{ paddingTop: "200px", paddingBottom: "200px" }}
        >
          <h2
            className="text-center"
            style={{
              transform: isInView ? "none" : "translateX(-250vw)",
              opacity: isInView ? "1" : "0",
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
            id="Nosotros"
          >
            ¿Quién Somos?
          </h2>
        </div>
      </header>
      <section className="imagenesEquipo">
        <img src={Person} width={300}></img>
        <img src={Person} width={300}></img>
        <img src={Person} width={300}></img>
        <img src={Person} width={300}></img>
        <img src={Person} width={300}></img>
        <img src={Person} width={300}></img>
      </section>
    </div>
  );
};

export default Equipo;
