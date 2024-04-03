import './Recerca.css'
import Menu from '../Navbar/Menu'
import Footer from '../Footer/Footer'
import CaruselLinias from './Carousel-linies'
import CaruselProjectes from './Carousel-projecte'

import React, { useState } from 'react'; 
import CustomNavigationButtons from './CustomButtonGroup';   


export default function Recerca() {

    //Para mover el carousel
    const [currentSlide, setCurrentSlide] = useState(0); 

    const handlePrevSlide = () => {
        console.log("Prev slide clicked. Current slide:", currentSlide);
        setCurrentSlide(currentSlide - 1);
        console.log("Current slide after update:", currentSlide);
      };
      
      const handleNextSlide = () => {
        console.log("Next slide clicked. Current slide:", currentSlide);
        setCurrentSlide(currentSlide + 1);
        console.log("Current slide after update:", currentSlide);
      };
      
      
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
                <div>
                    <CustomNavigationButtons onPrevClick={handlePrevSlide} onNextClick={handleNextSlide} /> 
                    <div className='carousel-Linias'>
                        <CaruselLinias currentSlide={currentSlide} /> 
                    </div>
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