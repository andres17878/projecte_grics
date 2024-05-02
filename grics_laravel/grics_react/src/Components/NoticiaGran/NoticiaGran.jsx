import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './NoticiaGran.css';
import { Link, useParams } from "react-router-dom";
import Footer from '../Footer/Footer'
import MenuBurger from '../Navbar/MenuBureger';


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
      <MenuBurger />
      <div className="noticia-gran">
        <div className='go_Back'>
          <Link to="/actualitat"> <img src='../src/assets/BACK/arrow_back.svg' alt='Atras' className='imagen-atras'></img></Link>
        </div>
        <h1 className='titol'>{data.titol}</h1>
        <p className='data'>Published {data.data}</p>
        <img className='imatge' src={data.foto} alt={data.titol} />
        <p className='descripcio'>{data.descripcio}</p>
      </div>
      <Footer />
    </div>
  );
}


