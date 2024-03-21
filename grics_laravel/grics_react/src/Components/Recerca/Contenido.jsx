import React from 'react'
import './Recerca.css'
import axios from 'axios';

export default function Contenido(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/recerca/${props.id}`)
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
    <div>
        <div className='Card-1'>
            <img src={data.imgUrl} alt={data.alt}></img>
            <h2>{data.texto}</h2>
        </div>
    </div>
  )
}
