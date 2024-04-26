import './Recerca.css'
import Menu from '../Navbar/Menu'
import Footer from '../Footer/Footer'
import CaruselLinias from './Carousel/Carousel-linies'
import CaruselProjectes from './Carousel/Carousel-projecte'
import CarouselContractes from './Carousel/Carousel-contractes'
// import { useState, useEffect } from 'react';




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
                    <h2 className='titulo-Linias'>LÍNIES D&apos;INVESTIGACIÓ</h2>
                </div>
                <div>
                    <div className='carousel-Linias'>
                        <CaruselLinias /> 
                    </div>
                </div>
            </div>
            <div className='linia-separacion'></div>
            <div className='projecto'>
                <div>
                    <h2 className='titulo-projectes-investigacio'>PROJECTES D&apos;INVESTIGACIÓ</h2>
                </div>
                <div className='carousel-projectes'>
                    <CaruselProjectes />
                </div>
            </div>
            <div className='linia-separacion'></div>
            <div className='contractes'>
                <div>
                    <h2 className='titulo-contractes'>CONTRACTES</h2>
                </div>
                <div className='carousel-contractes'>
                    <CarouselContractes />
                </div>
            </div>
            


            <Footer/>
        </div>
    )
}