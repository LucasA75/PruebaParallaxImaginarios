import React from "react";
import "./Temas.css";
import CardTemas from "./CardTemas/CardTemas";

const Temas = () => {
  const contenidoCard = [
    {
      titulo: "Chile en la PQ",
      subtitulo:
        "Forth forth moveth shall i unto midst tree, a fruit great subdue aevery be so a fowl",
    },
    {
      titulo: "Chile en la PQ",
      subtitulo:
        "Forth forth moveth shall i unto midst tree, a fruit great subdue aevery be so a fowl",
    },
    {
      titulo: "Chile en la PQ",
      subtitulo:
        "Forth forth moveth shall i unto midst tree, a fruit great subdue aevery be so a fowl",
    },
    {
      titulo: "Chile en la PQ",
      subtitulo:
        "Forth forth moveth shall i unto midst tree, a fruit great subdue aevery be so a fowl",
    },
  ];
  return (
    <div className="containerTemas">
      <h2>Temas</h2>
      <div className="cardsTemas">
        {contenidoCard.map((contenido) => (
          <CardTemas
            titulo={contenido.titulo}
            subtitulo={contenido.subtitulo}
          />
        ))}
      </div>
    </div>
  );
};

export default Temas;