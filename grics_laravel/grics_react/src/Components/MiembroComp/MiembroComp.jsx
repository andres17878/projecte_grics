import React, { useState, useEffect } from 'react';
import axios from 'axios';
import personaEquipo from '../../assets/membre/avatar.png';
import personalCV from '../../assets/CV/CV.pdf';
import './MiembroComp.css';

function Miembro({ miembro, isHovered }) {
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
                <li><a href={personalCV} target="_blank" rel="noopener noreferrer">- Visualiza CV</a></li>
                <li className="descripcion-li">
                    <u>Descripción: </u>
                    <span className="descripcion-texto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span>
                </li>
            </ul>
        </div>
    );
}

function Comp_Membres() {
    const [data, setData] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(-1); // al inicio ningun ekemento esta hover

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allMembres`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error de Membres:', error);
            });
    }, []); // Se ejecuta solo cuando hay hover en el componente

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1); // Al salir del compoenente el hover se reinicia por tanto el nuemro igual 
    };

    return (
        <div className='divMayor'>
            {data.map((miembro, index) => (
                <div
                    key={index}
                    onClick={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Miembro
                        miembro={miembro}
                        isHovered={index === hoveredIndex}
                    />
                </div>
            ))}
        </div>
    );
}

export default Comp_Membres;
