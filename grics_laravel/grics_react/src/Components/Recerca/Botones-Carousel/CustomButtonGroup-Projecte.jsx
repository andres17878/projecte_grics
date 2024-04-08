import PropTypes from 'prop-types';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import '../Carousel/Carousel.css';

const CustomNavigationButtons = ({ next, previous, ...rest}) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  
  return(
    <div className="grupo_botones_projecto">

      <div className="boton_atras">
        <button className="estiloBotones" onClick={() => previous()}>
          {" "}
          <FiChevronLeft className='flechasCarousel' />
        </button>
      </div>

      <div className="boton_adelante">

        <button className="estiloBotones" onClick={() => next()}>
          {" "}
          <FiChevronRight className='flechasCarousel'/>
        </button>

      </div>
    </div>
  )
}

export default CustomNavigationButtons;

CustomNavigationButtons.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
  goToSlide: PropTypes.func
}