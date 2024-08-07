import { favoriteCourse, removeFavorite } from '../../Service/courseService'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import React, { useContext, useEffect, useState } from 'react'
import { ConfigContext } from '../../Context/configProvider'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import { DataContext } from '../../Context/dataProvider'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CheckIcon from '@mui/icons-material/Check'
import StarIcon from '@mui/icons-material/Star'
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'
import './style.css'

export function CardCourse(params){
    const { inProgressCourses, favoritesCourses } = useContext(DataContext)
    const { setSnack } = useContext(ConfigContext)
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        function verifyIfIsFavorite(){
            if(favoritesCourses.some( course => course.courseId === params.course.courseId)){
                setIsFavorite(true)
            }      
        }

        verifyIfIsFavorite()
        // eslint-disable-next-line
    }, [])

    function isEnrolled(){
        return inProgressCourses.some( course => course.courseId === params.course.courseId)
    }

    function changeFavoriteCourse(){
        favoriteCourse(params.course.courseId).then(() => {
            setIsFavorite(true)
            setSnack({ 
                open: true,
                message: <p className='stackText'><FavoriteIcon style={{color: 'red'}}/>Curso adicionado aos favoritos!</p>
            })
        }).catch(() => {
            setSnack({
                open: true,
                message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Erro ao adicionar curso aos favoritos!</p>
            }) 
        })
    }

    function removeFavoriteCourse(){
        removeFavorite(params.course.courseId).then(() => {
            setIsFavorite(false)
            setSnack({ 
                open: true,
                message: <p className='stackText'><CheckIcon style={{color: 'green'}}/>Curso removido dos favoritos!</p>
            })
        }).catch(() => {
            setSnack({
                open: true,
                message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Erro ao adicionar curso aos favoritos!</p>
            }) 
        })
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
                { isFavorite ? 
                    <FavoriteIcon style={{color: 'var(--red)'}} onClick={removeFavoriteCourse}/>
                    :
                    <FavoriteBorderIcon style={{color: 'var(--subtitle)'}} onClick={changeFavoriteCourse}/>
                }
                <Link to={'/meu-aprendizado/curso/' + params.course.courseId }>
                    <button>
                        { isEnrolled() ? 'Ir para o curso': 'Matricule-se'}
                    </button>
                </Link>
            </div>
        </div>
    )
}