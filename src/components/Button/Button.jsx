import React from "react";
import estilos from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Button = ({ text, style, icon, toAdress }) => {
  let classNameButton;

  if (style === "fill") {
    classNameButton = estilos.fill;
  } else if (style === "noFill") {
    classNameButton = estilos.noFill;
  } else {
    classNameButton = estilos.default;
  }

  return (
    <button className={classNameButton}>
      <Link to={toAdress}>
        {text}
      </Link>
      {icon && (
        <FontAwesomeIcon className={estilos.iconButton} icon={icon} size="2xl" />
      )}
    </button>
  );
};

export default Button;
