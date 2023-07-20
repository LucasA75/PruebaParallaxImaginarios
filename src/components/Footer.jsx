import React from "react";
import Person from "../assets/person.jpg";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="Container__Footer container-fluid bg-warning d-flex flex-column justify-content-center p-0">
      <footer className="text-bg-dark py-3 container-fluid d-flex justify-content-between">
        <span className="">
          <h3 className="pt-2">Imaginarios de la Escena</h3>
        </span>
        <section className="me-5">
          <ul>
            <li>Terminos y Condiciones</li>
            <li>Contacto</li>
            <li>Mas Info sobre la Investigacion</li>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
