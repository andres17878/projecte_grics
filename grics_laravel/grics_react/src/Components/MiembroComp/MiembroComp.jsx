import React, { useState, useEffect } from 'react';
import axios from 'axios';
import personaEquipo from '../../assets/membre/avatar.png';
import personalCV from '../../assets/CV/CV.pdf';
import './MiembroComp.css';

function Miembro({ miembro, isHovered }) {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className={`miembros ${isHovered ? 'hovered' : ''}`}>
            <div className='portaImagen'>
                <img src={miembro.foto || personaEquipo} alt="individuoEquipo" className="imgMiembro" />
            </div>
            <ul className="info-list">
                <li><u>Nom: </u>{miembro.nom}</li>
                <li><u>Cognom: </u>{miembro.cognom}</li>
                <li><u>Carrec: </u>{miembro.carrec}</li>
                <li><u>Email: </u>{miembro.email}</li>
                <li><a href={personalCV} target="_blank" rel="noopener noreferrer"><u>Visualiza CV</u></a></li>
                <li className="descripcion-li">
                    <u>Descripción: </u>
                    <span className="descripcion-texto">
                        {showFullDescription ? miembro.info : `${miembro.info.slice(0, 5)}...`}
                    </span>
                    <button className='botonVistaContenido' onClick={toggleDescription}>
                        {showFullDescription ? 'Ver Menos' : 'Ver Más'}
                    </button>
                </li>
            </ul>
        </div>
    );
}


function Comp_Membres() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allMembres`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error de Membres:', error);
            });
    }, []);

    return (
        <div className='divMayor'>
            {data.map((miembro, index) => (
                <div key={index}>
                    <Miembro miembro={miembro} />
                </div>
            ))}
        </div>
    );
}

export default Comp_Membres;