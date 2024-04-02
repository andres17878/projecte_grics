import './MiembroComp.css';
import membreImg from '../../assets/membre/avatar.png';
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
                <div className="miembros" key={index}>
                    <div className='portaImagen'>
                        <img src={miembro.foto || membreImg} alt="miembro" className="imgMiembro" />
                    </div>
                    <ul>
                        <li id="li">Nom: {miembro.nom}</li>
                        <li id="li">Cognom: {miembro.cognom}</li>
                        <li id="li">Carrec: {miembro.carrec}</li>
                        <li id="li">Linies de recerca: {miembro.email}</li>
                       
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Comp_Membres;
