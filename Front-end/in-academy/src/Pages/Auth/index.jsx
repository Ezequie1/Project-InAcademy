import React, { useState, useCallback } from 'react'
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

export function LoginPage(){
    const particlesInit = useCallback( async engine => await loadSlim(engine), []);
    const [ auth, setAuth ] = useState(true)

    const RenderSign = () => {
        const [ see, setSee ] = useState('password')
        const [ textButton, setTextButton ] = useState('Login')

        const changePasswordVisibility = () => {
            see === 'password' ? setSee('text') : setSee('password');
        }

        const login = () =>{
            setTextButton(<CircularProgress style={{ height: "25px", width: "25px", color: "#000" }}/>)

            setTimeout(() => setTextButton('Login'), 1000)
        }

        return(
            <div className='formContent'>
                <p>Faça login para continuar</p>
                <p className='subtitleLogin'>Ainda não possui conta? <span onClick={() => setAuth(false)}>Cadastre-se</span>!</p>
                <div>
                    <input type="text" required id='email'/>
                    <label htmlFor='email' className="inputLabel">
                        Email
                    </label>
                </div>
                <div>
                    <input type={see} required id='inputLogin'/>
                    <label htmlFor='inputLogin'>
                        Senha
                    </label>
                    { see === 'password' ? <VisibilityOffIcon onClick={changePasswordVisibility} className='icon'/> : <VisibilityIcon className='icon' onClick={changePasswordVisibility}/> }
                </div>
                <button onClick={login}>{ textButton }</button>
            </div>
        )
    }

    const RenderRegister = () =>{
        const [ see, setSee ] = useState('password')
        const [ textButton, setTextButton ] = useState('Cadastre-se')

        const changePasswordVisibility = () => {
            see === 'password' ? setSee('text') : setSee('password');
        }

        const register = () =>{
            setTextButton(<CircularProgress style={{ height: "25px", width: "25px", color: "#000" }}/>)
    
            setTimeout(() => setTextButton('Cadastre-se'), 1000)
        }

        return(
            <div className='formContent'>
                <p>Cadastre-se para criar sua conta!</p>
                <p className='subtitleLogin'>Já possui conta? <span onClick={() => setAuth(true)}>Entre</span>!</p>
                <div>
                    <input type="text" required id='nome'/>
                    <label htmlFor='nome'>
                        Nome
                    </label>
                </div>
                <div>
                    <input type="text" required id='email'/>
                    <label htmlFor='email'>
                        Email
                    </label>
                </div>
                <div>
                    <input type={see} required id='inputRegister'/>
                    <label htmlFor='inputRegister'>
                        Senha
                    </label>
                    { see === 'text' ? <VisibilityOffIcon onClick={changePasswordVisibility} className='icon'/> : <VisibilityIcon className='icon' onClick={changePasswordVisibility}/> }
                </div>
                <button onClick={register}>{ textButton }</button>
            </div>
        )
    }

    const RenderSSO = () => {
        const [ ssoText, setSsoText ] = useState(<><img src={ logoMicrosoft } alt=''/>Microsoft</>) 

        const ssoLogin = () => {
            setSsoText(<CircularProgress style={{ height: "25px", width: "25px", color: "#000" }}/>)
    
            setTimeout(() => setSsoText(<><img src={ logoMicrosoft } alt=''/>Microsoft</>), 1000)
        }

        return( 
            <button className='microsoftButton' onClick={ssoLogin}>
                { ssoText }
            </button>
        )
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
                    { auth ? <RenderSign/> : <RenderRegister/> }
                    <div className='divOu'>
                        <span/>
                        <p>Ou</p>
                        <span/>
                    </div>
                    <RenderSSO/>
                </div>
                <img src={ logo } className='inmetricsLogo' type="image/svg+xml" alt=''/>
            </div>
        </>
    )
}