import styles from './Footer.module.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Grup consolidat: 2021SGR00233</p>

      <div className={styles["Container"]}>
          <div className={styles["Logos"]}>
            <img src='/src/assets/Logos/logo.svg' alt="Grics Logo"></img>
            <img src='/src/assets/Logos/logo.svg' alt="Grics Logo"></img>
            <img src='/src/assets/Logos/logo.svg' alt="Grics Logo"></img>
            <img src='/src/assets/Logos/logo.svg' alt="Grics Logo"></img>



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
