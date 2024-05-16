import './FormMembres.css'
import { useState } from 'react';

function Form_M() {
    const [imagePreview, setImagePreview] = useState(null);
    const [cvFile, setCvFile] = useState(null);
    const [showUploadButton, setShowUploadButton] = useState(true);

    const handleImageChange = (e) => {
        e.preventDefault();
        let file;
        if (e.dataTransfer) {
            file = e.dataTransfer.files[0];
        } else {
            file = e.target.files[0];
        }
        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
            setShowUploadButton(false);
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
            setShowUploadButton(true);
        }
    }

    const handleCvChange = (e) => {
        e.preventDefault();
        let file;
        if (e.dataTransfer) {
            file = e.dataTransfer.files[0];
        } else {
            file = e.target.files[0];
        }
        setCvFile(file);
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
                <form className='formM'>
                    <div className='titolFormM'>
                        <h1>NOU MEMBRE</h1>
                    </div>
                    <div>
                        <input type="text" id="nombre" name="nombre" placeholder="Nom" />
                    </div>
                    <div>
                        <input type="text" id="apellidoM" name="apellidoM" placeholder="Cognom" />
                    </div>
                    <div>
                        <input type="text" id="carrecM" name="carrecM" placeholder="Carrec" />
                    </div>
                    <div>
                        <input type="email" id="emailM" name="emailM" placeholder="Email" />
                    </div>
                    <div>
                        <div className='spaceCV'>
                            <div onDrop={handleCvChange} onDragOver={handleDragOver} className="cv-upload"
                            >
                                {cvFile && (
                                    <>
                                        <p>{cvFile.name}</p>
                                        <button onClick={handleCvRemove}>X</button>
                                    </>
                                )}       
                            {!cvFile && (
                                <div className="file-cv">
                                    <input id="cvInput"  type="file" onChange={handleCvChange} />
                                    <label htmlFor="cvInput">Add-CV</label>
                                </div>
                            )}
                            </div>
                        
                        </div>
                    </div>
                    <div>
                        <input type="text" id="infoM" name="infoM" placeholder="Info/Descripcio" />
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
                                <input id="fileInput" className="file-img" type="file" onChange={handleImageChange} />
                                <label htmlFor="fileInput">+</label>
                            </>
                        )}
                    </div>
                    <div className="button">
                        <button type="submit" className="addMembre">Afegir</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Form_M