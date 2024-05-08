import './FormMembres.css'
import { useState } from 'react';

function formulari_noticia() {
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
                        <h1>NOVA NOTICIA</h1>
                    </div>
                    <div>
                        <input type="text" id="titulo" name="titulo" placeholder="Títol de la noticia" />
                    </div>
                    <div>
                        <input type="text" id="data" name="data" placeholder="Data de publicació" />
                    </div>
                    <div>
                        <input type="text" id="descripcio" name="descripcio" placeholder="Text de la noticia" />
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
                        <button type="submit" className="addMembre">Publica</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Form_M