import './style.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import iconInm from '../../Images/logoSite.png'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { useState } from 'react'
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

export function Header(){

    const [ open, setOpen ] = useState({ side: '-25vw', mask: '0', index: '-3'})
    const [ isLight, setTheme ] = useState('1%')
    const [ selected, setSelected ] = useState('home')

    const moveSideNav = () => {
        if(open.side === '0'){
            setOpen({ side: '-25vw', mask: '0', index:'-3'})
        }else{
            setOpen({ side: '0', mask: '0.3', index:'10'})
        }
    }

    const changeTheme = (position) => {
        if(position !== isLight){
            let element = document.querySelector('body')
            
            position === '51%' ? element.setAttribute('data-theme', 'dark') : element.setAttribute('data-theme', 'light')
            setTheme(position)
        }
    }

    const changeSelection = (id) => {
        if(id !== selected){
            document.getElementById(selected).classList.remove('sectedSideNav')
            document.getElementById(id).classList.add('sectedSideNav')
    
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
                    <div className='imageUserDiv'>
                        E
                    </div>
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
                        <div className='item sectedSideNav' id='home' onClick={e => changeSelection(e.currentTarget.id)}>
                            <HomeOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                            Home
                        </div>
                        <div className='item' id='meuAprendizado' onClick={e => changeSelection(e.currentTarget.id)}>
                            <SchoolOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                            Meu aprendizado
                        </div>
                        <div className='item' id='comunidade' onClick={e => changeSelection(e.currentTarget.id)}>
                            <PublicOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                            Comunidades
                            <span>1</span>
                        </div>
                        <div className='item' id='todosOsCursos' onClick={e => changeSelection(e.currentTarget.id)}>
                            <AutoStoriesOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                            Todos os cursos
                            <span>3</span>
                        </div>
                        <div className='item' id='membros' onClick={e => changeSelection(e.currentTarget.id)}>
                            <Groups2OutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                            Membros
                        </div>
                        <div className='item' id='ranking' onClick={e => changeSelection(e.currentTarget.id)}>
                            <EmojiEventsOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                            Ranking
                        </div>
                        <div className='item' id='notificacoes' onClick={e => changeSelection(e.currentTarget.id)}>
                            <NotificationsNoneOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                            Notificações
                            <span>23</span>
                        </div>
                        <hr/>
                        <div className='item' id='configuracoes' onClick={e => changeSelection(e.currentTarget.id)}>
                            <SettingsOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                            Configurações
                        </div>
                        <div className='item' id='suporte' onClick={e => changeSelection(e.currentTarget.id)}>
                            <HelpOutlineOutlinedIcon className='iconSideNav' style={{fontSize:'2rem'}}/> 
                            Suporte
                        </div>
                    </section>
                </section>
                <section className='downSideNav'>
                    <div className='divTheme'>
                        <span style={{left: isLight}}></span>
                        <p onClick={() => changeTheme('1%')}>
                            <LightModeOutlinedIcon style={{color: isLight === '1%' ? '#ffca00' : '#ccc'}}/>Claro
                        </p>
                        <p onClick={() => changeTheme('51%')}>
                            <NightsStayOutlinedIcon style={{color: isLight === '51%' ? '#009ce0' : '#ccc'}}/> Escuro
                        </p>
                    </div>
                    <div className='userInfosSideNav'>
                        <div>
                            E
                        </div>
                        <h1>Ezequiel Alves <span></span></h1>
                        <p>ezequiel.moura@inmetrics.com.br <ContentCopyRoundedIcon fontSize='0.2rem' style={{cursor: 'pointer'}} onClick={ () => navigator.clipboard.writeText('ezequiel.moura@inmetrics.com.br')}/></p>

                        <button>
                            Sair <LogoutOutlinedIcon/>
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}