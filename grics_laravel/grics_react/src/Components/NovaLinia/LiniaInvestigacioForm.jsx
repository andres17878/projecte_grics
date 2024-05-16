import React from 'react';
import './Linia_InvestigacioForm.css';
import flecha from '../../assets/BACK/arrow_back.svg';
import { useState } from 'react';
import { useRef } from 'react';
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useEffect } from 'react';


const LiniaInvestigacioForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        cognom: "",
        nom: "",
        anyo: "",
        titol: "",
        revista: "",
        numero: "",
        volum: "",
        resum: "",
        link: "",
    });

    useEffect(() => {
        if (location.state) {
            setFormData(location.state.data);
        }
    }, [location]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            cognom: formData.get("cognom"),
            nom: formData.get("nom"),
            anyo: formData.get("any"),
            titol: formData.get("titol"),
            revista: formData.get("revista"),
            numero: formData.get("numero"),
            volum: formData.get("volum"),
            resum: formData.get("resum"),
            link: formData.get("link"),
        };
        try {
            const token = localStorage.getItem("token");

            // Here check if we are trying to add or edit a publication
            if (location.state) {
                await axios.put("http://localhost:8000/api/PublicacionsUpdate/" + location.state.data.id, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                Swal.fire({
                    icon: "success",
                    title: "Publicació actualitzada",
                    text: "La publicació s'ha actualitzat correctament",
                }).then(() => {
                    navigate("/dashboard");
                });
            } else {
    

                await axios.post("http://localhost:8000/api/PublicacionsAdd", data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                Swal.fire({
                    icon: "success",
                    title: "Publicació afegida",
                    text: "La publicació s'ha afegit correctament",
                }).then(() => {
                    navigate("/dashboard");
                });
            }

        } catch (error) {
            if (error.response && error.response.status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No tens permisos per accedir a aquesta pàgina",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No s'ha pogut afegir la publicació",
                });
            }
        }
    }

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    }

    const inputFileRef = useRef();

    const handleImageRemove = () => {
        setImagePreview(null);
        if (inputFileRef.current) {
            inputFileRef.current.value = '';
        }
    };
    return (
         <div className='recuadro_Linies'>
            <div className='titulo_nuevas_Linies'>
                <img src={flecha} alt='back' className='flecha_Linies'></img>
                <h1 className='titulo-Linia'>Nova Linia d'Investigació</h1>
            </div>
            <form >
                <div className='formulario-Linia'>
                    <div className='Izquierda-Linia'>
                        <input type="text" placeholder='TITOL'/>
                        <input type="text" placeholder='AUTORS/ES'/>
                        <textarea placeholder='TEXT'></textarea>
                    </div>
                    <div className='Derecha-Linia'>
                        <label >Imagen(Opcional):</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} /> 
                        {imagePreview && (
                            <div>
                                <img src={imagePreview} alt="Imagen seleccionada" />
                                <button className='boton-eliminar-img-Contratos' onClick={handleImageRemove}>Eliminar imagen</button>
                            </div>
                        )} 
                    </div>
                </div>
                <div className='boton-Linia'>
                    <button className='estilo-boton'>Afegeix</button>
                </div>
            </form>
         </div>
    )
}
export default LiniaInvestigacioForm;