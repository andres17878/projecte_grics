import './MiembroComp.css'
import membreImg from '../../assets/membre/avatar.png'
function Comp_Membres(){
    return( 
        <div className='divMayor'>
            <div className="miembros">
            <div className='portaImagen'>
                <img src={membreImg} alt="miembro" className="imgMiembro" />
            </div>
            
            <ul>
                <li id="li">Nom</li>
                <li id="li">Cognom</li>
                <li id="li">Carrec</li>
                <li id="li">Linies de recerca</li>
                <li id="li">CV</li>
                <li id="li">Descripción</li>
            </ul>
        </div>
        </div>
    )
}
export default Comp_Membres