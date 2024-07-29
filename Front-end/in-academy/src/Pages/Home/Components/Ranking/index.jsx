import React, { useState } from 'react'
import './style.css'
import Cup from '../../../../Images/trofeu.png'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'
import EduardoMenezes from './Images/eduardoMenezes.png'
import Franklin from './Images/Franklin.png'
import Gustavo from './Images/gustavoSantana.png'
import Hugo from './Images/HugoDeJesus.png'
import JoseLuiz from './Images/JoseLuiz.png'
import JoseNildo from './Images/JoseNildo.png'
import Thales from './Images/ThalesMateus.png'
import UserImg from './Images/imgUser.jpg'

export function Ranking(){
    const [ open, setOpen ] = useState('-400px')

    const openRanking = () => {
        open === '20px' ? setOpen('-400px') : setOpen('20px')
    }

    const users = [
        { nome: 'Eduardo Menezes', points: 690, img: EduardoMenezes },
        { nome: 'Franklin', points: 630, img: Franklin },
        { nome: 'Gustavo Santana', points: 610, img: Gustavo },
        { nome: 'Hugo de Jesus', points: 500, img: Hugo },
        { nome: 'José Luiz', points: 480, img: JoseLuiz },
        { nome: 'José Nildo', points: 450, img: JoseNildo },
        { nome: 'Thales Mateus', points: 440, img: Thales },
    ]

    const RenderUsers = (user, index) => {
        let variation = 'gold'

        if(index === 1) variation = 'silver'
        if(index === 2) variation = 'bronze' 

        return(
            <div className='itemRank' key={ index }>
                <div className='infoAndUserImage'>
                    <img src={ user.img } alt=""/>
                    <div>
                        <h1>{ user.nome }</h1>
                        <p>
                            { index < 3 ? 
                                <><strong className={variation}>{ user.points }</strong> pontos</>
                                :
                                user.points + ' pontos'
                            } 
                        </p>
                    </div>
                </div>
                { index < 3 && <EmojiEventsRoundedIcon fontSize='large' className={variation}/>}
            </div>
        )
    }

    return(
        <>
            <div className='rankingFloat' onClick={openRanking}>
                <img src={ Cup } alt='' />
            </div>
            <div className='rankingDiv' style={{ right: open }}>
                <div className='arrowBackRank'>
                    <ArrowForwardIosRoundedIcon onClick={openRanking}/>
                    <h1>Melhores</h1>
                    <span></span>
                </div>
                <section className='contentRanking'>
                    { users.map((item, index) => RenderUsers(item, index))}
                    <span>Ver mais</span>
                    <div className='itemRank youRank'>
                        <div className='infoAndUserImage'>
                            <img src={ UserImg } alt=""/>
                            <div>
                                <h1>Ezequiel Alves</h1>
                                <p>415 pontos</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>  
        </>
    )
}