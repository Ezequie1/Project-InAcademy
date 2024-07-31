import React from 'react'
import './style.css'
import Rating from "@mui/material/Rating"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import StarIcon from '@mui/icons-material/Star'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

export function CardCourse(params){

    function isFavorite(){
        return true
    }

    return(
        <div className='cardCourse'>
            <div className='divUpInfosCardCourse'>
                <img src={ params.course.urlImageCourse } alt=''/>
                { params.isRecently && <span className='newCourse'>Novo</span>}
                <h3>{ params.course.title }</h3>
                <p className='subtitleStyleCardCourse'>{ params.course.authorName }</p>
                <div className='totalUsersAndTotalHoursDiv'>
                    <p><PeopleAltIcon/> { params.course.totalUsersEnrollmenteds } </p>
                    <p><AccessTimeIcon/> { params.course.contents * 20 }h</p>
                </div>
                <Rating
                    name="half-rating"
                    defaultValue={ params.course.rating }
                    readOnly
                    emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                    precision={0.1}
                />
                <div className='ratingInfosDiv'>
                    <h4>{ params.course.rating }</h4>
                    <p>{ params.course.totalUsersEnrollmenteds }</p>
                </div>
            </div>
            <div className='divWithButtonCard'>
                { isFavorite() ? 
                    <FavoriteIcon style={{color: 'var(--red)'}}/>
                    :
                    <FavoriteBorderIcon style={{color: 'var(--subtitle)'}}/>
                }
                <button>Matricule-se</button>
            </div>
        </div>
    )
}