import './Linia_InvestigacioForm.css';
import flecha from '../../assets/BACK/arrow_back.svg';
import { useState, useEffect, useRef } from 'react';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const LiniaInvestigacioForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(null);
    const [imagen, setImagen] = useState(null);
    const inputFileRef = useRef();

    const [formData, setFormData] = useState({
        foto: "",
        titol: "",
        descripcio: "",
    });

    useEffect(() => {
        if (location.state) {
            setFormData(location.state.data);
            setImagePreview(location.state.data.foto);
        }
    }, [location]);

    const generateImagePath = (imageName) => {
        const path = `http://localhost:8000/images/${imageName}`;
        setImagePath(path);
        return path;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const imageFile = formData.get("file");
        if (imageFile && imageFile.name) {
            generateImagePath(imageFile.name);
        }

        const data = {
            foto: imagePath,
            titol: formData.get("titol"),
            descripcio: formData.get("descripcio"),
        };

        try {
            const token = localStorage.getItem("token");

            if (location.state) {
                await axios.put(`http://localhost:8000/api/LíniesUpdate/${location.state.data.id}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (imagen) {
                    const imageFormData = new FormData();
                    imageFormData.append("file", imagen);
                    await axios.post("http://localhost:8000/api/ImageUpload", imageFormData, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                }

                Swal.fire({
                    icon: "success",
                    title: "Línia actualitzada",
                    text: "La línia s'ha actualitzat correctament",
                }).then(() => {
                    navigate("/dashboard");
                });
            } else {
                await axios.post("http://localhost:8000/api/LíniesAdd", data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (imagen) {
                    const imageFormData = new FormData();
                    imageFormData.append("file", imagen);
                    await axios.post("http://localhost:8000/api/ImageUpload", imageFormData, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                }

                Swal.fire({
                    icon: "success",
                    title: "Línia afegida",
                    text: "La línia s'ha afegit correctament",
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
                    text: "No s'ha pogut afegir la línia",
                });
            }
        }
    };

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
            setImagePreview(reader.result);
            setImagen(file);
        };

        if (file) {
            reader.readAsDataURL(file);
            setImagePath(generateImagePath(file.name));
        } else {
            setImagePreview(null);
        }
    };

    const handleImageRemove = () => {
        setImagePreview(null);
        setImagen(null);
        setImagePath(null);
        if (inputFileRef.current) {
            inputFileRef.current.value = '';
        }
    };

    return (
        <div className='recuadro_Linies'>
            <div className='titulo_nuevas_Linies'>
                <img src={flecha} alt='back' className='flecha_Linies' />
                <h1 className='titulo-Linia'>{location.state ? "Edita la línia" : "Nova línia"}</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='formulario-Linia'>
                    <div className='Izquierda-Linia'>
                        <input type="text" name="titol" placeholder='TITOL' value={formData.titol} onChange={(e) => setFormData({ ...formData, titol: e.target.value })} required />
                        <textarea placeholder='DESCRIPCIÓ' name="descripcio" value={formData.descripcio} onChange={(e) => setFormData({ ...formData, descripcio: e.target.value })} required />
                    </div>
                    <div className='Derecha-Linia'>
                        <label>Imagen (Opcional):</label>
                        <input type="file" name="file" accept="image/*" onChange={handleImageChange} ref={inputFileRef} />
                        {imagePreview && (
                            <div>
                                <img src={imagePreview} alt="Imagen seleccionada" />
                                <button type="button" className='boton-eliminar-img-Contratos' onClick={handleImageRemove}>Eliminar imagen</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='boton-Linia'>
                    <button type="submit" className='estilo-boton'>{location.state ? "Actualitzar" : "Afegir"}</button>
                </div>
            </form>
        </div>
    );
};

export default LiniaInvestigacioForm;
