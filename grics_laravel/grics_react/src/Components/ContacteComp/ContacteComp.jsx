import './ContacteComp.css'
import Boton from '../Boton/Botton'
function Contacte_C() {
    return (
        <div className='divForm'>
            <div className="spaceContacte">
                <form className='form'>
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
                    </div>
                    <div>
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" placeholder="Apellido" />
                    </div>
                    <div>
                        <label htmlFor="consulta">Consulta:</label>
                        <textarea id="consulta" name="consulta" placeholder='Escribe' />
                    </div>
                    <div>
                        <input type="checkbox" id="terminos" name="aceptaTerminos"/>
                        <label htmlFor="terminos">Acepto los términos y condiciones</label>
                    </div>
                    <Boton/>
                </form>
            </div>
        </div>
    )
}
export default Contacte_C