import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { ProgressCourseCard } from '../../Pages/Home/Components/ProgressCourseCard'
import { Link } from 'react-router-dom'
import { CardCourse } from '../Card'
import React from 'react'
import './style.css'

export function SectionCard({ data, titleSection, nameLink, linkSection, isProgressCard}){

    const smoothCarrousel = (id, to) => {
        let size = ( window.innerWidth / 10 ) * 4.4 + 20

        document.getElementById(id).scrollBy({
            left: to === 'left' ? -size : +size,
            top: 0,
            behavior: 'smooth'
        })
    }

    return(
        <>
            <div className='titleSection'>
                <h1>{ titleSection }</h1>
                { nameLink &&
                    <Link to={ linkSection }>
                        <p>{ nameLink }</p>
                    </Link>
                }
            </div> 
            <section className='boxSection' style={{ width: data.length < 5 || data.length === 0 ? 'var(--principalWidthContent)' : 'var(--secondaryWidthContent)'}}>
                { data.length > 4 && <ArrowBackIosNewRoundedIcon className='arrows' onClick={() => smoothCarrousel(titleSection, 'left')}/>}
                    <div className='contentSectionCard' id={ titleSection }>
                        { data.map((course, index) => isProgressCard ? <ProgressCourseCard course={course} key={index}/> : <CardCourse course={course} key={index}/>)}
                    </div>
                { data.length > 4 && <ArrowForwardIosRoundedIcon className='arrows' onClick={() =>  smoothCarrousel(titleSection, 'right')}/>}
            </section>
        </>
    )
}