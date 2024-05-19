import React from 'react';
import './CrearNoticia.css';
import flecha from '../../assets/BACK/arrow_back.svg';
import { useState } from 'react';
import { useRef } from 'react';

const FormulariNoticia = () => {
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
         <div className='recuadro_Form_Projecte'>
            <div className='titulo_nuevos_Projectos'>
                <img src={flecha} alt='back' className='flecha_Projectes'></img>
                <h1 className='titulo-nou-Projecte'>Nova Noticia</h1>
            </div>
            <form >
                <div className='formulario-Projecte'>
                    <div className='Izquierda-Projecte'>
                        <input type="text" placeholder='Títol noticia'/>
                        <input type="text" placeholder='Descripció'/>
                        <textarea placeholder='RESUM'></textarea>
                    </div>
                    <div className='Derecha-Projecte'>
                        <input type="text" placeholder='Imatge'/>
                        <label >Imatge</label>
                        <input type="file" ref={inputFileRef} accept="image/*" onChange={handleImageChange} />                         {imagePreview && (
                            <div>
                                <img src={imagePreview} alt="Imagen seleccionada" />
                                <button className='boton-eliminar-img-Projecto' onClick={handleImageRemove}>Eliminar imatge</button>
                            </div>
                        )} 
                        <input type="text" placeholder='RESULTATS'/>



                    </div>
                </div>
                <div className='boton-Projecte'>
                    <button className='estilo-boton'>Publica</button>
                </div>
            </form>
         </div>
    )
}
export default FormulariProjecte;