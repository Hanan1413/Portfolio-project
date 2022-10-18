import "./About.css"
import React from "react";
import image from "../img/code-min.jpg"
import cv from "../cv/Hanan'sCV20.pdf"

function About() {
  return (
    <div className="flex-container">
      <div className="about-img">
        <img src={image} alt="code" />
      </div>
      <div>
        <h1 className="about-title">
          About  <span className="text-secondary">me</span>
        </h1>
        <p lassName="about-text" style={{fontSize:"1.60rem"}}>
         I am a passionate junior front-end developer I  spant the last months learning how to code. I have  desire to learn and grow in a collaborative team environment. 
         Skilled in HTML, CSS, Javascript Bootstrap, Tailwind CSS and  Git version control systems.

        </p>
        <span> <a href={cv}  target= "_blank" rel="nooopener noreferrer"> <button className="btn" style={{fontSize:"1rem", fontWeight:"bold"}}>Donwload my CV</button> </a></span>
       
      </div>
    </div>
  );
}

export default About;
