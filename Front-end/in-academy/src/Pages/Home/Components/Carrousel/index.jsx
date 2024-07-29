import React from 'react'
import { Carousel } from "react-responsive-carousel";
import './style.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export function CarrouselSlider(){
    return(
        <Carousel autoPlay showStatus={false} width={'clamp(400px, 90vw, 1152px)'} showThumbs={false} infiniteLoop className='carrousel'>
            <img
                src="https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg"
                alt=""
            />
            <img      
                src="https://coreui.io/react/docs/static/vue-8a74d93fde1a02c247304291cce46797.jpg"
                alt=""
            />
            <img    
                src="https://coreui.io/react/docs/static/angular-2f3764e2ec8b0b47ebe68f2f80260ef1.jpg"
                alt=""
            />
        </Carousel>
    )
}