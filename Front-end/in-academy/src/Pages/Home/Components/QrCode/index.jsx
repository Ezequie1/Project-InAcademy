import React, { useState } from 'react'
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded'
import QrImage from '../../../../Images/qrcode.png'
import './style.css'

export function QrCode(){
    const [ position, setPosition ] = useState('-7.3vw')

    const seeQr = () => position === '-7.3vw' ? setPosition('1vw') : setPosition('-7.3vw')

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