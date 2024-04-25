import './MiembroComp.css';
import personaEquipo from '../../assets/membre/avatar.png';
import personalCV from '../../assets/CV/CV.pdf';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {createRoot} from 'react-dom';

function Comp_Membres(){
    const root = createRoot(document.getElementById('root'));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allMembres`)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, []); // Asegúrate de poner un array vacío aquí para que el efecto se ejecute solo una vez

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error de Membres!</p>;

    return( 
        <div className='divMayor'>
            {data.map((miembro, index) => (
                <div className= {"miembros"+index} key={index}>
                    <div className='portaImagen'>
                        <img src={miembro.foto || personaEquipo} alt="individuoEquipo" className="imgMiembro" />
                    </div>
                    <ul className="info-list">
                        <li><u>Nom: </u>{miembro.nom}</li>
                        <li><u>Cognom: </u>{miembro.cognom}</li>
                        <li><u>Carrec: </u>{miembro.carrec}</li>
                        <li><u>Linies de recerca: </u>{miembro.email}</li>
                        <li><a href={personalCV} target="_blank" rel="noopener noreferrer">Visualiza CV</a>: </li>
                        <li className="descripcion-li"><u>Descripcion: </u><span className="descripcion-texto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Comp_Membres;
