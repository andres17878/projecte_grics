import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Menu.css';
import logo from '../../assets/Logos/grics_logo_amplio.svg';
import logoHover from '../../assets/Logos/grics_logo_amplio+blanco.svg';
import lang from '../../assets/Home/lang.svg';
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
            <Dropdown className="custom-dropdown">
            <Dropdown.Toggle variant="success" className="dropdown-basic">
                <img src={lang} alt="lang" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Castella</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Català</Dropdown.Item>
                <Dropdown.Item href="#/action-3">English</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

            
        </div>
    );
}

export default Menu;
