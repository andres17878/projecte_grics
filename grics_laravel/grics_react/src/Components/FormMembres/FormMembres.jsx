import './FormMembres.css'
import { useState } from 'react';

function Form_M() {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
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

    const handleDragOver = (e) => {
        e.preventDefault();
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
                        <input type="text" id="cvM" name="cvM" placeholder="CV" />
                    </div>
                    <div>
                        <input type="text" id="infoM" name="infoM" placeholder="Info/Descripcio" />
                    </div>
                    <div 
                        onDrop={handleImageChange} 
                        onDragOver={handleDragOver} 
                        style={{height: '200px', width: '200px', border: '1px dashed #ccc'}}
                    >
                        {imagePreview && (
                            <img src={imagePreview} alt="Imagen seleccionada" />
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