import React from 'react';
import Image from 'react-bootstrap/Image'
import logo from './assets/logo2.png'
import header from './assets/header.png'
import './Css/header.css'
 
export default function Header (props) {
    return (
        <div className="container">  
            <Image className="header" src={header}></Image>
            <Image className="logo" src={logo}></Image>
            <div className='text'>How in tune are you with the most played tracks right now?</div>
        </div>
    )
}
 