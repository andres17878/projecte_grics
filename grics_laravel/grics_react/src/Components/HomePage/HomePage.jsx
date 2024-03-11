import "./HomePage.css";
import Menu from "../Navbar/Menu";
import Footer from "../Footer/Footer";
import '../../index.css';
import fotoPrincipal from '../../assets/facultat1.gif'
import logoPrincipal from '../../assets/logo_principal.svg'

function HomePage() {
    return (
        <div className="home_page">
            <Menu />


            <div className="home_page_content">
                <div className="img_container">
                    <img className="foto_principal" src={fotoPrincipal} alt="foto principal" />
                    <img className="logo_principal" src={logoPrincipal} alt="logo principal" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;