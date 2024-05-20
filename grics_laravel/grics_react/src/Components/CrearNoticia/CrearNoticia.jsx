import React, { useState, useRef, useEffect } from 'react';
import './CrearNoticia.css';
import flecha from '../../assets/BACK/arrow_back.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormulariNoticia = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(null);
    const [imagen, setImagen] = useState(null);
    const inputFileRef = useRef();
    const [imagePreview, setImagePreview] = useState(null);

    const [formData, setFormData] = useState({
        titol: "",
        foto: "",
        descripcio: "",
    });

    useEffect(() => {
        if (location.state) {
            setFormData(location.state.data);
            setImagePreview(location.state.data.foto);
            setImagePath(location.state.data.foto);
        }
    }, [location]);

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
            descripcio: formData.get("descripcio"),
        };

        try {
            const token = localStorage.getItem('token');

            if (location.state) {
                await axios.put(`http://localhost:8000/api/NoticiesUpdate/${location.state.data.id}`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if(imagen){
                    const imageFormData = new FormData();
                    imageFormData.append('file', imagen);
                    await axios.post(`http://localhost:8000/api/ImageUpload`, imageFormData, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                }

                Swal.fire({
                    icon: 'success',
                    title: 'Noticia actualitzada correctament',
                    text: 'La noticia s\'ha actualitzat correctament',
                }).then(() => {
                    navigate('/dashboard');
                });
            } else {
                await axios.post('http://localhost:8000/api/NoticiesAdd', data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if(imagen){
                    const imageFormData = new FormData();
                    imageFormData.append('file', imagen);
                    await axios.post(`http://localhost:8000/api/ImageUpload`, imageFormData, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                }

                Swal.fire({
                    icon: 'success',
                    title: 'Noticia afegida correctament',
                    text: 'La noticia s\'ha afegit correctament',
                }).then(() => {
                    navigate('/dashboard');
                });
            }
        } catch (error) {
            if(error.response.status === 401){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No tens permisos per accedir a aquesta pàgina',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hi ha hagut un error al afegir la noticia',
                });
            }
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImagen(file);
            setImagePreview(reader.result);
        }

        if (file) {
            reader.readAsDataURL(file);
            generateImagePath(file.name);
        } else {
            setImagePreview(null);
        }
    }

    const handleImageRemove = () => {
        setImagePreview(null);
        setImagen(null);
        if (inputFileRef.current) {
            inputFileRef.current.value = '';
        }
    };

    return (
        <div className='recuadro_Form_Projecte'>
            <div className='titulo_nuevos_Projectos'>
                <img src={flecha} alt='back' className='flecha_Projectes' onClick={() => navigate(-1)} />
                <h1 className='titulo-nou-Projecte'>{location.state ? "Edita Noticia" : "Nova Noticia"}</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='formulario-Projecte'>
                    <div className='Izquierda-Projecte'>
                        <input 
                            type="text" 
                            placeholder='Títol noticia' 
                            name="titol" 
                            value={formData.titol} 
                            onChange={(e) => setFormData({ ...formData, titol: e.target.value })} 
                            required 
                        />
                        <textarea 
                            placeholder='DESCRIPCIÓ' 
                            name="descripcio" 
                            value={formData.descripcio} 
                            onChange={(e) => setFormData({ ...formData, descripcio: e.target.value })} 
                            required 
                        />
                    </div>
                    <div className='Derecha-Projecte'>
                        <label>Imatge</label>
                        <input 
                            type="file" 
                            ref={inputFileRef} 
                            accept="image/*" 
                            onChange={handleImageChange} 
                        />                         
                        {imagePreview && (
                            <div>
                                <img src={imagePreview} alt="Imagen seleccionada" />
                                <button type="button" className='boton-eliminar-img-Projecto' onClick={handleImageRemove}>Eliminar imatge</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className='boton-Projecte'>
                    <button type="submit" className='estilo-boton'>{location.state ? "Actualitza" : "Publica"}</button>
                </div>
            </form>
        </div>
    )
}

export default FormulariNoticia;
