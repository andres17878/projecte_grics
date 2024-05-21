import './FormProjecte.css';
import flecha from '../../assets/BACK/arrow_back.svg';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const FormulariProjecte = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(null);
    const [imagen, setImagen] = useState(null);
    const inputFileRef = useRef();

    const [formData, setFormData] = useState({
        titol: "",
        integrants: "",
        resum: "",
        entitats: "",
        foto: "",
        resultats: "",
        logos_entitats: "1",
    });

    useEffect(() => {
        if (location.state) {
            setFormData(location.state.data);
            setImagePreview(location.state.data.foto);
        }
    } , [location]);

    const generateImagePath = (imageName) => {
        const path = `http://localhost:8000/images/${imageName}`;
        setImagePath(path);
        return path;
    }

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
            integrants: formData.get("integrants") || 'default', 
            resum: formData.get("resum"),
            entitats: formData.get("entitats"),
            resultats: formData.get("resultats"),
            logos_entitats: "1",
        };
        try {
            const token = localStorage.getItem("token");

            if (location.state) {
                await axios.put(`http://localhost:8000/api/ProjectesUpdate/${location.state.data.id}`, data, {
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
                    title: "Projecte actualitzat",
                    text: "El projecte s'ha actualitzat correctament",
                }).then(() => {
                    navigate("/dashboard");
                });
            } else {
                await axios.post("http://localhost:8000/api/ProjectesAdd", data, {
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
                    title: "Projecte afegit",
                    text: "El projecte s'ha afegit correctament",
                }).then(() => {
                    navigate("/dashboard");
                });

            }
        } catch (error) {
            if(error.response.status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No tens permisos per a realitzar aquesta acció",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Hi ha hagut un error en el servidor",
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
            inputFileRef.current.value = "";
        }
    };

    return (
         <div className='recuadro_Form_Projecte'>
            <div className='boton_volver_Projecte'>
                <img src={flecha} alt = "flecha" onClick={() => navigate("/dashboard")} />
            </div>
            <div className='titulo_nuevos_Projectos'>
                <h1 className='titulo-nou-Projecte'>Nou Projecte</h1>
            </div>
            <form onSubmit={handleSubmit} >
                <div className='formulario-Projecte'>
                    <div className='Izquierda-Projecte'>
                        <input type="text" name="titol" placeholder='TITOL' value={formData.titol} onChange={(e) => setFormData({ ...formData, titol: e.target.value })} required />
                        <input type="text" name="integrants" placeholder='INTEGRANTS' value={formData.integrants} onChange={(e) => setFormData({ ...formData, integrants: e.target.value })} required />
                        <textarea placeholder='RESUM' name="resum" value={formData.resum} onChange={(e) => setFormData({ ...formData, resum: e.target.value })} required />
                    </div>
                    <div className='Derecha-Projecte'>
                        <input type="text" name="entitats" placeholder='ENTITATS FINANÇADORES' value={formData.entitats} onChange={(e) => setFormData({ ...formData, entitats: e.target.value })} required />
                        <label >Logos:</label>
                        <input type="file" ref={inputFileRef} accept="image/*" onChange={handleImageChange} />                         {imagePreview && (
                            <div>
                                <img src={imagePreview} alt="Imagen seleccionada" />
                                <button className='boton-eliminar-img-Projecto' onClick={handleImageRemove}>Eliminar imagen</button>
                            </div>
                        )} 
                        <input type="text" name="resultats" placeholder='RESULTATS' value={formData.resultats} onChange={(e) => setFormData({ ...formData, resultats: e.target.value })} required />



                    </div>
                </div>
                <div className='boton-Projecte'>
                    <button className='estilo-boton'>Afegeix</button>
                </div>
            </form>
         </div>
    )
}
export default FormulariProjecte;