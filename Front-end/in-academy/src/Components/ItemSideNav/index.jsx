import { Link } from 'react-router-dom'
import React from 'react' 
import './style.css'

export function ItemSideNav({icon, title, link, changeNav, isHome}){
    return(
        <Link to={link} onClick={changeNav}>
            <div className={isHome ? 'sectedSideNav item' : 'item'} id={link.split('/')[1]}>
                {icon} 
                {title}
            </div>
        </Link>
    )
}