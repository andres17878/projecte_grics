import './Carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Contenido from '../Contenido/Contenido-contractes';
import axios from 'axios';
import { useState, useEffect } from 'react';

import CustomButtonGroup from '../Botones-Carousel/CustomButtonGroup-Contractes'; 




export default function CarouselProyecto() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const[ids, setIds] = useState([]);

  const fetchIdsFromDatabase = async () => {
    const response = await axios.get('http://localhost:8000/api/allIdLinies');
    return response.data;
  }



  useEffect(() => {
    fetchIdsFromDatabase()
        .then(fetchedIds => {
            setIds(fetchedIds);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching IDs:', error);
            setError(error);
            setLoading(false);
        });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!1</p>;



    return (
      <div className="carousel-container">
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className='carrusel'
          customButtonGroup={<CustomButtonGroup/>}
          renderButtonGroupOutside
          dotListClass=""
          focusOnSelect={false}
          draggable={false}
          swipeable={false}
          infinite={false}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=''
          slidesToSlide={1}
        >
          {ids.map(id => (
            <Contenido key={id.id} id={id.id} />
          ))}

        </Carousel>
      </div>
    );
}

