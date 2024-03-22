import './Contacte.css'
import Menu from '../Navbar/Menu'
import Footer from '../Footer/Footer'
import Contacte_C from '../ContacteComp/ContacteComp'
import map from '../../assets/map/mapUB.png'
export default function Contacte() {
    return (
        <div className="contacte">
            <Menu/>
            <br/>
            

            <div className='ContacteC'>
                <Contacte_C/>
                <div className='info'>
                    <div className="imgMap">
                        <img className="mapUB" src={map} alt="foto_mapa" />
                    </div>
                    <div className='plusInfo'>
                        <p><span class="material-symbols-outlined"></span>
                        <b>Direccion: </b>..........</p><br/>
                        <p><b>@ Correo : </b>..........</p><br/>
                        <p><b>Telefono : </b>..........</p><br/>
                    </div>
                </div>
            </div>
            <br/>          
            
            <Footer/>
        </div>

    )
}