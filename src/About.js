import "./About.css"
import React from "react";
import image from "./img/code.jpg"

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
        <p className="about-text">
          {/* https://codepen.io/bradtraversy/pen/bGbREWg  */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          aliquid a atque porro minima libero provident similique unde harum,
          repellat excepturi sunt obcaecati labore in expedita cum nulla eos
          hic.{" "}
        </p>
        <button className="btn">Donwload my CV</button>
      </div>
    </div>
  );
}

export default About;
