import React, { useState } from 'react'
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded'
import QrImage from '../../../../Images/qrcode.png'
import './style.css'

export function QrCode(){
    const [ position, setPosition ] = useState('-147px')

    const seeQr = () => position === '-147px' ? setPosition('15px') : setPosition('-147px')

    return(
        <div className='divQr' onClick={seeQr} style={{left: position}}>
            <div>
                <h5>Baixe o app!</h5>
                <img src={ QrImage } alt=""/>
                <p>Aponte a câmera do seu celular para o QR Code!</p>
            </div>
            <QrCodeScannerRoundedIcon fontSize='large'/>            
        </div>
    )
}