import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { FavoriteBorderRounded } from '@mui/icons-material'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import StarIcon from '@mui/icons-material/Star'
import Rating from '@mui/material/Rating'
import React from 'react'
import './style.css'

export function BigCardCourse(){
    
    return(
        <section className='bigCardCourse'>
            <div className='firstDivBigCard'>
                <img src='https://img-c.udemycdn.com/course/480x270/4839120_f577_2.jpg' alt=''/>
                <span className='newTagInBigCard'>Novo</span>
            </div>
            <div className='secondDivBigCard'>
                <section className='expandSection'>
                    <div className='divTitleAndFavoriteBigCard'>
                        <h3>Aprenda TypeScript em 7 dias + Projetos reais!</h3> 
                        <FavoriteBorderRounded fontSize='large'/>
                    </div>
                    <p className='descriptionInBigCard'>Aprenda do Zero a linguagem de programação que mais cresce no mundo, com projetos reais e sem slides!</p>
                    <p className='descriptionInBigCard'>Alexandre de Moraes</p>
                    <div className='divWithCharacteristics'>
                        <p><PeopleAltIcon/> 335</p>
                        <p><AccessTimeIcon/> 79 horas</p>
                        <p><TypeSpecimenIcon/> TECNOLOGIA</p>
                    </div>
                    <div className='divRatingInBigCard'>
                        <Rating
                            size="large"
                            defaultValue={4.5}
                            readOnly
                            emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                            precision={0.1}
                        />
                        <h4>4.5</h4>
                        <p>(335)</p>
                    </div>
                </section>
                <div className='divButtonInBigCard'>
                    <button>
                        Matricule-se
                    </button>
                </div>
            </div>
        </section>
    )
}