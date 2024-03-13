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

            
            
            <Footer />
        </div>
    )
}

export default HomePage;