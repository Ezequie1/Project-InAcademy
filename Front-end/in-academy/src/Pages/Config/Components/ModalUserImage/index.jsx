import React, { useContext, useRef } from 'react'
import './style.css'
import { Context } from '../../../../Context/authProvider'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import { setImageUser } from '../../../../Service'
import CheckIcon from '@mui/icons-material/Check'
import { CircularProgress } from '@mui/material'
import { ConfigContext } from '../../../../Context/configProvider'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export function ChangeUserImageModal({ open, setOpen }){
    const { userData, reloadUserData } = useContext(Context)
    const fileRef = useRef()
    const { setSnack } = useContext(ConfigContext)

    function changeImage(file){
        if(file){
            setOpen({...open, textImage: <CircularProgress style={{ height: "20px", width: "20px", color: "#000" }}/>})
            const reader = new FileReader()

            let data = new FormData();
            data.append('file', file, file.name);

            setImageUser(localStorage.getItem('t'), data)
            .then(() => {
                reader.readAsDataURL(file)
                reloadUserData()
                setOpen({...open, textImage: <CheckIcon style={{color: '#000'}}/>})
                setSnack({ 
                    open: true,
                    message: <p className='stackText'><CheckIcon style={{color: 'green'}}/>Imagem alterada com sucesso!</p>
                })
                setTimeout(() => setOpen({...open, textImage: 'Salvar'}), 1000)
            }).catch(() => {
                setSnack({
                    open: true,
                    message: <p className='stackText'><ErrorOutlineIcon style={{color: 'red'}}/>Não foi possível salvar sua imagem! Selecione outra.</p>
                })
                setOpen({...open, textImage: 'Salvar'})
            })
        }
    }

    return(
        <span className='maskChangeUserImage' style={{display: open.image ? 'block' : 'none'}}>
            <div className='modalChangeUserImage'>
                <div className='arrowDivModalChangeUserImage' onClick={() => setOpen({...open, image: false })}>
                    <ArrowBackIosNewRoundedIcon style={{color: 'var(--title)'}}/>
                </div>
                <h3>Alterar foto de perfil</h3>
                <p className='subtitle'>Selecione uma imagem como foto de perfil</p>
                <div className='divImageUserModalChange' style={{backgroundImage: `url(${userData.urlImageUser})`}}>
                    { !userData.urlImageUser && userData.name.split('')[0] }
                    <span/>
                </div>
                <button className='textSelectImage' onClick={() => fileRef.current.click()}>
                    <input id="upload" name="upload" type="file" ref={fileRef} hidden onChange={ e => changeImage(e.target.files[0])} />
                    Selecionar foto
                </button>
                <button className='buttonSaveImage'>
                    { open.textImage }
                </button>       
            </div>
        </span>
        
    )
}