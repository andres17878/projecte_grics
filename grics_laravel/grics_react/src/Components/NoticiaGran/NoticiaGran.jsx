import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './NoticiaGran.css';
import { useParams } from "react-router-dom";


export default function NoticiaGran() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/noticies/${id}`)
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
    
    <div className="noticia-gran">
      <h1>{data.titol}</h1>
      <img src={data.foto} alt={data.titol} />
      <p>{data.descripcio}</p>
      <p>{data.data}</p>
    </div>
  );
}


