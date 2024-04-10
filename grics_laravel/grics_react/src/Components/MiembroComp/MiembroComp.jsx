import './MiembroComp.css';
import personaEquipo from '../../assets/membre/avatar.png';
import personalCV from '../../assets/CV/CV.pdf';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Comp_Membres(){
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
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Comp_Membres;
