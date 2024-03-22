import './Actualitat.css'
import Menu from '../Navbar/Menu'
import Footer from '../Footer/Footer'
import Noticia from '../Noticia/Noticia'

export default function Actualitat() {
    return (
        <div className="actualitat">
            <Menu/>
            <div className='titulo'>
                <div className='line-1'></div>
                <h1 className='pppp'>Actualitat</h1>
                <div className='line-2'></div>

            </div>
            <div className='linias'>
            </div>
            <div className='carousel-Linias'></div>
                <Noticia/>
                <Noticia/>
                <Noticia/>
                <Noticia/>
            <Footer/>
        </div>
    )
}