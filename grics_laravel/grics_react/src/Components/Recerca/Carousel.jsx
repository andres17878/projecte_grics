import './Carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Contenido from './Contenido';
import axios from 'axios';



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
      imgUrl: '/home/austria/Escritorio/projecte_grics/grics_laravel/grics_react/src/assets/Recerca/Rectangle282.svg',
      alt:"Imagen de ejemplo 1",
      texto:"Texto de ejemplo 1"
    },    {
      id:2,
      imgUrl: '/home/austria/Escritorio/projecte_grics/grics_laravel/grics_react/src/assets/Recerca/Rectangle282.svg',
      alt:"Imagen de ejemplo 2",
      texto:"Texto de ejemplo 2"
    },    {
      id:3,
      imgUrl: '/home/austria/Escritorio/projecte_grics/grics_laravel/grics_react/src/assets/Recerca/Rectangle282.svg',
      alt:"Imagen de ejemplo 3",
      texto:"Texto de ejemplo 3"
    },    {
      id:4,
      imgUrl: '/home/austria/Escritorio/projecte_grics/grics_laravel/grics_react/src/assets/Recerca/Rectangle282.svg',
      alt:"Imagen de ejemplo 4",
      texto:"Texto de ejemplo 4"
    },    {
      id:5,
      imgUrl: '/home/austria/Escritorio/projecte_grics/grics_laravel/grics_react/src/assets/Recerca/Rectangle282.svg',
      alt:"Imagen de ejemplo 5",
      texto:"Texto de ejemplo 5"
    },    {
      id:6,
      imgUrl: '/home/austria/Escritorio/projecte_grics/grics_laravel/grics_react/src/assets/Recerca/Rectangle282.svg',
      alt:"Imagen de ejemplo 6",
      texto:"Texto de ejemplo 6"
    },    {
      id:7,
      imgUrl: '/home/austria/Escritorio/projecte_grics/grics_laravel/grics_react/src/assets/Recerca/Rectangle282.svg',
      alt:"Imagen de ejemplo 7",
      texto:"Texto de ejemplo 7"
    }
  ]
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      axios.get(`http://localhost:8000/api/linias`)
      .then((response) => {
          setData(response.data);
          datos = response.data;
          setLoading(false);
      })
      .catch((error) => {
          setError(error);
          setLoading(false);
      });
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const contenido = datos.map(item => (
    <Contenido id={item.id}/>
  ))
    return (
        <div >
            <Carousel responsive={responsive} >
              {contenido}

            </Carousel>;
        </div>
    )
}