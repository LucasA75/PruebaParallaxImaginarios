import React, { useEffect, useState } from "react";
import LayoutBase from "../../layout/LayoutBase";
import Portada from "../../components/Portada/Portada";
import "./ChileEnLaPQ.css";
import Carrusel from "../../components/Carrusel/Carrusel";
import estilos from "./ChileEnLaPQ.module.css";

const ChileEnLaPQ = () => {
  const [index, setIndex] = useState();

  const packImg2019 = [
    "ChileEnLaPQ/2019/IMG_7593.JPG",
    "ChileEnLaPQ/2019/2019-06-16 13.16.13.jpg",
    "ChileEnLaPQ/2019/IMG_7516.JPG",
    "ChileEnLaPQ/2019/IMG_7594.JPG",
  ];
  const packImg2015 = [
    "ChileEnLaPQ/2015/_DSC9796.JPG",
    "ChileEnLaPQ/2015/03 lazo_2.JPG",
    "ChileEnLaPQ/2015/04 romero_2 el otro.jpg",
    "ChileEnLaPQ/2015/08 Ruiz-Romero_2.jpg",
    "ChileEnLaPQ/2015/04 10 Romero_2.jpg",
    "ChileEnLaPQ/2015/04 21 Bagnara_2.jpg",
    "ChileEnLaPQ/2015/11012356_10206691071937925_135436689505917575_n.jpg",
    "ChileEnLaPQ/2015/IMG_20151202_161227.jpg",
  ];

  const packImg2011 = [
    "ChileEnLaPQ/2011/242177_2071967473788_1082928631_32510528_3226374_o.jpg",
    "ChileEnLaPQ/2011/bocetonegro.jpg",
    "ChileEnLaPQ/2011/P3150058.JPG",
    "ChileEnLaPQ/2011/P3150058.JPG",
    "ChileEnLaPQ/2011/255992_2071968353810_1082928631_32510529_6432569_o.jpg",
  ];

  const packImg2007 = [
    "ChileEnLaPQ/2007/00446.JPG",
    "ChileEnLaPQ/2007/DSC03440.JPG ",
    "ChileEnLaPQ/2007/Fotos importadas 00025.JPG",
    "ChileEnLaPQ/2007/montando en la cuadrienal 24.JPG",
    "ChileEnLaPQ/2007/profesionales 095 copia.JPG",
  ];

  const packImg2003 = [
    "ChileEnLaPQ/2003/patio.avif",
    "ChileEnLaPQ/2003/08enPraga.avif",
    "ChileEnLaPQ/2003/10enPraga.avif",
    "ChileEnLaPQ/2003/MAC43.avif",
    "ChileEnLaPQ/2003/MAC51.avif",
    "ChileEnLaPQ/2003/MAC87.avif",
  ];

  const packImg1999 = [
    "ChileEnLaPQ/1999/P8210008.avif",
    "ChileEnLaPQ/1999/pq99-04.avif",
    "ChileEnLaPQ/1999/pq99-09.avif",
  ];

  const years = ["2019", "2015", "2011", "2007", "2003", "1999"];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [yearSelect, setYear] = useState([]);

  const handleMouseEnter = (e,index) => {
    const textoDiv = e.target.textContent;
    yearIMGCarrusel(textoDiv);
    setHoveredIndex(index);
    setIndex(index)
  };


  const yearIMGCarrusel = (year) => {
    if (year === undefined) return null;
    const actualYear = year.split(" ")[1];

    switch (actualYear) {
      case "2019":
        return setYear(packImg2019);
      case "2015":
        return setYear(packImg2015);
      case "2011":
        return setYear(packImg2011);
      case "2007":
        return setYear(packImg2007);
      case "2003":
        return setYear(packImg2003);
      case "1999":
        return setYear(packImg1999);
    }
  };

  useEffect(()=>{
    window.scrollTo(0,0)
    setYear(packImg2019)
  },[])


  return (
    <LayoutBase>
      <Portada titulo={"Chile en la PQ"} imageBackground={"IMG_8142.jpg"} />
      <div className="colorPortadaChile"></div>
      <section className={`${estilos.containerVisualYear} my-5 bg-white`}>
        <div className={estilos.containerYears}>
          
          {years.map((year,index) => (
            <div
              key={year}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              className={ hoveredIndex === index ? `${estilos.targetCard} ${estilos.selected}` : `${estilos.targetCard}` }
            >
              <p>Año {year}</p>
            </div>
          ))}
        </div>
        <div className={estilos.containerIMG}>
          {yearSelect != "" ? (
            <Carrusel imagenes={yearSelect} index={index}/>
          ) : (
            <div>Apreta un Año</div>
          )}
        </div>
      </section>
    </LayoutBase>
  );
};

export default ChileEnLaPQ;
