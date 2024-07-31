import React, { useEffect, useState } from 'react'
import './style.css'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export function ProgressCourseCard(params){
    const [ progress, setProgress ] = useState(0)

    function process(value) {
        if(value <=  Math.floor(Math.random() * 100)){
            setTimeout(() => {
                setProgress(value)
                process(value + 1)
            }, 20);
        }
    }
    
    // eslint-disable-next-line
    useEffect(() => process(1), [])

    return(
        <div className='cardInProgress'>
            <div className='infosCardProgress'>
                <img src={params.course.urlImageCourse} alt=''/>
                <div>
                    <h3>{ params.course.title }</h3>
                    <p>{ params.course.authorName }</p>
                    <div className='moreInfosCourse'> 
                        <p><PersonOutlineRoundedIcon/>{ params.course.totalUsersEnrollmenteds }</p>
                        <p><AccessTimeRoundedIcon/>{ params.course.totalHours }h</p>
                    </div>
                </div>
            </div>
            <div className='percentDivWithInfos'>
                <div>
                    <span style={{width: `${progress}%`, backgroundColor: progress === 100 ? 'var(--green)' : 'var(--blue)' }}></span>
                </div>
                <p> { progress === 100 ? <CheckCircleOutlineIcon style={{color: 'var(--green)'}}/> : progress + '%' } </p>
            </div>
        </div>
    )
}