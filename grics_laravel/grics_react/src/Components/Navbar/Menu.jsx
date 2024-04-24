
import './Menu.css';
import logo from '../../assets/Logos/grics_logo_amplio.svg';
import logoHover from '../../assets/Logos/grics_logo_amplio+blanco.svg';
import { Link } from 'react-router-dom';

function Menu(){
    return (
        <div className="menu">
            <div className="logo">
                <img src={logo} alt="Imagen Normal" className="imagen-normal"></img>
                <Link to="/"><img src={logoHover} alt="Imagen Hover" className="imagen-hover"></img></Link>
            </div>
            <ul className="enlaces">
                <li> <Link to="/membres">Membres</Link></li>
                <li> <Link to="/recerca">Recerca</Link></li>
                <li> <Link to="/publicacions">Publicacions</Link></li>
                <li> <Link to="/actualitat">Actualitat</Link></li>
                <li> <Link to="/contacte">Contacte</Link></li>
            </ul>
            
        </div>
    );
}

export default Menu;
