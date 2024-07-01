import React from 'react'
import './style.css'
import { Ranking } from './Components/Ranking'
import { QrCode } from './Components/QrCode'
import { CarrouselSlider } from './Components/Carrousel'
import { courses, progressCourses } from '../../static/variables'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { ProgressCourseCard } from './Components/ProgressCourseCard'
import { CardCourse } from '../../Components/Card'

export function HomePage(){

    const smoothCarrousel = (id, to) => {
        let size = ( window.innerWidth / 10 ) * 4.4 + 20
        document.getElementById(id).scrollBy({
            left: to === 'left' ? -size : +size,
            top: 0,
            behavior: 'smooth'
        });
    }

    return(
        <>
            <Ranking/>
            <QrCode/>
            <section className='contentHome'>
                <CarrouselSlider/>
                <div className='welcomeDiv'>
                    <h1>Bem vindo Ezequiel!</h1>
                    <p>Cursos em progresso</p>
                </div>
                <div className='contentDiv'>
                    { progressCourses.length > 2 && <ArrowBackIosNewRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('inProgressDiv', 'left')}/> }
                    <div className='inProgressCoursesDiv' id='inProgressDiv'>
                        { progressCourses.map((course, index) => <ProgressCourseCard course={course} key={index}/> ) }  
                    </div>
                    { progressCourses.length > 2 && <ArrowForwardIosRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('inProgressDiv', 'right')}/> }
                </div>
                <div className='welcomeDiv'>
                    <h1>Recentemente adicionados</h1>
                    <p>Recentes</p>
                </div>
                <div className='contentDiv'>
                    { progressCourses.length > 2 && <ArrowBackIosNewRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('addRecently', 'left')}/> }
                    <div className='inProgressCoursesDiv' id='addRecently'>
                        { courses.map((course, index) => <CardCourse course={course} key={index}/> ) }  
                    </div>
                    { progressCourses.length > 2 && <ArrowForwardIosRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('addRecently', 'right')}/> }
                </div>
            </section>
        </>
    )
}