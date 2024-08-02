import { BigCardCourse } from './Components/BigCardCourse'
import { CarrouselSlider } from './Components/Carrousel'
import { DataContext } from '../../Context/dataProvider'
import { ModalMoreInfos } from './Components/MoreInfos'
import { SectionCard } from '../../Components/Section'
import { Context } from '../../Context/authProvider'
import React, { useContext, useEffect } from 'react'
import { CardInfo } from './Components/CardInfos'
import { Ranking } from './Components/Ranking'
import { QrCode } from './Components/QrCode'
import { Link } from 'react-router-dom'
import './style.css'

export function HomePage(){
    const { userData } = useContext(Context)
    const { inProgressCourses, recentlyAddedCourses, coursesByCategory, allCourses, loadAllData } = useContext(DataContext)

    // eslint-disable-next-line
    useEffect(() => loadAllData(), [])

    return(
        <>
            <Ranking/>
            <QrCode/>            
            <section className='container'>
                <CarrouselSlider/>
                { inProgressCourses.length > 0 &&
                    <SectionCard 
                        data={inProgressCourses} 
                        titleSection={`Bem vindo ${userData && userData.name.split(" ")[0]}`} 
                        nameLink={'Cursos em progresso'} 
                        linkSection={'/meu-aprendizado'}
                        isProgressCard={true}
                    />
                }
                <SectionCard 
                    data={recentlyAddedCourses} 
                    titleSection={inProgressCourses.length > 0 ? 'Recentemente adicionados' : `Bem vindo ${userData && userData.name.split(" ")[0]}!`} 
                    nameLink={'Recentemente adicionados'} 
                    linkSection={'/todos-os-cursos/recentes'}
                />
                <SectionCard 
                    data={coursesByCategory} 
                    titleSection={'Busque por categoria'} 
                    nameLink={'Categorias'} 
                    linkSection={'/todos-os-cursos/category'}
                />
                <CardInfo/>
                <div className='titleSection'>
                    <h1>Aqui vai uma sugestão para você!</h1>
                    <Link to='/todos-os-cursos'>
                        <p>Ver mais</p>
                    </Link>
                </div> 
                <BigCardCourse/>
                <SectionCard 
                    data={allCourses} 
                    titleSection={'Todos os cursos'} 
                    nameLink={'Ver mais'} 
                    linkSection={'/todos-os-cursos'}
                />
            </section>
            <ModalMoreInfos/>
        </>
    )
}