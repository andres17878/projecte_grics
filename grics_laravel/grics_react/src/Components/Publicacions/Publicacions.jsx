import './Publicacions.css'
import Footer from '../Footer/Footer'
import { useState, useEffect } from 'react';
import PublicacioCard from '../PublicacioCard/PublicacioCard'
import axios from 'axios';
import MenuBurger from '../Navbar/MenuBureger';

export default function Publicacions() {

    const [count, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ids, setIds] = useState([]);

    const[currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const fetchIdsFromDatabase = async () => {
        const response = await axios.get('http://localhost:8000/api/allIdPublicacions');
        return response.data;
    }

    useEffect(() => {
        fetchIdsFromDatabase()
            .then(fetchedIds => {
                setIds(fetchedIds);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching IDs:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    
    

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

    const currentItems = ids
    .sort((a, b) => b.id - a.id) 
    .slice(indexOfFirstItem, indexOfLastItem)
    .map((id) => (
        <PublicacioCard key={id.id} id={id.id}/>
    ));
    
    

    return (
        <div className="publicacions">
            <MenuBurger/>

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