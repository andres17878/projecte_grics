import './ContacteComp.css'
import Boton from '../Boton/Botton'
function Contacte_C() {
    return (
        <div className='divForm'>
            <div className="spaceContacte">
                <form className='form'>
                    <div>
                        <label htmlFor="nombre">Nom:</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Nom" />
                    </div>
                    <div>
                        <label htmlFor="apellido">Cognom:</label>
                        <input type="text" id="apellido" name="apellido" placeholder="Cognom" />
                    </div>
                    <div>
                        <label htmlFor="consulta">Escriu aqui la teva consulta::</label>
                        <textarea id="consulta" name="consulta" placeholder='...' />
                    </div>
                    <div>
                        <input type="checkbox" id="terminos" name="aceptaTerminos"/>
                        <label htmlFor="terminos">Aceptar términos i condicions</label>
                    </div>
                    <Boton/>
                </form>
            </div>
        </div>
    )
}
export default Contacte_C