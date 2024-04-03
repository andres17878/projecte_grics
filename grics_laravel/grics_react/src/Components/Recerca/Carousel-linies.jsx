import './Carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Contenido from './Contenido-Linies';
import axios from 'axios';
import { useState, useEffect } from 'react';

import CustomButtonGroup from './CustomButtonGroup'; 




export default function CarouselLinies({ currentSlide }) {

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
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!1</p>;



    return (
      <div className="carousel-container">
      <Carousel
        arrows={false}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        draggable
        infinite
        minimumTouchDrag={80}
        pauseOnHover
        slidesToSlide={1}
        swipeable
        selectedItem={currentSlide}
        customButtonGroup={<CustomButtonGroup />} 
        renderButtonGroupOutside={true} 
      >

              {Array.from({ length: data }, (_, index) => (
                  <Contenido key={index} id={index + 1} />
              ))}

            </Carousel>
        </div>
    )
}