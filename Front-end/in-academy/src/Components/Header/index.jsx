import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import React, { useContext, useEffect, useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { ConfigContext } from '../../Context/configProvider'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { searchCourse } from '../../Service/courseService'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import { Context } from '../../Context/authProvider'
import CheckIcon from '@mui/icons-material/Check'
import iconInm from '../../Images/logoSite.png'
import { useLocation } from 'react-router-dom'
import { ItemSideNav } from '../ItemSideNav'
import './style.css'

export function Header(){
    const { userData, logout } = useContext(Context)
    const { theme, changeTheme, setSnack } = useContext(ConfigContext)
    const [ open, setOpen ] = useState({ side: '-500px', mask: '0', index: '-3'})
    const [ selected, setSelected ] = useState('home')
    const location = useLocation()
    const [ search, setSearch ] = useState({
        open: false,
        sugestion: 'O que vamos procurar?'
    })

    useEffect(() => {
        let path = location.pathname.split('/')[1]

        if (path !== selected){
            setSelected(path)
            changeSelection(path)
        }
        // eslint-disable-next-line
    }, [location.pathname])

    const activeBorderSearch = () => {
        document.querySelector('.responseSearchDiv').classList.toggle('active')
    }

    const takeSugestion = (query) => {
        searchCourse(query).then( res => {

            if(res.data.length !== 0){
                setSearch({...search,
                    sugestion: (
                        res.data.map( (course, index) => {
                            return(
                                <div className='sugestionCard' key={index}>
                                    <img src={ course.urlImageCourse } alt=''/>
                                    <div>
                                        <h4>{ course.title }</h4>
                                        <p>{ course.authorName }</p>
                                        <span className='spanInDivSugestions'>
                                            <p style={{marginRight: '9px'}}><AccessTimeIcon fontSize='small'/>{ course.contents.length * 20 }h</p>
                                            <p><PeopleAltIcon fontSize='small'/>{ course.contents.length }</p>
                                        </span>
                                    </div>
                                </div> 
                            )
                        })
                    )
                })
            }
        })
    }

    const moveSideNav = () => {
        if(open.side === '0'){
            setOpen({ side: '-500px', mask: '0', index:'-3'})
        }else{
            setOpen({ side: '0', mask: '0.3', index:'10'})
        }
    }

    const changeSelection = (id) => {
        let element = document.getElementById(id)
        if(id !== selected && element !== null){
            document.getElementById(selected).classList.remove('sectedSideNav')
            element.classList.add('sectedSideNav')
    
            setSelected(id)
        }
    }

    return(
        <>
            <header className='header'>
                <div className='divLeft'>
                    <MenuRoundedIcon fontSize='large' className='icon' onClick={moveSideNav}/>
                    <img src={ iconInm } alt=''/>
                </div>
                <div className='divRight'>
                    <div className='divInputSearch'>
                        <SearchRoundedIcon fontSize='large' className='icon'/>
                        <input 
                            type="text" 
                            id='inputSearchCourses' 
                            placeholder='Pesquisar cursos...' 
                            onFocus={() =>{
                                setSearch({...search, open: true})
                                activeBorderSearch()
                            }} 
                            onBlur={() => {
                                setSearch({...search, open: false })
                                activeBorderSearch()
                            }}
                            onChange={ e => takeSugestion(e.target.value)}
                        />
                        <div className='responseSearchDiv' style={{ display: search.open ? 'flex' : 'none' }}>
                            { search.sugestion }
                        </div>
                    </div>
                    <div className='notifyDiv'>
                        <NotificationsNoneRoundedIcon fontSize='large' className='icon'/>
                        <span>
                            1
                        </span>
                    </div>
                    <FavoriteRoundedIcon fontSize='large' className='icon'/>
                    { userData ? 
                        <>
                            {userData.urlImageUser !== null ? 
                                <div style={{backgroundImage: `url(${ userData.urlImageUser })`}} className='imageUserDiv'>
                                    <span style={{ backgroundColor: userData.isOnline ? 'green' : 'var(--borderLight)'}}/>
                                </div>
                                :
                                <div className='imageUserDiv'>
                                    { userData.name.split('')[0] }
                                    <span style={{ backgroundColor: userData.isOnline ? 'green' : 'var(--borderLight)'}}/>
                                </div>  
                            }
                        </>
                        :
                        <></>       
                    }
                </div>
            </header>
            <div className='mask' style={{ opacity: open.mask, zIndex: open.index }} onClick={moveSideNav}></div>
            <nav className='sideNav' style={{ left: open.side }}>
                <section className='upSideNav'>
                    <div className='logoAndBackIconDiv'>
                        <div>
                            <img src={ iconInm } alt='' />
                            <h1>Academy</h1>
                        </div>
                        <ArrowBackIosNewRoundedIcon onClick={moveSideNav} className='icon'/>
                    </div>
                    <section className='contentItensNav'>
                        <ItemSideNav title={'Home'} icon={<HomeOutlinedIcon/>} isHome={true} link={'/home'} changeNav={moveSideNav}/>
                        <ItemSideNav title={'Meu aprendizado'} icon={<SchoolOutlinedIcon/>} link={'/meu-aprendizado'} changeNav={moveSideNav}/>
                        <ItemSideNav title={'Comunidades'} icon={<PublicOutlinedIcon/>} link={'/comunidades'} changeNav={moveSideNav}/>
                        <ItemSideNav title={'Todos os cursos'} icon={<AutoStoriesOutlinedIcon/>} link={'/todos-os-cursos'} changeNav={moveSideNav}/>
                        <ItemSideNav title={'Membros'} icon={<Groups2OutlinedIcon/>} link={'/membros'} changeNav={moveSideNav}/>
                        <ItemSideNav title={'Ranking'} icon={<EmojiEventsOutlinedIcon/>} link={'/ranking'} changeNav={moveSideNav}/>
                        <ItemSideNav title={'Notificações'} icon={<NotificationsNoneOutlinedIcon/>} link={'/notificacoes'} changeNav={moveSideNav}/>
                        <hr/>
                        <ItemSideNav title={'Configurações'} icon={<SettingsOutlinedIcon/>} link={'/configuracoes'} changeNav={moveSideNav}/>
                        <ItemSideNav title={'Suporte'} icon={<HelpOutlineOutlinedIcon/>} link={'/suporte'} changeNav={moveSideNav}/>
                    </section>
                </section>
                <section className='downSideNav'>
                    <div className='divTheme'>
                        <span style={{left: theme === 'light' ? '1%' : '51%'}}></span>
                        <p onClick={() => changeTheme('light')}>
                            <LightModeOutlinedIcon style={{color: theme === 'light' ? '#ffca00' : '#ccc'}}/>Claro
                        </p>
                        <p onClick={() => changeTheme('dark')}>
                            <NightsStayOutlinedIcon style={{color: theme === 'dark' ? '#009ce0' : '#ccc'}}/> Escuro
                        </p>
                    </div>
                    <div className='userInfosSideNav'>
                        { userData !== null ?
                            <>
                                {userData.urlImageUser !== null ? 
                                    <div style={{ backgroundImage: `url(${ userData.urlImageUser })` }} className='imageUserDiv'></div>
                                    :
                                    <div> { userData.name.split('')[0] } </div>
                                }
                                <h1>{ userData.name }<span style={{ backgroundColor: userData.isOnline ? 'green' : 'var(--borderLight)'}}></span></h1>
                                <p id="emailInfoId">
                                    { userData.email } 
                                    <ContentCopyRoundedIcon 
                                        fontSize='0.2rem' 
                                        style={{cursor: 'pointer'}} 
                                        onClick={ ()  => {
                                            navigator.clipboard.writeText(document.getElementById("emailInfoId").innerText)
                                            setSnack({
                                                open: true,
                                                message: <p className='stackText'><CheckIcon style={{color: 'green'}}/>Copiado para a área de transferência!</p>
                                            })
                                        }}
                                    />
                                </p>
                            </>
                            : 
                            <></>
                        }
                        <button onClick={logout}>
                            Sair <LogoutOutlinedIcon/>
                        </button>
                    </div>
                </section>
            </nav>
        </>
    )
}