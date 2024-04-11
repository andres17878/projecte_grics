import './Noticia.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Noticia(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/noticies/${props.id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [props.id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="contenedor-noticia">
      <img src={data.foto} alt={data.titol} className="imagen-noticia" />
      <div className="contenido-noticia">
        <p className='titol'>{data.titol}</p>
        <p className='texto'>{data.descripcio}</p>
        <Link to={`/noticia/${data.id}`} className="leer-mas">Llegir mes</Link>

      </div>
    </div>
  );
}

Noticia.propTypes = {
  id: PropTypes.number
};
