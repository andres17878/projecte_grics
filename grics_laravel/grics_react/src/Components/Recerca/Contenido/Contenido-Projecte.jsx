import React from 'react'
import '../Recerca.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link as Proyecto} from 'react-router-dom';


export default function Contenido(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/projectes/${props.id}`)
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
    if (error) return <p>Error!2</p>;

  return (
    <div>
        <Proyecto to={{pathname: "/projecte", state: {id: props.id}}}>
            <div className='Card-2'>
                <div className='Izquierda-Card-2'>
                    <img src={data.foto} alt='prueba' className='foto-Card'></img>
                </div>
                <div className='Derecha-Card-2'>
                    <h4 className='descripcion-Card'>{data.resum}</h4>
                </div>
            </div>
        </Proyecto>
    </div>
  )
}
