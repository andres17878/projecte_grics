import './Carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ejemplo from '../../assets/Recerca/Rectangle 282.svg';


export default function prueba() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div >
            <Carousel responsive={responsive} className="carousel-1">
                <div className='Card-1'>
                    <img src={ejemplo} alt='Imagen de ejemplo'></img>
                    <h2>Texto de ejemplo</h2>
                </div>
                <div className='Card-1'>
                    <img src={ejemplo} alt='Imagen de ejemplo'></img>
                    <h2>Texto de ejemplo</h2>
                </div>
                <div className='Card-1'>
                    <img src={ejemplo} alt='Imagen de ejemplo'></img>
                    <h2>Texto de ejemplo</h2>
                </div>
                <div className='Card-1'>
                    <img src={ejemplo} alt='Imagen de ejemplo'></img>
                    <h2>Texto de ejemplo</h2>
                </div>
            </Carousel>;
        </div>
    )
}