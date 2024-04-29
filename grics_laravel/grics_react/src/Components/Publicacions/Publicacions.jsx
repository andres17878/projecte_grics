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

    const[currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    
    

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

    const totalPages = Math.ceil(count / itemsPerPage);

    const pageButtons = Array.from({ length: totalPages }, (_, index) => (
        <button 
            className='boto_publicacions'
            key={index + 1} 
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
        >
            {index + 1}
        </button>
    ));

    const currentItems = Array.from({ length: count }, (_, index) => index + 1)
    .slice(indexOfFirstItem, indexOfLastItem)
    .map((id) => <PublicacioCard key={id} id={id} />);
    
    

    return (
        <div className="publicacions">
            <Menu/>

            <div className="publicacions_root">
                <div className="publicacions__container">
                    <div className="linia_publicacion"></div>
                        <h1 className="publicacions__titulo">Publicacions</h1>
                    <div className="linia_publicacion2"></div>
                </div>

                <div className="publicacions_items">
                    {currentItems}
                </div>

                <div className="botons_paginacio_publicacions">
                    {pageButtons}
                </div>
            </div>
            <Footer/>
        </div>
    )
}