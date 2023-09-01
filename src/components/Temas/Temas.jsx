import React from "react";
import "./Temas.css";
import CardTemas from "./CardTemas/CardTemas";
import useScreenDimensions from "../../util/useScreenDimensions";

const Temas = () => {
  const contenidoCard = [
    {
      titulo: "Chile en la PQ",
      subtitulo:
        "Por algunos años, estudiantes chilenos participaron en la PQ, mira sus presentaciones",
      icono: 3,
    },
    {
      titulo: "Arte Teatral",
      subtitulo:
        "El arte teatral en la PQ tiene una importancia gigantesca, ve algunas de sus mejores obras",
        icono:2,
    },
    {
      titulo: "Nuestra Investigacion",
      subtitulo:
      "Un equipo de investigacion muy capaz visito la PQ para ver las presentaciones",
      icono: 1,
    },
  ];
  const { screenWidth } = useScreenDimensions();
  return (
    <>
      {screenWidth < 1300 ? (
        <>
          <div className="containerTemasMobile" id="Temas">
            <h2>Temas</h2>
            <div className="cardsTemasMobile">
              {contenidoCard.map((contenido) => (
                <CardTemas
                  key={contenido.titulo}
                  titulo={contenido.titulo}
                  subtitulo={contenido.subtitulo}
                  icono={contenido.icono}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="containerTemas" id="Temas">
            <h2>Temas</h2>
            <div className="cardsTemas">
              {contenidoCard.map((contenido) => (
                <CardTemas
                  key={contenido.titulo}
                  titulo={contenido.titulo}
                  subtitulo={contenido.subtitulo}
                  icono={contenido.icono}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Temas;
