import React, { useContext } from 'react'
import './style.css'
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import XIcon from '@mui/icons-material/X'
import logoDark from '../../Images/logoIn.png'
import logoWhite from '../../Images/Inmetrics-Logo.svg'
import { Link } from 'react-router-dom'
import { ConfigContext } from '../../Context/configProvider'

export function Footer(){ 
    const { theme } = useContext(ConfigContext)

    return(
        <div className="divFooter">
            <img src={ theme === 'light' ? logoDark :  logoWhite } id="imageFooter" alt="" className="logoFooter"/>
            <div>
                <h4>Política de privacidade | Canal de ética</h4>
                <p>2021. Inmetrics. Todos os direitos reservados | 04.959.158/0002-25</p>
            </div>
            <div>
                <p>Siga a Inmetrics nas redes sociais</p>
                <section>
                    <Link to='https://www.facebook.com/Inmetrics/' target='_blank' style={{textDecoration: 'none'}}>
                        <FacebookIcon className='iconFooter facebook' fontSize="large" />
                    </Link>
                    <Link to='https://www.instagram.com/inmetricsoficial_br/' target='_blank' style={{textDecoration: 'none'}}>
                        <InstagramIcon className='iconFooter instagram' fontSize="large" />
                    </Link>
                    <Link to='https://www.linkedin.com/company/inmetricsstrongresults/' target='_blank' style={{textDecoration: 'none'}}>
                        <LinkedInIcon className='iconFooter linkedin' fontSize="large" />
                    </Link>
                    <Link to='https://x.com/inmetrics' target='_blank' style={{textDecoration: 'none'}}>
                        <XIcon className='iconFooter twitter' fontSize="large" />
                    </Link>
                </section>
            </div>
        </div>
    )
}