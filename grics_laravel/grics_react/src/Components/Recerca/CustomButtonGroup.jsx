import PropTypes from 'prop-types';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

const CustomNavigationButtons = ({ next, previous, ...rest}) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  
  return(
    <div className="grupo_botones">

      <div className="boton_atras">
        <button onClick={() => previous()}>
          {" "}
          <FiChevronLeft />
        </button>
      </div>

      <div className="boton_adelante">

        <button onClick={() => next()}>
          {" "}
          <FiChevronRight />
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