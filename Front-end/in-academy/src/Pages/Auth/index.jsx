import React, { useState, useCallback, useContext } from 'react'
import logo from '../../Images/Inmetrics-Logo.svg'
import smallLogo from '../../Images/logoSite.png'
import logoMicrosoft from '../../Images/microsoftLogo.png'
import CircularProgress from '@mui/material/CircularProgress'
import './style.css'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { particles } from '../../static/variables'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { register, sign } from '../../Service'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/authProvider'
import { ConfigContext } from '../../Context/configProvider'

export function LoginPage(){
    const particlesInit = useCallback( async engine => await loadSlim(engine), [])
    const [ auth, setAuth ] = useState(true)
    const [ see, setSee ] = useState('password')
    const navigate = useNavigate()
    const { login } = useContext(Context)
    const { setSnack } = useContext(ConfigContext)
    const [ buttonText, setButtonText ] = useState({
        auth: 'Entrar',
        sso: (<> <img src={ logoMicrosoft } alt=''/>Microsoft </>)
    })

    const changePasswordVisibility = () => {
        see === 'password' ? setSee('text') : setSee('password')
    }

    const changeForm = () => {
        let value = auth ? 'Cadastre-se': 'Entrar'

        setButtonText({...buttonText, auth: value })
        setAuth(!auth)
    } 

    const loginSSO = () => {
        setButtonText({...buttonText, sso: <CircularProgress style={{ height: "25px", width: "25px", color: "#000" }}/> })

        setTimeout(() => {
            setSnack({
                open: true,
                message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Indisponível no momento, tente novamente mais tarde!</p>
            })

            setButtonText({...buttonText, sso: <><img src={ logoMicrosoft } alt=''/>Microsoft </> })
        }, 1000)
    }

    function sendForm(){
        setButtonText({...buttonText, auth: <CircularProgress style={{ height: "25px", width: "25px", color: "#000" }}/>})

        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        if(auth && email !== '' && password !== ''){
            sign({
                email: email,
                password: password
            }).then( res => {
                localStorage.setItem('t', res.data.token)
                login()

                setTimeout(() => {
                    navigate('/home')
                    setButtonText({...buttonText, auth: auth ? 'Entrar' : 'Cadastre-se' })
                }, 1000)
            }).catch( err => {
                if(err.response.status === 403){

                    setTimeout(() => {
                        setSnack({
                            open: true,
                            message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Email ou senha inválidos!</p>
                        })    
                        setButtonText({...buttonText, auth: auth ? 'Entrar' : 'Cadastre-se' })
                    }, 1000)
                }else{

                    setTimeout(() => {
                        setSnack({
                            open: true,
                            message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Erro ao tentar fazer login!</p>
                        })    
                        setButtonText({...buttonText, auth: auth ? 'Entrar' : 'Cadastre-se' })
                    }, 1000)
                }
            })
        }else if(!auth && document.getElementById('nome').value !== '' &&  email !== '' && password !== ''){
            register({
                name: document.getElementById('nome').value,
                email: email,
                password: password
            }).then( res =>{
                localStorage.setItem('t', res.data.token)
                localStorage.setItem('first_access', true)
                login()

                setTimeout(() => {
                    navigate('/home')
                    setButtonText({...buttonText, auth: auth ? 'Entrar' : 'Cadastre-se' })
                }, 1000)
            }).catch( err => {
                if(err.response.status === 400){

                    setTimeout(() => {
                        setSnack({
                            open: true,
                            message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Já existe usuário com este email! Tente um email diferente</p>
                        })    
                        setButtonText({...buttonText, auth: auth ? 'Entrar' : 'Cadastre-se' })
                    }, 1000)
                }else{
                    setTimeout(() => {
                        setSnack({
                            open: true,
                            message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Não foi possível criar o usuário!</p>
                        })    
                        setButtonText({...buttonText, auth: auth ? 'Entrar' : 'Cadastre-se' })
                    }, 1000)
                }
            })
        }else{
            setButtonText({...buttonText, auth: auth ? 'Entrar' : 'Cadastre-se'})
            setSnack({
                open: true,
                message:  <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Preencha todos os campos!</p>
            })
        }
    }

    return(
        <>
            <Particles
                id="tsparticles" 
                init={ particlesInit } 
                options={ particles.config } 
            />
            <div className='contentPage'>
                <div className='form'>
                    <img src={ smallLogo } className='iconInm' alt=''/>
                    <div className='formContent'>
                        <p>{ auth ? 'Faça login para continuar' : 'Cadastre-se para criar sua conta!' }</p>
                        <p className='subtitleLogin'> { auth ? 'Ainda não possui conta?' : 'Já possui conta?' } <span onClick={() => changeForm()}>{ auth ? 'Cadastre-se' : 'Entrar' }</span>!</p>
                        { !auth &&
                            <div>
                                <input type="text" required id='nome'/>
                                <label htmlFor='nome'>
                                    Nome
                                </label>
                            </div>
                        }
                        <div>
                            <input type="email" required id='email'/>
                            <label htmlFor='email'>
                                Email
                            </label>
                        </div>
                        <div>
                            <input type={see} required id='password'/>
                            <label htmlFor='inputRegister'>
                                Senha
                            </label>
                            { see === 'text' ? <VisibilityOffIcon onClick={changePasswordVisibility} className='icon'/> : <VisibilityIcon className='icon' onClick={changePasswordVisibility}/> }
                        </div>
                        <button onClick={sendForm}>{ buttonText.auth }</button>
                    </div>
                    <div className='divOu'>
                        <span/>
                        <p>Ou</p>
                        <span/>
                    </div>
                    <button className='microsoftButton' onClick={loginSSO}>
                        { buttonText.sso }
                    </button>
                </div>
                <img src={ logo } className='inmetricsLogo' type="image/svg+xml" alt=''/>
            </div>
        </>
    )
}