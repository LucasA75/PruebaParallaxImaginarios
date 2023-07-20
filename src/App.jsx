import { useState } from "react";
import "./App.css";
import Chile from "./components/PQConChile";
import LayoutHome from "./layout/LayoutHome";
import Equipo from "./components/Equipo";
import Portada from "./components/Portada/Portada";
import About from "./components/About/About";

function App() {
  return (
    <div style={{ fontFamily: "Lato" }}>
      <LayoutHome>
        <Portada
          titulo={"Feria Internacional de Diseño Teatral"}
          subTitulo={
            "Nuestra investigacion abrira muchas puerta hacia el arte escenico. Conoce todo sobre esta"
          }
        />
        <About
          titulo={"¿Que es la PQ ?"}
          parrafo1={
            "Over 10 years of combined experience, and know a thing or two about designing websites and mobile apps."
          }
          parrafo2={
            "Were divided, a moved night light darkness winged may also make man for. Winged the for Earth creeping appear evening, gathered Forth so he. Life that dry of created greater can't also gathered female green."
          }
        />
        <Chile />
        <Equipo />
      </LayoutHome>
    </div>
  );
}

export default App;
