import './Menu.css'
import logo from '../../assets/logo.svg'
import logoHover from '../../assets/grics_logo_blanco.png'
import lang from '../../assets/lang.svg'
import { Link } from 'react-router-dom'

function Menu(){
    return (
        <div className="menu">
            <div className="logo">
                <img src={logo} alt="Imagen Normal" className="imagen-normal"></img>
                <img src={logoHover} alt="Imagen Hover" className="imagen-hover"></img>
            </div>
            <ul>
                <li> <Link to="/membres">Membres</Link></li>
                <li> <Link to="/recerca">Recerca</Link></li>
                <li> <Link to="/publicacions">Publicacions</Link></li>
                <li> <Link to="/actualitat">Actualitat</Link></li>
                <li> <Link to="/contacte">Contacte</Link></li>

            </ul>
            <img src={lang} alt="lang" className="toggle-lang" />
            
        </div>
    )
}

export default Menu
