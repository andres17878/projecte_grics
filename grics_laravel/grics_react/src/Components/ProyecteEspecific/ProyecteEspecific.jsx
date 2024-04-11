import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Menu from '../Navbar/Menu';
import './Proyecte-Especific.css';

export default function ProyecteEspecific() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const {id} = useParams();
  
    useEffect(() => {
      axios.get(`http://localhost:8000/api/projectes/${id}`)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    },);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    return (
      
      <div className='projecte-especific'>
        <Menu />
        <div className='titul-projecte-especific'>
                <div className='line-1'></div>
                <h1>Projecte {data.titol}</h1>
                <div className='line-2'></div>
            </div>

        <div className='imagen-resumen-projecte'>
            <div className='imagen-projecte-unic'>
                <img src={data.foto} alt={data.titol} />
            </div>
            <div className='info-projecte'>
                <ul>
                    <li>Titol: {data.titol}</li>
                    <li>DATA: {data.data}</li>
                    <li>Integrants:</li>
                    <li>Resum: {data.resum}</li>
                    <li>Entitat/s: {data.entitats}</li>
                </ul>
            </div>
            

        </div>
      </div>
    );
  }

