import React from 'react';
import "./Intro.css";
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';



export default function Intro() {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">

                    <spam className='i-name-ch1'>Hy! I'm</spam>
                    <spam className='i-name-ch2'> Hernán Camusso</spam>
                    <spam className='i-name-ch3'>Full Stack Developer</spam>
            </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <img src={GitHub} alt="GitHub" />
            <img src={LinkedIn} alt="LinkedIn" />
            <img src={Instagram} alt="Instagram" />
        </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="Vector1" className="i-vector1" />
            <img src={Vector2} alt="Vector2" className="i-vector2" />
            <img src={boy} alt='Hernan Camusso' className='i-hernan'/>
            <div>
                <FloatingDiv />
            </div>

        </div>
    </div>
  )
}
