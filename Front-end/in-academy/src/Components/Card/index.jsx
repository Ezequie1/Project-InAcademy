import React from 'react'
import './style.css'
import Rating from "@mui/material/Rating"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import StarIcon from '@mui/icons-material/Star'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

export function CardCourse(params){

    function isNew(){
        const oneWeekBefore = new Date()
        oneWeekBefore.setDate(oneWeekBefore.getDate() - 7)
        const dateFormated = oneWeekBefore.toISOString().slice(0, 19).replace(" ").split('T')[0]

        //return dateFormated < params.course.creationDate
        return true
    }

    function isFavorite(){
        return true
    }

    return(
        <div className='cardCourse'>
            <img src={ params.course.img } alt=''/>
            { isNew() && <span className='newCourse'>Novo</span>}
            <h3>{ params.course.title }</h3>
            <p>{ params.course.author }</p>
            <div className='totalUsersAndTotalHoursDiv'>
                <p><PeopleAltIcon/> { params.course.totalUsers } </p>
                <p><AccessTimeIcon/> { params.course.totalHours }h</p>
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
                <p>{ params.course.totalUsers }</p>
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