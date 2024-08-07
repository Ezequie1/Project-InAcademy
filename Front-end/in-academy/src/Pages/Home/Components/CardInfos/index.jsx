import ComunityIcon from '../../../../Images/comunityIcon.png'
import React from 'react'
import './style.css'

export function CardInfo(){
    return(
        <section className='cardInfo'>
            <img src={ComunityIcon} alt=''/>
            <span>
                <h3>A união faz a força!</h3>
                <p>Junte se a comunidades para adquirir mais conhecimento junto com outros colaboradores!</p>
            </span>
            <button>
                Junte-se
            </button>
        </section>
    )
}