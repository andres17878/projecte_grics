import './Carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Contenido from './Contenido-Linies';
import axios from 'axios';
import { useState, useEffect } from 'react';



export default function prueba() {

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 5000, min: 4000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 4000, min: 1350 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1350, min: 900 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1
    }
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      axios.get(`http://localhost:8000/api/countLinies`)
      .then((response) => {
          setData(response.data);
          setLoading(false);
      })
      .catch((error) => {
          setError(error);
          setLoading(false);
      });
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!1</p>;



    return (
        <div >
            <Carousel responsive={responsive} >
              {Array.from({ length: data }, (_, index) => (
                  <Contenido key={index} id={index + 1} />
              ))}

            </Carousel>;
        </div>
    )
}