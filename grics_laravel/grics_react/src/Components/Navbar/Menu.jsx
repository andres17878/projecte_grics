import './Menu.css'
import logo from '../../assets/logo.svg'
import lang from '../../assets/lang.svg'

function Menu(){
    return (
        <div className="menu">
            <img src={logo} alt="logo" className="logo" />
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
