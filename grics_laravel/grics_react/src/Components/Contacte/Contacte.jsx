import './Contacte.css'
import Menu from '../Navbar/MenuBureger'
import Footer from '../Footer/Footer'

export default function Contacte() {
    return (
        <div>
            <Menu/>
            <div className="contacte">
                <div className="contacte_derecha">
                    <h1>Contacta amb nosaltres</h1>
                    <div className="separacion-contacte"></div>
                    <h3>Direcció: </h3>
                    <h4>Gran Via de les Corts Catalanes, 585, L'Eixample, 08007 Barcelona</h4>
                    <h3>Correu electrònic: </h3>
                    <h4>grics@grics.com</h4>
                    <h3>Telèfon: </h3>
                    <h4>93 123 45 67</h4>
                    <br/>
                    <div className="separacion-contacte"></div>
                    <div className='redes'>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/material-rounded/48/000000/facebook.png" alt="facebook"/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/material-rounded/48/000000/twitter.png" alt="twitter"/>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/material-rounded/48/000000/linkedin.png" alt="linkedin"/>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}