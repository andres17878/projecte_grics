import './Noticia.css';
import foto from '../../assets/fotoBarcelona.webp';

function Noticia() {
  const titulo = "Títol de la noticia";
  const text = "Això és un text de mostra per a les noticies de la pàgina web de GRICS."
  const enlace = "https://tu-enlace.com"; 

  return (
    <div className="contenedor-noticia">
      <img src={foto} alt={titulo} className="imagen-noticia" />
      <div className="contenido-noticia">
        <p className='titol'>{titulo}</p>
        <p className='texto'>{text}</p>
        <a href={enlace} className="leer-mas">Llegir més</a>
      </div>
    </div>
  );
}

export default Noticia;
