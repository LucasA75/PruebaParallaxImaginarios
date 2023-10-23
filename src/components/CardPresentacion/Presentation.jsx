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
        subtitulo={"Durante mucho tiempo, la escena teatral se constituyó como la actividad central del diseño escénico, en donde lo performativo radica en aquello que se pone en acto y completa la experiencia teatral. Así, la realización y actualización de la escena se organizan y articulan sobre la base de la distribución de elementos materiales y simbólico/conceptuales con los que el diseñador escénico trabaja, elabora lenguajes propios, además de desarrollar técnicas y tecnologías específicas."}
        img={"ArteEscenico.jpg"}
        orientacion={true}
      />
      <Card
        titulo={"Superación de las fronteras territoriales"}
        subtitulo={
          "Si bien su ocurrencia data desde 1962 y su existencia era bien conocida en el ambiente profesional especializado de nuestro país, detectamos que es en el último veintenio que su crecimiento natural se ha expandido más allá del evento en sí mismo, constituyendo hoy un referente permanente de actividad múltiple, espacio de reunión donde se traman iniciativas locales singulares y se abren al amplio contexto internacional. "
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
