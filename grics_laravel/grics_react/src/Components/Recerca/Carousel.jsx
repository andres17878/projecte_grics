import './Carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Contenido from './Contenido';


export default function prueba() {

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const contenidoData = [
    {
      id:1,
      imgUrl: '../../assets/Recerca/Rectangle 282.svg',
      texto:"Texto de ejemplo 1"
    },
    {
      id:2,
      imgUrl: '../../assets/Recerca/Rectangle 282.svg',
      texto:"Texto de ejemplo 2"
    },
    {
      id:3,
      imgUrl: '../../assets/Recerca/Rectangle 282.svg',
      texto:"Texto de ejemplo 3"
    }
  ]
  const contenido = contenidoData.map(item => (
    <Contenido url={item.imgUrl} texto={item.texto}/>
  ))
    return (
        <div >
            <Carousel responsive={responsive} >
              {contenido}

            </Carousel>;
        </div>
    )
}