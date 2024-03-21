import React from 'react'
import './Recerca.css'

export default function Contenido(props) {
  return (
    <div>
        <div className='Card-1'>
            <img src={props.imgUrl} alt='Imagen de ejemplo'></img>
            <h2>{props.texto}</h2>
        </div>
    </div>
  )
}
