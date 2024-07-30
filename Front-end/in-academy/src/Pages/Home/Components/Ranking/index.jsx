import React, { useContext, useState } from 'react'
import './style.css'
import Cup from '../../../../Images/trofeu.png'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'
import { Link } from 'react-router-dom'
import { DataContext } from '../../../../Context/dataProvider'
import { Context } from '../../../../Context/authProvider'
import { generateRandomColor } from '../../../../static/variables'

export function Ranking(){
    const [ open, setOpen ] = useState('-400px')
    const { topUsersRanking } = useContext(DataContext)
    const { userData } = useContext(Context)
    const openRanking = () => {
        open === '20px' ? setOpen('-400px') : setOpen('20px')
    }

    const RenderUsers = (user, index) => {
        let variation = 'gold'

        if(index === 1) variation = 'silver'
        if(index === 2) variation = 'bronze' 

        return(
            <Link to={'/ranking/' + user.userId}>
                <div className='itemRank' key={ index }>
                    <div className='infoAndUserImage'>
                        <div className='imageUserDivInRanking' style={{backgroundImage: `url(${ user.urlImageUser })`, backgroundColor: generateRandomColor() }}>
                            { !user.urlImageUser && user.name.split('')[0] }
                            { user.isOnline && <span/> }
                        </div>
                        <div className='userRankingInfoDiv'>
                            <h1>{ user.name }</h1>
                            <p>
                                { index < 3 ? 
                                    <><strong className={variation}>{ user.userPoints }</strong> pontos</>
                                    :
                                    user.userPoints + ' pontos'
                                } 
                            </p>
                        </div>
                    </div>
                    { index < 3 && <EmojiEventsRoundedIcon fontSize='large' className={variation}/>}
                </div>
            </Link> 
        )
    }

    return(
        <>
            <div className='rankingFloat' onClick={openRanking}>
                <img src={ Cup } alt='' />
            </div>
            <div className='rankingDiv' style={{ right: open }}>
                <div className='arrowBackRankDiv'>
                    <ArrowForwardIosRoundedIcon onClick={openRanking}/>
                    <h1>Melhores</h1>
                </div>
                <section className='contentRanking'>
                    { topUsersRanking.map((item, index) => RenderUsers(item, index))}
                    <span>
                        <Link to='/ranking' style={{color: 'var(--blue)'}}>Ver mais</Link>
                    </span>
                    <div className='itemRank youRank'>
                        <div className='infoAndUserImage'>
                            { userData !== null &&
                                <>
                                    <div className='imageUserDivInRanking' style={{backgroundImage: `url(${ userData !== null && userData.urlImageUser })`}}>
                                        { !userData.urlImageUser && userData.name.split('')[0] }
                                        <span/>
                                    </div>
                                    <div>
                                        <h1>{ userData.name }</h1>
                                        <p><strong>{ userData.userPoints } </strong> pontos</p>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </section>
            </div>  
        </>
    )
}