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
                        <p>Direccion: ......</p><br/>
                        <p>@ Correo : ..........</p><br/>
                        <p>Telefono : ..........</p><br/>
                    </div>
                </div>
            </div>

            {/* <div className='info'>
                <div className="imgMap">
                    <img className="mapUB" src={map} alt="foto_mapa" />
                </div>
                <div className='plusInfo'>
                    <p>Direccion: ......</p><br/>
                    <p>@ Correo : ..........</p><br/>
                    <p>Telefono : ..........</p><br/>
                </div>
            </div> */}
            
            
            <Footer/>
        </div>

    )
}