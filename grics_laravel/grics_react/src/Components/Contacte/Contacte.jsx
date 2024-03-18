import './Contacte.css'
import Menu from '../Navbar/Menu'
import Footer from '../Footer/Footer'
import Contacte_C from '../ContacteComp/ContacteComp'
export default function Contacte() {
    return (
        <div className="contacte">
            <Menu/>
            <br/>
            <div className='<Contacte_C/>'>
                <Contacte_C/>
            </div>
            
            <br/>
            <Footer/>
        </div>
    )
}