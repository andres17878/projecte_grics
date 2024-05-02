import styles from './Footer.module.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-text"]}>
        <p>Grup consolidat: 2021SGR00233</p>
        <p>Proyecto PID2022-140498OB-100 financiado por:</p>
      </div>
      <div className={styles["Container"]}>
          <div className={styles["Logos"]}>
            <img src='/src/assets/Logos/miciu-uefeder-aei.png' alt="Logo Gobierno de España" className={styles["gobierno"]}></img>
        

          </div>
          <div className={styles["desenvolupat"]}>
            <a href="https://github.com/andres17878/projecte_grics">Desenvolupat per alumnat d&apos;Institut TIC de Barcelona</a> 
          </div>
          <ul className={styles["list-container"]}>
            <li><a href="https://google.com">Avís legal</a></li>
            <li><a href="https://google.com">Política de Privacitat</a></li>
            <li><a href="https://google.com">Condicions d&apos;ús</a></li>
            <li><a href="https://google.com">Política de cookies</a></li>
          </ul>
          <div >
            <Link to="/login">
               <img src='/src/assets/Home/login_logo.svg' alt='Login' className={styles.login}></img>
            </Link>
          </div>

      </div>
    </footer>
  )
}

export default Footer;
