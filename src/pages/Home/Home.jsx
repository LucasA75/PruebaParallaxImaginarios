import LayoutBase from "../../layout/LayoutBase"; 
import Portada from "../../components/Portada/Portada";
import About from "../../components/About/About";
import Presentation from "../../components/CardPresentacion/Presentation";
import Resumen from "../../components/Resumen/Resumen";
import Frase from "../../components/Frase/Frase";
import Temas from "../../components/Temas/Temas";
import "./Home.css"

const Home = ()=> {
  return (
    <div style={{ fontFamily: "Lato" }}>
      <LayoutBase>
        <div className="colorPortadaHome"></div>
        <Portada
          titulo={"Feria Internacional de Diseño Teatral"}
          AvariableButton={true}
          imageBackground={'PQ1.png'}
        />
        <About
          titulo={"¿Que es la PQ ?"}
          parrafo1={
            "La Cuadrienal de diseño realizado en Praga es el evento más importante de la disciplina que se da cita cada cuatro años desde 1962. Cada año de realización del evento hay variados países en competencia en diferentes niveles, que son la muestra estudiantil, la muestra de profesionales y la muestra de arquitectura, promoviendo así la muestra de diseños en cada área de acuerdo con sus participantes."
          }
          parrafo2={
            "Las versiones que se revisaron fueron las de 1995, 1999, 2003, 2007, 2011 , 2015 y 2019, siendo ésta última el espacio que se encontró para poder realizar entrevistas e indagar en las interrogantes que han movilizado este proceso."
          }
          button={{link: 'https://pq.cz/',text: 'Mas información'}}
        />
        <Presentation />
        <Resumen
          titulo={"¿Productor, artista, creador?"}
          subtitulo={
            "Hemos empezado a cuestionarnos sobre el tipo de profesional que participa en la Cuadrienal al comparar los perfiles de los estudiantes de diseño teatral, escenográfico o escénico en diferentes instituciones. Esta comparación nos lleva a evaluar críticamente la formación y enfoques pedagógicos en distintas instituciones, lo que nos ayudará a entender mejor la diversidad de enfoques educativos en el diseño escénico."
          }
        />
        <Frase frase={"El arte no es lo que ves, sino lo que hace que otros vean."} artista={"Edgar Degas (1834-1917)"} />
        <Temas />
      </LayoutBase>
    </div>
  );
}

export default Home;
