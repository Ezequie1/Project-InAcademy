import React from 'react'
import './style.css'
import CircularProgress from '@mui/material/CircularProgress'

export function Loading(){
    return(
        <div className='loadingDiv'>
            <CircularProgress style={{color: "var(--blue)" }}/>
        </div>
    )
}