import React from 'react';
import './FormContratos.css';
import flecha from '../../assets/BACK/arrow_back.svg';
import { useState } from 'react';
import { useRef } from 'react';


const FormularioContratos = () => {
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
         <div className='recuadro_Form_Contratos'>
            <div className='titulo_nuevos_Contratos'>
                <img src={flecha} alt='back' className='flecha_Contratos'></img>
                <h1 className='titulo-nuevo-Contrato'>Nou Contracte</h1>
            </div>
            <form >
                <div className='formulario-Contratos'>
                    <div className='Izquierda-Contratos'>
                        <input type="text" placeholder='TITOL'/>
                        <input type="text" placeholder='INTEGRANTS'/>
                        <textarea placeholder='RESUM'></textarea>
                    </div>
                    <div className='Derecha-Contratos'>
                        <input type="text" placeholder='ENTITATS FINANÇADORES'/>
                        <label >Logos:</label>
                        <input type="file" ref={inputFileRef} accept="image/*" onChange={handleImageChange} />                         {imagePreview && (
                            <div>
                                <img src={imagePreview} alt="Imagen seleccionada" />
                                <button className='boton-eliminar-img-Contratos' onClick={handleImageRemove}>Eliminar imagen</button>
                            </div>
                        )} 
                        <input type="text" placeholder='RESULTATS'/>



                    </div>
                </div>
                <div className='boton-Contratos'>
                    <button className='estilo-boton'>Afegeix</button>
                </div>
            </form>
         </div>
    )
}
export default FormularioContratos;