import "./App.css";
import LayoutHome from "./layout/LayoutHome";
import Portada from "./components/Portada/Portada";
import About from "./components/About/About";
import Presentation from "./components/CardPresentacion/Presentation";
import Resumen from "./components/Resumen/Resumen";
import Frase from "./components/Frase/Frase";
import Temas from "./components/Temas/Temas";

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
            "La Cuadrienal de diseño realizado en Praga es el evento más importante de la disciplina que se da cita cada cuatro años desde 1962. Cada año de realización del evento hay variados países en competencia en diferentes niveles, que son la muestra estudiantil, la muestra de profesionales y la muestra de arquitectura, promoviendo así la muestra de diseños en cada área de acuerdo con sus participantes."
          }
          parrafo2={
            "Las versiones que se revisaron fueron las de 1995, 1999, 2003, 2007, 2011 , 2015 y 2019, siendo ésta última el espacio que se encontró para poder realizar entrevistas e indagar en las interrogantes que han movilizado este proceso."
          }
        />
        <Presentation />
        <Resumen
          titulo={"¿Productor, artista, creador?"}
          subtitulo={
            "El principal elemento que nos sirvió para poder llegar al cuestionamiento del tipo de profesional que comparece en la cuadrienal, fue el contraste que fuimos haciendo de los perfiles de egreso de los estudiantes de acuerdo con distintos lugares de formación en diseño teatral, escenográfico o escénico."
          }
        />
        <Frase frase={"El arte no es lo que ves, sino lo que hace que otros vean."} artista={"Edgar Degas (1834-1917)"} />
        <Temas />
      </LayoutHome>
    </div>
  );
}

export default App;
