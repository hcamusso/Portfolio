import React, { useContext } from 'react';
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
import { themeContext } from "../../Context";

export default function Intro() {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <spam  style={{ color: darkMode ? "white" : "" }} className="i-name-ch1">Hy! I'm</spam>
          <spam className="i-name-ch2"> Hernán Camusso</spam>
          <spam className="i-name-ch3">Full Stack Developer</spam>
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
        <img src={boy} alt="Hernan Camusso" className="i-hernan" />
        <img src={glassesimoji} alt="" className="i-glassemoji" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "23.2rem", left: "0rem" }} className="i-thumbup">
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}
