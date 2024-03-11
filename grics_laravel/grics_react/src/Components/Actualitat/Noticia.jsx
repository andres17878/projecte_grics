import React from 'react';
import './Noticia.css';  
import foto from '../../assets/fotoBarcelona.webp';

function Noticia() {
  const titulo = "Títol de la noticia";
  const text = "Això és un text de mostra per a les noticies de la pàgina web de GRICS. Aquest component ha estat desenvolupat per Anxo Aragundi Mesías. Visca el FC Barcelona."
  const enlace = "https://tu-enlace.com";  // Reemplaza con el enlace real

  return (
    <div className="contenedor-noticia">
      <img src={foto} alt={titulo} className="imagen-noticia" />
      <div className="contenido-noticia">
        <p className='titol'>{titulo}</p>
        <br></br>
        <p className='texto'>{text}</p>
        <a href={enlace} className="leer-mas">Llegir més</a>
      </div>
    </div>
  );
}

export default Noticia;
