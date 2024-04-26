import React, { useState } from 'react';
import './MenuBurger.css';
import logo from '../../assets/Logos/grics_logo_amplio.svg';
import logoHover from '../../assets/Logos/grics_logo_amplio+blanco.svg';
import { Link } from 'react-router-dom';
import BurgerButton from './BurgerButton';

function MenuBurger(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="menuB">
            <div className="logoB">
                <img src={logo} alt="Imagen Normal" className="imagen-normalB"></img>
                <Link to="/"><img src={logoHover} alt="Imagen Hover" className="imagen-hoverB"></img></Link>
            </div>
            <ul className={`enlacesB ${isOpen ? 'active' : ''}`}>
                {console.log(isOpen)}
                <li> <Link to="/membres">Membres</Link></li>
                <li> <Link to="/recerca">Recerca</Link></li>
                <li> <Link to="/publicacions">Publicacions</Link></li>
                <li> <Link to="/actualitat">Actualitat</Link></li>
                <li> <Link to="/contacte">Contacte</Link></li>
            </ul>
            <div className='boton-Burger' onClick={toggleMenu}>
                <BurgerButton isOpen={isOpen} />
            </div>
            <div className={`initial ${isOpen ? 'active' : ''}`}></div>

        </div>
    );
}

export default MenuBurger;
