import './Publicacions.css'
import Menu from '../Navbar/Menu'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react';
import PublicacioCard from '../PublicacioCard/PublicacioCard'
import axios from 'axios';

export default function Publicacions() {

    const [count, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/countPublicacions`)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error en componente principal</p>;

    return (
        <div className="publicacions">
            <Menu/>

            <div className="publicacions__container">
                <div className="linia_publicacion"></div>
                <h1 className="publicacions__titulo">Publicacions</h1>
                <div className="linia_publicacion2"></div>
            </div>

            <div className="publicacions_items">
                {Array.from({ length: count }, (_, index) => (
                    <PublicacioCard key={index} id={index + 1} />
                ))}
            </div>
            <Footer/>
        </div>
    )
}