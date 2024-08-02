import React, { useContext, useState } from 'react'
import './style.css'
import { Context } from '../../Context/authProvider'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import Tooltip from '@mui/material/Tooltip'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded'
import PublicRoundedIcon from '@mui/icons-material/PublicRounded'
import VideoCameraBackRoundedIcon from '@mui/icons-material/VideoCameraBackRounded'
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded'
import LockIcon from '@mui/icons-material/Lock'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline'
import { Radio } from '@mui/material'
import { ConfigContext } from '../../Context/configProvider'
import CircularProgress from '@mui/material/CircularProgress'
import { changeOffice } from '../../Service/userService'
import { ChangeUserImageModal } from './Components/ModalUserImage'
import CheckIcon from '@mui/icons-material/Check'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Link } from 'react-router-dom'

export function UserConfigPage(){
    const { userData, logout, setUser } = useContext(Context)
    const { theme, changeTheme, setSnack } = useContext(ConfigContext)
    const [openInfo, setOpenInfo] = useState(true)
    const [open, setOpen] = useState({
        office: false,
        image: false,
        textOffice: 'Salvar cargo',
        textImage: 'Salvar'
    })
    
    const setOffice = () =>{
        let office = document.getElementById('inputChangeOfficeConfigPage').value
        setOpen({...open, textOffice: <CircularProgress style={{ height: "20px", width: "20px", color: "#000" }}/>})

        console.log(office)
        
        if(office !== ''){     
            changeOffice(office).then( res => {
                setUser(res.data)
                
                setTimeout(() => {
                    setSnack({
                        open: true, 
                        message: <p className='stackText'><CheckIcon style={{color: 'green'}}/>Cargo alterado com sucesso!</p>
                    })
                    setOpen({...open, textOffice: 'Salvar cargo', office: false})
                }, 1000)
            }).catch(() => {
                setSnack({
                    open: true, 
                    message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Não foi possível alterar seu cargo!</p>
                })
                setTimeout(() => setOpen({...open, textOffice: 'Salvar cargo', office: false}) , 1000)
            }) 
        }else{
            setTimeout(() => {
                setSnack({
                    open: true, 
                    message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Campo cargo não pode ser branco!</p>
                })
                setOpen({...open, textOffice: 'Salvar cargo'}) 
            }, 1000)
        }
    }
    
    return(
        <section className='contentHome'>
            <div className='backgroundCardConfigUser'>
                <div className="spaceContentInfosUser">
                    <div>
                        <div style={{ backgroundImage: `url(${ userData.urlImageUser })`}}>
                            { !userData.urlImageUser && userData.name.split('')[0] }
                            <span style={{ backgroundColor: userData.isOnline ? 'green' : 'var(--borderLight)'}}></span>
                        </div>
                        <div className='divInfosUserConfigPage'>
                            <h3>{ userData.name }</h3>
                            <p>
                                <strong>Email:</strong> { userData.email } 
                                <ContentCopyRoundedIcon 
                                    fontSize='small' 
                                    style={{cursor: 'pointer'}} 
                                    onClick={() => {          
                                        navigator.clipboard.writeText(userData.email)
                                        setSnack({
                                            open: true,
                                            message: <p className='stackText'><CheckIcon style={{color: 'green'}}/>Copiado para a área de transferência!</p>
                                        })
                                    }}/> 
                            </p>
                            <p><strong>Função:</strong> { userData.office ? userData.office : 'Não informado' }</p>
                            <p><EmojiEventsRoundedIcon/> { userData.userPoints } <SchoolRoundedIcon/> 3</p>
                        </div>
                    </div>
                    <Tooltip title='Copiar ID' arrow>
                        <FingerprintIcon 
                            fontSize='large'
                            style={{color: 'var(--title)', cursor: 'pointer'}} 
                            onClick={() => { 
                                navigator.clipboard.writeText(userData.userId)
                                setSnack({
                                    open: true,
                                    message: <p className='stackText'><CheckIcon style={{color: 'green'}}/>Copiado para a área de transferência!</p>
                                })
                            }} 
                        />
                    </Tooltip>
                </div>
                <h3>Visão geral</h3>
                <div className='gridUserActionsConfig'>
                    <Link to='/meu-aprendizado'>
                        <div>
                            <SchoolRoundedIcon/>
                            <span>
                                Cursos<p>3</p>
                            </span>
                        </div>
                    </Link>
                    <Link to='/comunidades'>
                        <div>
                            <PublicRoundedIcon/>
                            <span>
                                Comunidades<p>2</p>
                            </span>
                        </div>  
                    </Link>
                    <Link to='/ranking'>
                        <div>
                            <EmojiEventsRoundedIcon/>
                            <span>
                                Ranking<p>45°</p>
                            </span>
                        </div>
                    </Link>                 
                    <div>
                        <KeyboardVoiceRoundedIcon/>
                        <span>
                            Podcasts<p>0</p>
                        </span>
                    </div>
                    <div>
                        <DescriptionRoundedIcon/>
                        <span>
                            Artigos<p>0</p>
                        </span>
                    </div>
                    <div>
                        <VideoCameraBackRoundedIcon/>
                        <span>
                            Videos<p>0</p>
                        </span>
                    </div>
                </div>
                <h3>Editar informações</h3>
                <div className='changeInfosDiv'>
                    <div>
                        <span>
                            <h4>Nome</h4>
                            <p>{userData.name}</p>
                        </span>
                        <Tooltip title='Bloqueado' arrow>
                            <LockIcon style={{color:'var(--subtitle)'}}/>
                        </Tooltip>
                    </div>
                    <div>
                        <span>
                            <h4>Email</h4>
                            <p>{userData.email}</p>
                        </span>
                        <Tooltip title='Bloqueado' arrow>
                            <LockIcon style={{color:'var(--subtitle)'}}/>
                        </Tooltip>
                    </div>
                    <div> 
                        <span>
                            <h4>Cargo</h4>
                            { open.office ? 
                                <input 
                                    type='text' 
                                    id='inputChangeOfficeConfigPage' 
                                    defaultValue={ userData.office ? userData.office : 'Não informado' }
                                    placeholder='Insira seu cargo atual na Inmetrics'/>
                                : 
                                <p>{ userData.office ? userData.office : 'Não informado' }</p>
                            }
                        </span>
                        { open.office ? 
                                <>
                                    <p  onClick={ () => setOpen({...open, office: false }) } className='cancelButtonConfigPage'>
                                        Cancelar
                                    </p>
                                    <button onClick={() => setOffice()} >
                                        { open.textOffice }
                                    </button>
                                </>
                                : 
                                <Tooltip title='Editar' arrow>
                                    <ModeEditOutlineIcon style={{color:'var(--subtitle)'}} onClick={ () => setOpen({...open, office: true}) } />
                                </Tooltip>
                            }
                        
                    </div>
                    <div>
                        <h4>Foto de perfil</h4>
                        <button onClick={() => setOpen({...open, image: true})}>
                            Alterar
                        </button>
                    </div>
                </div>
                { openInfo && 
                    <div className='obsConfigPage'>
                        <div>
                            <InfoRoundedIcon fontSize='large' style={{color: 'var(--blue)'}}/>
                            <div>
                                <h5>Edição de informações do perfil</h5>
                                <p>A alteração das informações do usuário é limitada a administradores, sendo possível a alteração de apenas alguns dados!</p>
                            </div>
                        </div>
                        <CloseRoundedIcon style={{cursor: 'pointer', color: 'var(--title)'}} onClick={() => setOpenInfo(false)}/>
                    </div>
                }
                <h3>Tema</h3>
                <div className='themeDivInConfig'>
                    <span className='itemTheme'>
                        <span className='borderThemeDiv' style={{border: theme === 'light' ? '3px solid var(--blue)' : '3px solid transparent'}}>
                            <div className='themeLightDiv'>
                                <span></span>
                                <span></span>                                
                            </div>
                        </span>
                        <h4>Claro</h4>
                        <Radio
                            checked={theme === 'light'}
                            onChange={ () => changeTheme('light')}
                            name="radio-buttons"
                            value={'light'}
                            inputProps={{ 'aria-label': 'light' }}
                            sx={{
                                color: 'var(--title)',
                                '&.Mui-checked': {
                                color: 'var(--blue)',
                                },
                            }}
                        />
                    </span>
                    <span>
                        <span className='borderThemeDiv' style={{border: theme === 'dark' ? '3px solid var(--blue)' : '3px solid transparent'}}>
                            <div className='themeDarkDiv'>
                                <span></span>
                                <span></span>
                            </div>
                        </span>
                        <h4>Escuro</h4>
                        <Radio
                            checked={theme === 'dark'}
                            onChange={() => changeTheme('dark')}
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'dark' }}
                            value={'dark'}
                            sx={{
                                color: 'var(--title)',
                                '&.Mui-checked': {
                                color: 'var(--blue)',
                                },
                            }}
                        />
                    </span>
                </div>
                <h3>Conta</h3>
                <div className='exitAccountDivConfig'>
                    <button onClick={logout}>Sair da conta</button>
                </div>
            </div>
            <ChangeUserImageModal open={open} setOpen={setOpen} />
        </section>
    )
}

