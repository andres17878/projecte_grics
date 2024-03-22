import './Recerca.css'
import Menu from '../Navbar/Menu'
import Footer from '../Footer/Footer'
import CaruselLinias from './Carousel-linies'
import CaruselProjectes from './Carousel-projecte'


export default function Recerca() {

    return (
        <div className="recerca">
            <Menu/>
            <div className='titulo-recerca'>
                <div className='line-1'></div>
                <h1 className='pppp'>RECERCA</h1>
                <div className='line-2'></div>

            </div>
            <div>
                <div className='linias'>
                    <h2 className='titulo-Linias'>LÍNIES D'INVESTIGACIÓ</h2>
                </div>
                <div className='carousel-Linias'>
                    <CaruselLinias/>
                </div>
            </div>
            <div className='linia-separacion'></div>
            <div>
                <div>
                    <h2 className='titulo-projectes-investigacio'>PROJECTES D'INVESTIGACIÓ</h2>
                </div>
                <div className='carousel-projectes'>
                    <CaruselProjectes />
                </div>
            </div>

            <Footer/>
        </div>
    )
}