import React from "react";
import LayoutBase from "../../layout/LayoutBase";
import Portada from "../../components/Portada/Portada";
import "./ChileEnLaPQ.css";
import Card from "../../components/CardPresentacion/Card/Card";
import Carrusel from "../../components/Carrusel/Carrusel";

const ChileEnLaPQ = () => {

  const packImg2019 =[
    'ChileEnLaPQ/2019/IMG_7593.JPG',
    'ChileEnLaPQ/2019/2019-06-16 13.16.13.jpg',
    'ChileEnLaPQ/2019/IMG_7516.JPG',
    'ChileEnLaPQ/2019/IMG_7594.JPG',
  ]
  const packImg2015 =[
    'ChileEnLaPQ/2015/_DSC9796.JPG',
    'ChileEnLaPQ/2015/03 lazo_2.JPG',
    'ChileEnLaPQ/2015/04 romero_2 el otro.jpg',
    'ChileEnLaPQ/2015/08 Ruiz-Romero_2.jpg',
    'ChileEnLaPQ/2015/04 10 Romero_2.jpg',
    'ChileEnLaPQ/2015/04 21 Bagnara_2.jpg',
    'ChileEnLaPQ/2015/11012356_10206691071937925_135436689505917575_n.jpg',
    'ChileEnLaPQ/2015/IMG_20151202_161227.jpg',
    
  ]

  const packImg2011 =[
    'ChileEnLaPQ/2011/242177_2071967473788_1082928631_32510528_3226374_o.jpg',
    'ChileEnLaPQ/2011/bocetonegro.jpg',
    'ChileEnLaPQ/2011/P3150058.JPG',
    'ChileEnLaPQ/2011/P3150058.JPG',
    'ChileEnLaPQ/2011/255992_2071968353810_1082928631_32510529_6432569_o.jpg',
  ]

  const packImg2007 =[
    'ChileEnLaPQ/2007/00446.JPG',
    'ChileEnLaPQ/2007/DSC03440.JPG ',
    'ChileEnLaPQ/2007/Fotos importadas 00025.JPG',
    'ChileEnLaPQ/2007/montando en la cuadrienal 24.JPG',
    'ChileEnLaPQ/2007/profesionales 095 copia.JPG',

  ]

  const packImg2003 =[
    'ChileEnLaPQ/2003/patio.avif',
    'ChileEnLaPQ/2003/08enPraga.avif',
    'ChileEnLaPQ/2003/10enPraga.avif',
    'ChileEnLaPQ/2003/MAC43.avif',
    'ChileEnLaPQ/2003/MAC51.avif',
    'ChileEnLaPQ/2003/MAC87.avif',
  ]

  const packImg1999 =[
    'ChileEnLaPQ/1999/P8210008.avif',
    'ChileEnLaPQ/1999/pq99-04.avif',
    'ChileEnLaPQ/1999/pq99-09.avif',
  ]

  return (
    <LayoutBase>
      <Portada
        titulo={"Chile en la PQ"}
        imageBackground={"IMG_8142.jpg"}
      />
      <div className="colorPortadaChile"></div>
      <section className="containerPresentacion pt-4" id="queEncontramosEnLaPQ">
        <h2 className="tituloPresentacion">Eventos en los que participo Chile</h2>
        <div className="cardsPresentacion" style={{ maxWidth: "1200px" }}>
          <Card
            titulo={"Año 2019"}
            img={"ChileEnLaPQ/IMG_8133.jpg"}
            orientacion={true}
          />
          <h2 className="text-white">Galeria de imagenes</h2>
          <Carrusel imagenes={packImg2019}/>
          <Card
            titulo={"Año 2015"}
            img={"FormacionyEjercicio.jpg"}
            orientacion={true}
          />
          <h2 className="text-white">Galeria de imagenes</h2>
          <Carrusel imagenes={packImg2015}/>
          <Card
            titulo={"Año 2011"}
            img={"FormacionyEjercicio.jpg"}
            orientacion={true}
          />
          <h2 className="text-white">Galeria de imagenes</h2>
          <Carrusel imagenes={packImg2011}/>
          <Card
            titulo={"Año 2007"}
            img={"FormacionyEjercicio.jpg"}
            orientacion={true}
          />
          <h2 className="text-white">Galeria de imagenes</h2>
          <Carrusel imagenes={packImg2007}/>
          <Card
            titulo={"Año 2003"}
            img={"FormacionyEjercicio.jpg"}
            orientacion={true}
          />
          <h2 className="text-white">Galeria de imagenes</h2>
          <Carrusel imagenes={packImg2003}/>
          <Card
            titulo={"Año 1999"}
            img={"FormacionyEjercicio.jpg"}
            orientacion={true}
          />
          <h2 className="text-white">Galeria de imagenes</h2>
          <Carrusel imagenes={packImg1999}/>
        </div>
      </section>
    </LayoutBase>
  );
};

export default ChileEnLaPQ;
