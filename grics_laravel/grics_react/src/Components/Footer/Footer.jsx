import React from 'react';
import styles from './Footer.module.css'; // Importa el archivo CSS y asigna un nombre de variable 'styles'

const Footer = () => {
  return (
    <footer className={styles.footer}> {/* Accede a la clase .footer utilizando la variable 'styles' */}
      <div className="Container">
          <p>Grup consolidat: 2021SGR00233</p>
          <div className="Logos">
            <img src='grics_laravel/grics_react/src/Components/Footer/img/grics_logo.png' alt="Grics Logo"></img>

          </div>
          <a href="https://github.com/andres17878/projecte_grics">Desenvolupat per alumnat d'Institut TIC de Barcelona</a> 

          <ul>
            <li><a href="https://google.com">Avís legal</a></li>
            <li><a href="https://google.com">Política de Privacitat</a></li>
            <li><a href="https://google.com">Condicions d’ús</a></li>
            <li><a href="https://google.com">Política de cookies</a></li>
          </ul>

      </div>
    </footer>
  )
}

export default Footer;
