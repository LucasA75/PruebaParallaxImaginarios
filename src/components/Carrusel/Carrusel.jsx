import React, { useEffect, useState } from "react";
import estilos from "./Carrusel.module.css";

const Carrusel = ({ imagenes, index }) => {
  const [imgActual, setImgActual] = useState(0);
  const cantidad = imagenes?.length;

  if (!Array.isArray(imagenes) || cantidad == 0) return;

  const siguienteImg = () => {
    setImgActual(imgActual === cantidad - 1 ? 0 : imgActual + 1);
  };

  // Al cambiar el index(desde el componente padre) , setea la imagen actual a 0
  useEffect(()=>{
    setImgActual(0)
  },[index])

  useEffect(() => {
    const intervalId = setInterval(() => {
      siguienteImg();
    }, 5000);
    console.log(imgActual)
    verificacionIMG()
    // Limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(intervalId)
    };
  }, [imgActual]);


  const verificacionIMG = () => {
    if(imgActual >= imagenes.length){
      setImgActual(0)
    }
  }


  return (
    <div className={estilos.container}>
      {imagenes.map((imagen, index) => {
        return (
          <div
            key={index}
            className={
              imgActual === index
                && `${estilos.slide} ${estilos.active}`
            }
          >
            {imgActual === index && (
              <img
                className={estilos.imgCarrusel}
                key={index}
                src={imagen}
                alt="imagen"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carrusel;
