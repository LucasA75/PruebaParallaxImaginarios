import React, { useState } from 'react'
import LayoutBase from '../../layout/LayoutBase'
import "./Nosotros.css"
import CardPersonas from '../../components/CardPersonas/CardPersonas'
import personas from "../../shared/Investigadores.json" 
import styles from './Nostros.module.css'

const Nosotros = () => {
  // eslint-disable-next-line no-unused-vars
  const [person, setPersonas] = useState(personas)
  return (
    <div style={{ fontFamily: "Lato" }}>
    <LayoutBase>
    <div className="colorPortadaNosotros"></div>
    <div style={{maxWidth:'1160px', margin: ' 0 auto', marginTop: '50px'}}>
    <h2 className={styles.titulo}>Nuestros Investigadores</h2>
    </div>
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