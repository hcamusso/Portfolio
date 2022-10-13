import React from 'react';
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './Curriculum Hernan 202209.pdf';



const Services = () => {


  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesone">
        <span className="awesome1">My Awesome</span>
        <br />
        <span className="awesome2">services</span>
        <br />
        <spane className="awesome3">
          Lorem ipsum is simpley dummy text of printing of printing Lorem
          <br />
          ipsum is simpley dummy text of printing
        </spane>
        <br />
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        {/* first card */}
 <div style={{top: "-1rem", left: "16rem"}}>

          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
 </div>
 
        {/* second card */}
<div style={{top: "12rem", left: "-4rem"}}>

          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
</div>

        {/* 3rd */}
    <div style={{top: "19rem", left: "12rem"}}>

          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
    </div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services