import './style.css'
import React, { useContext } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import iconInm from '../../Images/logoSite.png'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { useEffect, useState } from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../Context/authProvider'
import { ConfigContext } from '../../Context/configProvider'
import CheckIcon from '@mui/icons-material/Check'

export function Header(){
    const { userData, logout } = useContext(Context)
    const { theme, changeTheme, setSnack } = useContext(ConfigContext)
    const [ open, setOpen ] = useState({ side: '-500px', mask: '0', index: '-3'})
    const [ selected, setSelected ] = useState('home')
    const location = useLocation()

    useEffect(() => {
        let path = location.pathname.split('/')[1]

        if (path !== selected){
            setSelected(path)
            changeSelection(path)
        }
        // eslint-disable-next-line
    }, [location.pathname])

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
            <nav className='header'>
                <div className='divLeft'>
                    <MenuRoundedIcon fontSize='large' className='icon' onClick={moveSideNav}/>
                    <img src={ iconInm } alt=''/>
                </div>
                <div className='divRight'>
                    <div className='divInputSearch'>
                        <SearchRoundedIcon fontSize='large' className='icon'/>
                        <input type="text" placeholder='Pesquisar cursos...'/>
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
                                <div style={{backgroundImage: `url(${ userData.urlImageUser })`}} className='imageUserDiv'></div>
                                :
                                <div className='imageUserDiv'>{ userData.name.split('')[0] }</div>  
                            }
                        </>
                        :
                        <></>       
                    }
                </div>
            </nav>
            <div className='mask' style={{ opacity: open.mask, zIndex: open.index }} onClick={moveSideNav}></div>
            <div className='sideNav' style={{ left: open.side }}>
                <section className='upSideNav'>
                    <div className='logoAndBackIconDiv'>
                        <div>
                            <img src={ iconInm } alt='' />
                            <h1>Academy</h1>
                        </div>
                        <ArrowBackIosNewRoundedIcon onClick={moveSideNav} className='icon'/>
                    </div>
                    <section className='contentItensNav'>
                        <Link to='/home' onClick={moveSideNav}>
                            <div className='item sectedSideNav' id='home'>
                                <HomeOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                                Home
                            </div>
                        </Link>
                        <Link to='/meu-aprendizado' onClick={moveSideNav}>
                            <div className='item' id='meu-aprendizado'>
                                <SchoolOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                                Meu aprendizado
                            </div>
                        </Link>
                        <Link to='/comunidades' onClick={moveSideNav}>
                            <div className='item' id='comunidades'>
                                <PublicOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                                Comunidades
                                <span>1</span>
                            </div>
                        </Link>
                        <Link to='/todos-os-cursos' onClick={moveSideNav}>
                            <div className='item' id='todos-os-cursos'>
                                <AutoStoriesOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                                Todos os cursos
                                <span>3</span>
                            </div>
                        </Link>
                        <Link to='/membros' onClick={moveSideNav}>
                            <div className='item' id='membros'>
                                <Groups2OutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                                Membros
                            </div>
                        </Link>
                        <Link to='/ranking' onClick={moveSideNav}>
                            <div className='item' id='ranking'>
                                <EmojiEventsOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                                Ranking
                            </div>
                        </Link>
                        <Link to='/notificacoes' onClick={moveSideNav}>
                            <div className='item' id='notificacoes'>
                                <NotificationsNoneOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                                Notificações
                                <span>23</span>
                            </div>
                        </Link>
                        <hr/>
                        <Link to='/configuracoes' onClick={moveSideNav}>
                            <div className='item' id='configuracoes'>
                                <SettingsOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                                Configurações
                            </div>
                        </Link>
                        <Link to='/suporte' onClick={moveSideNav}>
                            <div className='item' id='suporte'>
                                <HelpOutlineOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                                Suporte
                            </div>
                        </Link>
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
                                <h1>{ userData.name }<span></span></h1>
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
            </div>
        </>
    )
}