import React from "react";
import "./Projects.css";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faEye} from "@fortawesome/free-solid-svg-icons";
// import { faApper } from "@fortawesome/free-solid-svg-icons";
import {  FaEye, FaGithub, FaUtensils,  FaVideo, FaDumbbell, FaBuilding } from "react-icons/fa";







 function Projects() {
  return (
    <div className="main-project">
      <h1 className="project-title">
        My <span className="text-secondary">Work</span>
      </h1>
      <h2 className="sm-heading">some of my works websites and apps...</h2>

      <div className="projects">
        <div className="item">
          <h1>
            <FaUtensils />
            
          </h1>

          <h2>Resturant </h2>
          <a
            href="https://fontawesome.com/v5/docs/web/style/animate"
            className="bn-lighter"
          >
            <FaEye /> Project
          </a>
          <a href="/#" className="bn-darker">
            <FaGithub /> Githup
          </a>
        </div>


        <div className="item">
          <h1>
            <FaBuilding />
          </h1>
          <h2> Business </h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://statuesque-melba-65ea6f.netlify.app/"
            
            className="bn-lighter"
          >

            <FaEye /> Project
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Hanan1413/business-website"
            className="bn-darker"
          >
            <FaGithub /> Githup
          </a>
        </div>



        <div className="item">
          <h1>
            <FaVideo/>
          </h1>
          <h2>API </h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://frolicking-lolly-ec8d52.netlify.app/"
            className="bn-lighter"
          >
            <FaEye /> Project
          </a>
          <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Hanan1413/Breaking-Bad-API" className="bn-darker">
            <FaGithub /> Githup
          </a>
        </div>

        

        <div className="item">
          <h1>
            <FaDumbbell />
          </h1>
          <h2>Fitness  </h2>
          <a
           target="_blank"
            rel="noopener noreferrer"
           href="https://astonishing-mandazi-03d8c8.netlify.app/" className="bn-lighter">
            <FaEye /> Project
          </a>
          <a 
           target="_blank"
           rel="noopener noreferrer"
           href="https://github.com/Hanan1413/FitnessClub" className="bn-darker">
            <FaGithub /> Githup
          </a> 
        </div>
      </div>
    </div>
  );
};

export default Projects;
