import './FormMembres.css';
import flecha from '../../assets/BACK/arrow_back.svg';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Form_M() {
    const location = useLocation();
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(null);
    const [cvPath, setCvPath] = useState(null);
    const [imagen, setImagen] = useState(null);
    const [cv, setCv] = useState(null);
    const inputFileRef = useRef();
    const [imagePreview, setImagePreview] = useState(null);
    const [cvFile, setCvFile] = useState(null);
    const [showUploadButton, setShowUploadButton] = useState(true);
    
    const [formData, setFormData] = useState({
        email: "",
        nom: "",
        cognom: "",
        carrec: "",
        foto: "",
        info: "",
        cv: "",
    });

    useEffect(() => {
        if (location.state) {
            setFormData(location.state.data);
            setImagePreview(location.state.data.foto);
            setImagePath(location.state.data.foto);
            setCvPath(location.state.data.cv);
            setCvFile(location.state.data.cv);
        }
    }, [location]);

    const generateImagePath = (imageName) => {
        const path = `http://localhost:8000/images/${imageName}`;
        setImagePath(path);
        return path;
    }

    const generateCvPath = (cvName) => {
        const path = `http://localhost:8000/cv/${cvName}`;
        setCvPath(path);
        return path;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const imageFile = formData.get("image");
        const cvFile = formData.get("cv");

        if (imageFile && imageFile.name) {
            generateImagePath(imageFile.name);
        }

        if (cvFile && cvFile.name) {
            generateCvPath(cvFile.name);
        }

        const data = {
            email: formData.get("email"),
            nom: formData.get("nom"),
            cognom: formData.get("cognom"),
            carrec: formData.get("carrec"),
            foto: imagePath,
            info: formData.get("info"),
            cv: cvPath,
        };

        try {
            const token = localStorage.getItem("token");

            if (location.state) {
                await axios.put(`http://localhost:8000/api/MembresUpdate/${location.state.data.id}`, data, {
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

                if (cv) {
                    const cvFormData = new FormData();
                    cvFormData.append("file", cv);
                    await axios.post("http://localhost:8000/api/CvUpload", cvFormData, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                }

                Swal.fire({
                    icon: "success",
                    title: "Membre actualitzat correctament",
                    text: "El membre s'ha actualitzat correctament",
                }).then(() => {
                    navigate("/dashboard");
                });
            } else {
                await axios.post("http://localhost:8000/api/MembresAdd", data, {
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

                if (cv) {
                    const cvFormData = new FormData();
                    cvFormData.append("file", cv);
                    await axios.post("http://localhost:8000/api/CvUpload", cvFormData, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                }

                Swal.fire({
                    icon: "success",
                    title: "Membre afegit",
                    text: "El membre s'ha afegit correctament",
                }).then(() => {
                    navigate("/dashboard");
                });

            }
        } catch (error) {
            if (error.response.status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No estàs autoritzat per a realitzar aquesta acció",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Hi ha hagut un problema",
                });
            }
        }
    };

    const handleImageChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
            setImagen(file);
            setShowUploadButton(false);
        }

        if (file) {
            reader.readAsDataURL(file);
            setImagePath(generateImagePath(file.name));
        } else {
            setImagePreview(null);
            setShowUploadButton(true);
        }
    }

    const handleCvChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setCvFile(file);
            setCv(file);
        }

        if (file) {
            reader.readAsDataURL(file);
            setCvPath(generateCvPath(file.name));
        } else {
            setCvFile(null);
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleImageRemove = () => {
        setImagePreview(null);
        setShowUploadButton(true);
    }

    const handleCvRemove = () => {
        setCvFile(null);
    }

    return (
        <div className='Formulario'>
            <div className="spaceForm">
                <form className='formM' onSubmit={handleSubmit}>
                    <div className='titolFormM'>
                        <h1>{location.state ? "Edita el membre" : "Nou membre"}</h1>
                    </div>
                    <div>
                        <input type="text" id="nombre" name="nom" placeholder="Nom" value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} required /> 
                    </div>
                    <div>
                        <input type="text" id="apellidoM" name="cognom" placeholder="Cognom" value={formData.cognom} onChange={(e) => setFormData({ ...formData, cognom: e.target.value })} required />
                    </div>
                    <div>
                        <input type="text" id="carrecM" name="carrec" placeholder="Carrec" value={formData.carrec} onChange={(e) => setFormData({ ...formData, carrec: e.target.value })} required />
                    </div>
                    <div>
                        <input type="email" id="emailM" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                    <div>
                        <div className='spaceCV'>
                            <div onDrop={handleCvChange} onDragOver={handleDragOver} className="cv-upload">
                                {cvFile && (
                                    <>
                                        <p>{typeof cvFile === 'string' ? cvFile.split('/').pop() : cvFile.name}</p>
                                        <button onClick={handleCvRemove}>X</button>
                                    </>
                                )}       
                                {!cvFile && (
                                    <div className="file-cv">
                                        <input id="cvInput" type="file" onChange={handleCvChange} name="cv" />
                                        <label htmlFor="cvInput">Add-CV</label>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type="text" id="infoM" name="info" placeholder="Info/Descripcio" value={formData.info} onChange={(e) => setFormData({ ...formData, info: e.target.value })} required />
                    </div>
                    <div className='seccion-img'>
                        <div
                            onDrop={handleImageChange}
                            onDragOver={handleDragOver}
                            className="image-upload"
                        >
                            {imagePreview && (
                                <>
                                    <img src={imagePreview} alt="Imagen seleccionada" />
                                    <button onClick={handleImageRemove}>X</button>
                                </>
                            )}
                        </div>
                        {showUploadButton && (
                            <>
                                <input id="fileInput" className="file-img" type="file" onChange={handleImageChange} name="image" />
                                <label htmlFor="fileInput">+</label>
                            </>
                        )}
                    </div>
                    <div className="button">
                        <button type="submit" className="addMembre">{location.state ? "Actualitza" : "Afegeix"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Form_M;
