import React, { useContext } from 'react'
import './style.css'
import { Ranking } from './Components/Ranking'
import { QrCode } from './Components/QrCode'
import { CarrouselSlider } from './Components/Carrousel'
import { courses, progressCourses } from '../../static/variables'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { ProgressCourseCard } from './Components/ProgressCourseCard'
import { CardCourse } from '../../Components/Card'
import { ModalMoreInfos } from './Components/MoreInfos'
import { Context } from '../../Context/authProvider'
import { CardInfo } from './Components/CardInfos'
import { BigCardCourse } from './Components/BigCardCourse'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/dataProvider'

export function HomePage(){
    const { userData } = useContext(Context);
    const { inProgressCourses, recentlyAddedCourses, coursesByCategory, allCourses } = useContext(DataContext)

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
                    <h1>Bem vindo { userData && userData.name.split(" ")[0] }!</h1>
                    <Link to='/meu-aprendizado'>
                        <p>{ inProgressCourses.length !== 0 && 'Cursos em progresso' }</p>
                    </Link>
                </div> 
                { inProgressCourses.length !== 0 &&
                    <>
                        <div className='contentDiv' style={{ width: inProgressCourses.length < 3 ? 'clamp(400px, 90vw, 1152px)' : 'clamp(400px, calc(90vw + 48px), 1200px)'}}>
                            { inProgressCourses.length > 2 && <ArrowBackIosNewRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('inProgressDiv', 'left')}/> }
                            <div className='inProgressCoursesDiv' id='inProgressDiv'>
                                { inProgressCourses.map((course, index) => <ProgressCourseCard course={course} key={index}/> ) }  
                            </div>
                            { inProgressCourses.length > 2 && <ArrowForwardIosRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('inProgressDiv', 'right')}/> }
                        </div>
                        <div className='welcomeDiv'>
                            <h1>Recentemente adicionados</h1>
                            <Link to='/todos-os-cursos/recentes'>
                                <p>Recentes</p>
                            </Link>
                        </div>
                    </>
                }
                <div className='contentDiv' style={{ width: recentlyAddedCourses.length < 5 ? 'clamp(400px, 90vw, 1152px)' : 'clamp(400px, calc(90vw + 48px), 1200px)'}}>
                    { recentlyAddedCourses.length > 4 && <ArrowBackIosNewRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('addRecently', 'left')}/> }
                    <div className='inProgressCoursesDiv' id='addRecently'>
                        { recentlyAddedCourses.map((course, index) => <CardCourse course={course} isRecently key={index}/> ) }  
                    </div>
                    { recentlyAddedCourses.length > 4 && <ArrowForwardIosRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('addRecently', 'right')}/> }
                </div>
                <div className='welcomeDiv'>
                    <h1>Busque por categoria</h1>
                    <p>Categorias</p>
                </div>
                <div className='contentDiv' style={{ width: coursesByCategory.length < 5 ? 'clamp(400px, 90vw, 1152px)' : 'clamp(400px, calc(90vw + 48px), 1200px)'}}>
                    { coursesByCategory.length > 4 && <ArrowBackIosNewRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('categoryContent', 'left')}/> }
                    <div className='inProgressCoursesDiv' id='categoryContent'>
                        { coursesByCategory.map((course, index) => <CardCourse course={course} key={index}/> )}
                    </div>
                    { coursesByCategory.length > 4 && <ArrowForwardIosRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('categoryContent', 'right')}/> }
                </div>
                <CardInfo/>
                <div className='welcomeDiv'>
                    <h1>Aqui vai uma sugestão pra você!</h1>
                    <p>Todos cursos</p>
                </div>
                <BigCardCourse/>
                <div className='contentDiv' style={{ width: allCourses.length < 5 ? 'clamp(400px, 90vw, 1152px)' : 'clamp(400px, calc(90vw + 48px), 1200px)'}}>
                    { allCourses.length > 4 && <ArrowBackIosNewRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('allCoursesContent', 'left')}/> }
                    <div className='inProgressCoursesDiv' id='allCoursesContent'>
                        { allCourses.map((course, index) => <CardCourse course={course} key={index}/> ) }  
                    </div>
                    { allCourses.length > 4 && <ArrowForwardIosRoundedIcon className='arrows' onClick={() =>  smoothCarrousel('allCoursesContent', 'right')}/> }
                </div>
            </section>
            <ModalMoreInfos/>
        </>
    )
}