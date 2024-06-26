import "./HomePage.css";
import Footer from "../Footer/Footer";
import '../../index.css';
import fotoPrincipal from '../../assets/Home/facultat1.gif'
import logoPrincipal from '../../assets/Logos/grics_logo_amplio.svg'
import MenuBurger from "../Navbar/MenuBureger";

function HomePage() {
    return (
        <div className="home_page">
            <MenuBurger />


            <div className="home_page_content">
                <div className="img_container">
                    <img className="foto_principal" src={fotoPrincipal} alt="foto principal" />
                    <img className="logo_principal" src={logoPrincipal} alt="logo principal" />
                </div>
                <div className="descripcio-home">
                    <div className="texto-home">
                        <h1 className="titulo-home">GRUP DE RECERCA CONSOLIDAT</h1>
                        <p className="contenido-home">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum.Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                            id est laborum.</p>
                    </div>
                    <div className="foto">
                        <img src="/src/assets/Home/grup_consolidat.svg" alt="Imagen Edificio"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;