import './Recerca.css'
import Menu from '../Navbar/Menu'
import Footer from '../Footer/Footer'


export default function Recerca() {
    return (
        <div className="recerca">
            <Menu/>
            <div className='titulo-recerca'>
                <div className='line-1'></div>
                <h1 className='pppp'>RECERCA</h1>
                <div className='line-2'></div>

            </div>
            <div className='linias'>
                <h2 className='titulo-Linias'>LÍNIES D'INVESTIGACIÓ</h2>
            </div>
            <div className='carousel-Linias'></div>
            <Footer/>
        </div>
    )
}