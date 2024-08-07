import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { imagesCarrousel } from '../../../../static/variables'
import { Carousel } from 'react-responsive-carousel'
import React from 'react'
import './style.css'

export function CarrouselSlider(){
    return(
        <Carousel className='carrousel' autoPlay showStatus={false} showThumbs={false} infiniteLoop >
            { imagesCarrousel.map((image, index) => <img src={image} alt='' key={index}/>) }
        </Carousel>
    )
}