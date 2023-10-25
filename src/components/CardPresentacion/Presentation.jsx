import Card from "./Card/Card";
import "./Presentacion.css"

const Presentation = () => {
  return (
    <section className="containerPresentacion pt-4" id="Info">
      <h2 className="tituloPresentacion">
        ¿Que encontramos en la PQ?
      </h2>
      <div className="cardsPresentacion" style={{maxWidth:"1200px"}}>
      <Card
        titulo={"Escena Teatral"}
        subtitulo={"Durante mucho tiempo, el diseño escénico se centró en la creación de la escenografía y elementos visuales para enriquecer la experiencia teatral, incorporando elementos materiales y simbólicos que el diseñador escénico utilizaba para desarrollar técnicas y lenguajes específicos."}
        img={"ArteEscenico.jpg"}
        orientacion={true}
      />
      <Card
        titulo={"Superación de las fronteras territoriales"}
        subtitulo={
          "Aunque se conoce desde 1962, en las últimas dos décadas, este evento ha crecido significativamente, convirtiéndose en un punto de encuentro para iniciativas locales y una plataforma internacional. "
        }
        img={"IMG_7586.jpg"}
      />
      <Card
        titulo={"Formación y el ejercicio profesional"}
        subtitulo={
          "Sabemos que desde 1995, siete generaciones de estudiantes y profesionales han participado en distintos tiempos y modos en la Cuadrienal de Praga, con el objetivo de llevar a la exhibición internacional una obra en representación de nuestro país, compartiendo la mirada, las preguntas y las ideas que animan este quehacer local."
        }
        img={"FormacionyEjercicio.jpg"}
        orientacion={true}
      />
      </div>
    </section>
  );
};

export default Presentation;
