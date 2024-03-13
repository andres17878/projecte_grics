import './Menu.css'
import logo from '../../assets/logo.svg'
import logoHover from '../../assets/grics_logo_blanco.png'
import lang from '../../assets/lang.svg'

function Menu(){
    return (
        <div className="menu">
            <div className="logo">
                <img src={logo} alt="Imagen Normal" className="imagen-normal"></img>
                <img src={logoHover} alt="Imagen Hover" className="imagen-hover"></img>
            </div>
            <ul>
                <li>Membres</li>
                <li>Recerca</li>
                <li>Publicacions</li>
                <li>Actualitat</li>
                <li>Contacte</li>
            </ul>
            <img src={lang} alt="lang" className="toggle-lang" />
            
        </div>
    )
}

export default Menu
