import './Menu.css'
import logo from '../../assets/logo.svg'
import lang from '../../assets/lang.svg'
import { Link } from 'react-router-dom'

function Menu(){
    return (
        <div className="menu">
            <Link to="/"><img src={logo} alt="logo" className="logo" id="logo" /></Link>
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
