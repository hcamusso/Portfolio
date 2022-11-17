import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png'

import { UilInstagram } from '@iconscout/react-unicons'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="wave" style={{with: '100%'}} />
        <div className="f-content">
            <span>hcamusso@gmail.com</span>
            <div className="f-icons">
                <UilInstagram color= 'white' size='3rem'/>
                <UilFacebook color='white' size='3rem'/>
                <UilGithub color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer