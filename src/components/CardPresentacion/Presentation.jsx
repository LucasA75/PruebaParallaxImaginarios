import Card from "./Card/Card";
import "./Presentacion.css"

const Presentation = () => {
  return (
    <section className="containerPresentacion pt-4" id="queEncontramosEnLaPQ">
      <h2 className="tituloPresentacion">
        ¿Que encontramos en la PQ?
      </h2>
      <div className="cardsPresentacion" style={{maxWidth:"1200px"}}>
      <Card
        titulo={"Arte Teatral"}
        subtitulo={"El arte es primordial en nuestra vida"}
        img={"IMG_8018.jpg"}
        orientacion={true}
      />
      <Card
        titulo={"Creacion de cosas"}
        subtitulo={
          "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) "
        }
        img={"IMG_7586.jpg"}
      />
      <Card
        titulo={"Arte Teatral"}
        subtitulo={
          "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos"
        }
        img={"IMG_8018.jpg"}
        orientacion={true}
      />
      </div>
    </section>
  );
};

export default Presentation;
