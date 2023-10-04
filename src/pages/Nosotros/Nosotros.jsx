import React, { useState } from 'react'
import LayoutBase from '../../layout/LayoutBase'
import "./Nosotros.css"
import CardPersonas from '../../components/CardPersonas/CardPersonas'
import personas from "../../shared/Investigadores.json" 

const Nosotros = () => {
  // eslint-disable-next-line no-unused-vars
  const [person, setPersonas] = useState(personas)

  return (
    <div style={{ fontFamily: "Lato" }}>
    <LayoutBase>
    <div className="colorPortadaNosotros"></div>
    <div className='containerPersonas'>
    {person.map((persona,index)=>
      <CardPersonas key={index} persona={persona}/>
    )}
    </div>
    </LayoutBase>
  </div>
  )
}

export default Nosotros