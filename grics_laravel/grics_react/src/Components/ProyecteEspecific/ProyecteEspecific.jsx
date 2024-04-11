import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; 

const ProyecteEspecific = (props) => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const projectID = props.id;
        axios.get(`http://localhost:8000/api/projectes/${projectID}`)
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
            <h1>Prueba</h1>
            {console.log(data.id)}
            <p>Variable recibida: {data.id}</p>
        </div>
    )
}

export default ProyecteEspecific
