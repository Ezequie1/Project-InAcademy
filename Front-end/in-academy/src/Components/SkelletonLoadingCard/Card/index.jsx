import React from 'react'
import './style.css'

export function CardLoading(){
    let elements = []

    for(let i = 0; i < 5; i++){
        elements.push(
            <div className='cardLoading'>
                <div></div>
                <h3/>
                <p></p>
            </div>
        )
    }
    
    return (elements)
}