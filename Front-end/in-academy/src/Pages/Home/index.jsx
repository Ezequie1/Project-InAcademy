import React from 'react'
import './style.css'
import { Ranking } from './Components/Ranking'
import { QrCode } from './Components/QrCode'
import { CarrouselSlider } from './Components/Carrousel'
import { progressCourses } from '../../static/variables'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { ProgressCourseCard } from './Components/ProgressCourseCard'

export function HomePage(){

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
                <div className='inProgressCoursesDiv'>
                    { progressCourses.length > 3 && <ArrowBackIosNewRoundedIcon/> }
                    {
                        progressCourses.map((course, index) => <ProgressCourseCard course={course} key={index}/> )
                    }
                    { progressCourses.length > 3 && <ArrowForwardIosRoundedIcon/> }
                </div>

            </section>
        </>
    )
}