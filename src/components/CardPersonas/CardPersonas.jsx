import React from 'react'
import "./CardPersonas.css"

const CardPersonas = ({persona}) => {
  return (
    <div className='cardPrincipal shadow'>
        <div className='containerImage'><img src={persona.imagen}></img></div>
        <div className='datosPersona'>
        <h4 className='datoPersona personaNombre'>{persona.nombre}</h4>
        <p className='datoPersona personaOcupacion'>{persona.ocupacion}</p>
        <p className='datoPersona personaDescripcion'>{persona.descripcion}</p>
        </div>
    </div>
  )
}

export default CardPersonas