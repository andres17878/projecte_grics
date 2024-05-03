import React from 'react';
import './Linia_Investigacio.css';
import flecha from '../../assets/BACK/arrow_back.svg';
import { useState } from 'react';


const LiniaInvestigacio = () => {
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
                            <img src={imagePreview} alt="Imagen seleccionada" />
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
export default LiniaInvestigacio;