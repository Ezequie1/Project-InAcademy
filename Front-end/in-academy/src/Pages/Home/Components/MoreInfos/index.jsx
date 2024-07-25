import React, { useEffect, useState, useRef, useContext } from 'react'
import './style.css'
import CircularProgress from '@mui/material/CircularProgress'
import CheckIcon from '@mui/icons-material/Check'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { Context } from '../../../../Context/authProvider'
import Snackbar from '@mui/material/Snackbar'
import { setImageUser, changeOffice } from '../../../../Service'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export function ModalMoreInfos(){
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(1)
    const fileRef = useRef()
    const containerRef = useRef(null)
    const { userData, reloadUserData, setUser } = useContext(Context)
    const [image, setImage] = useState({
        img: null,
        textButton: 'Escolher foto'
    })
    const [ office, setOffice] = useState({
        value: null,
        textButton: 'Salvar'
    })
    const [openSnack, setSnack] = useState({ 
        open: false,
        message: ''
    })

    useEffect(() => {
        function verifyIsFirstAccess(){
            if(localStorage.getItem('first_access') !== null) setOpen(true)
        }

        verifyIsFirstAccess()
    }, [])

    function MoveStep(to){
        const elements = containerRef.current.querySelectorAll('.stepDiv')
        
        if(to > step && step !== to){
            if(step === 1 ){
                elements.forEach( element => {
                    element.classList.add('slideToSecondNext')
                    element.classList.remove('slideToFirstBack')
                })
                document.getElementById('firstLine').classList.add('nextStep')
                document.getElementById('firstLine').classList.remove('previousStep')
                setTimeout(() => setStep(step + 1), 500)
            }else{
                elements.forEach( element => {
                    element.classList.add('slideToThirdNext')
                    element.classList.remove('slideToSecondBack')
                })
                document.getElementById('secondLine').classList.add('nextStep') 
                document.getElementById('secondLine').classList.remove('previousStep')
                if(step === 2) setTimeout(() => setStep(step + 1), 500)
            }
        }else if(step !== to){
            if(step === 3 ){
                setStep(step - 1)
                elements.forEach( element => {
                    element.classList.remove('slideToThirdNext')
                    element.classList.add('slideToSecondBack')
                })
                document.getElementById('secondLine').classList.add('previousStep') 
                document.getElementById('secondLine').classList.remove('nextStep') 
            }else{
                elements.forEach( element => {
                    element.classList.remove('slideToSecondNext')
                    element.classList.remove('slideToSecondBack')
                    element.classList.add('slideToFirstBack')
                })
                document.getElementById('firstLine').classList.add('previousStep')
                document.getElementById('firstLine').classList.remove('nextStep') 
                if(step === 2) setStep(step - 1)
            }
        }
    }

    function changeImage(file){
        if(file){
            setImage({...image, textButton: <CircularProgress style={{ height: "25px", width: "25px", color: "#000" }}/> })
            const reader = new FileReader()

            let data = new FormData();
            data.append('file', file, file.name);

            setImageUser( localStorage.getItem('t'), data)
            .then(() => {
                reader.onloadend = () => setImage({ 
                    img: reader.result, 
                    textButton: <CheckIcon style={{ height: "30px", width: "30px", color: "#000" }}/> 
                })
                reader.readAsDataURL(file)

                reloadUserData()

                setSnack({ 
                    open: true,
                    message: <p className='stackText'><CheckIcon style={{color: 'green'}}/>Imagem alterada com sucesso!</p>
                })
                setTimeout(() => setImage( prevState => ({...prevState, textButton: 'Escolher foto'})), 1000)

            }).catch(() => {
                setTimeout(() => {
                    setSnack({
                        open: true,
                        message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Não foi possível salvar sua imagem! Selecione outra.</p>
                    })
                    setImage( prevState => ({ ...prevState,
                        textButton: 'Escolher foto' 
                    }))
                }, 1000)

            })
        }
    }

    function saveOffice(){
        setOffice({ 
            value: document.getElementById('actualOfficeInput').value, 
            textButton: <CircularProgress style={{ height: "25px", width: "25px", color: "#000" }}/> 
        })

        changeOffice(document.getElementById('actualOfficeInput').value).then( res => {
            setUser(res.data)

            setTimeout(() => {
                setOffice(prevState => ({...prevState, textButton: <CheckIcon style={{ height: "30px", width: "30px", color: "#000" }}/> }))
                setSnack({ 
                    open: true,
                    message: <p className='stackText'><CheckIcon style={{color: 'green'}}/>Cargo salvo com sucesso!</p>
                })
                setOffice( prevState => ({...prevState, textButton: 'Salvar' }))
            }, 1000)
        }).catch(() => {
            setTimeout(() => {
                setOffice(prevState => ({...prevState, textButton: 'Erro ao salvar cargo' }))
                setSnack({ 
                    open: true,
                    message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Erro ao tentar salvar seu cargo!</p>
                })
                setOffice( prevState => ({...prevState, textButton: 'Salvar' }))
            }, 1000)
        })
    }

    function finish(){
        setOpen(false)
        localStorage.removeItem('first_access')
    }

    return(
        <>
            <div className='modalMoreInfos' style={{ display: !open && 'none' }}>
                <div className='stepsDiv'>
                    <span className='step' style={{ backgroundColor: 'var(--blue)' }}></span>
                    <div>
                        <span id='firstLine'/>
                    </div>
                    <span className='step' style={{ backgroundColor: step >= 2 ? 'var(--blue)' : 'var(--borderLight)' }}></span>
                    <div>
                        <span id='secondLine'/>
                    </div>
                    <span className='step' style={{ backgroundColor: step === 3 ? 'var(--blue)' : 'var(--borderLight)' }}></span>
                </div>
                <div className='contentModalMoreInfos' ref={ containerRef } >
                    <div className='stepDiv'>
                        <h2>Antes de começar</h2>
                        <p>Selecione uma foto para personalizar o ícone do seu perfil! </p>
                        { userData &&
                            <div style={{ backgroundImage: image.img && `url(${ image.img })` }}>
                                { !image.img && userData.name.split('')[0] }
                                <span/>
                            </div>
                        }
                        <button onClick={() => fileRef.current.click()}>
                            <input id="upload" name="upload" type="file" ref={fileRef} hidden onChange={ e => changeImage(e.target.files[0])} />
                            { image.textButton }
                        </button>
                    </div>
                    <div className='stepDiv'>
                        <h2>Informe seu cargo</h2>
                        <p>Digite qual o seu cargo atual na Inmetrics</p>
                        <input type='text' id='actualOfficeInput' placeholder='Digite seu cargo atual'/>
                        <button onClick={() => saveOffice()}>
                            { office.textButton }
                        </button>
                    </div>
                    <div className='stepDiv'>
                        <CheckCircleOutlineIcon style={{ height: "25vh", width: "25vh", color: "var(--green)" }}/>
                        <h2>Let's go!!!</h2>
                        <p>Agora é só aproveitar a plataforma ao máximo pra poder aperfeiçoar seus estudos!!</p>
                    </div>
                </div>
                <div className='buttonsEnd'>
                    <button onClick={() => MoveStep( step === 1 ? 1 : step - 1 )}>
                        voltar
                    </button>
                    <div>
                        <p onClick={() => finish()}>Talvez depois</p>
                        <button onClick={() => { step === 3 ? finish() : MoveStep(step === 3 ? 3 : step + 1) }}>
                            { step === 3 ? 'Finalizar' : 'Próximo'}
                        </button>
                    </div>
                </div>
            </div>
            <div className='backModal' style={{ display: !open && 'none' }} />  
            <Snackbar
                open={ openSnack.open }
                autoHideDuration={ 3000 }
                onClose={() => setSnack({...openSnack, open: false})}
                message={ openSnack.message }
            />
        </>
    )
}