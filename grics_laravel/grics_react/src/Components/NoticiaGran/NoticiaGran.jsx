import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './NoticiaGran.css';
import { Link, useParams } from "react-router-dom";
import Menu from '../Navbar/Menu'
import Footer from '../Footer/Footer'
import iconoEndarrere from '../../assets/fletxa_enrere/fletxa.png'


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
    <div className='llegir-mes'>
      <Menu />
      <div className="noticia-gran">
        <h1 className='titol'>{data.titol}</h1>
        <Link to="/actualitat" className='endarrere'>Torna</Link>
        <p className='data'>Published {data.data}</p>
        <img className='imatge' src={data.foto} alt={data.titol} />
        <p className='descripcio'>{data.descripcio}</p>
      </div>
      <Footer />
    </div>
  );
}


