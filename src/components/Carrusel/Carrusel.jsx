import React, { useEffect, useState } from 'react'
import estilos from './Carrusel.module.css';

const Carrusel = ({imagenes}) => {
    const [imgActual , setImgActual] = useState(0);
    const cantidad = imagenes?.length

    if(!Array.isArray(imagenes) || cantidad == 0) return;

    const siguienteImg = () => {
        setImgActual(imgActual === cantidad - 1 ? 0 : imgActual + 1); 
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
          siguienteImg();
        }, 5000);
    
        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
      }, [imgActual]);
    

  return (
    <div className={estilos.container}>
			{imagenes.map((imagen, index) => {
				return (
					<div
                    key={index}
						className={
							imgActual === index
								? `${estilos.slide} ${estilos.active}`
								: estilos.slide
						}>
						{imgActual === index && (
							<img className={estilos.imgCarrusel} key={index} src={imagen} alt="imagen" />
						)}
					</div>
				);
			})}
		</div>
  )
}

export default Carrusel