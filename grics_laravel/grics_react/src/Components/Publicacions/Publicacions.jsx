import './Publicacions.css'
import Menu from '../Navbar/Menu'
import Footer from '../Footer/Footer'
import LaravelTest from '../LaravelTest/LaravelTest'

export default function Publicacions() {
    return (
        <div className="publicacions">
            <Menu/>
            <LaravelTest/>
            <Footer/>
        </div>
    )
}