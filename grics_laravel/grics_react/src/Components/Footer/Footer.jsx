import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Grup consolidat: 2021SGR00233</p>

      <div className={styles["Container"]}>
          <div className={styles["Logos"]}>
            <img src='/src/assets/logo.svg' alt="Grics Logo"></img>
            <img src='/src/assets/logo.svg' alt="Grics Logo"></img>
            <img src='/src/assets/logo.svg' alt="Grics Logo"></img>
            <img src='/src/assets/logo.svg' alt="Grics Logo"></img>


          </div>
          <div className={styles["desenvolupat"]}>
            <a href="https://github.com/andres17878/projecte_grics">Desenvolupat per alumnat d'Institut TIC de Barcelona</a> 
          </div>
          <ul className={styles["list-container"]}>
            <li><a href="https://google.com">Avís legal</a></li>
            <li><a href="https://google.com">Política de Privacitat</a></li>
            <li><a href="https://google.com">Condicions d’ús</a></li>
            <li><a href="https://google.com">Política de cookies</a></li>
          </ul>
          <div>
          </div>

      </div>
    </footer>
  )
}

export default Footer;
