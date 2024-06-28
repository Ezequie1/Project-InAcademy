import React, { useEffect, useState } from 'react'
import './style.css'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

export function ProgressCourseCard(params){
    const [ progress, setProgress ] = useState(0)

    function process(value) {
        if(value <= params.course.progress){
            setTimeout(() => {
                setProgress(value)
                process(value + 1)      
            }, 20);
        }
    }
    
    // eslint-disable-next-line
    useEffect(() => process(1),[])

    return(
        <div className='cardInProgress'>
            <div className='infosCardProgress'>
                <img src={params.course.img} alt=''/>
                <div>
                    <h3>{ params.course.title }</h3>
                    <p>{ params.course.author }</p>
                    <div className='moreInfosCourse'> 
                        <p><PersonOutlineRoundedIcon/>{ params.course.totalUsers }</p>
                        <p><AccessTimeRoundedIcon/>{ params.course.totalHours }h</p>
                    </div>
                </div>
            </div>
            <div className='percentDivWithInfos'>
                <div>
                    <span style={{width: `${progress}%`}}></span>
                </div>
                <p>{ progress }%</p>
            </div>
        </div>
    )
}