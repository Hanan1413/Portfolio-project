import React from "react";
import "./Projects.css";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faEye} from "@fortawesome/free-solid-svg-icons";
// import { faApper } from "@fortawesome/free-solid-svg-icons";
import {  FaEye, FaGithub, FaUtensils, FaCloudSunRain, FaFilm, FaEdit } from "react-icons/fa";






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
            <FaFilm />
          </h1>
          <h2> Movie</h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Hanan1413/Netflix-clone"
            
            className="bn-lighter"
          >
            <FaEye /> Project
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Hanan1413/Netflix-clone"
            className="bn-darker"
          >
            <FaGithub /> Githup
          </a>
        </div>



        <div className="item">
          <h1>
            <FaEdit />
          </h1>
          <h2>Blog </h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="3"
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
            <FaCloudSunRain />
          </h1>
          <h2>Weather API</h2>
          <a href="3" className="bn-lighter">
            <FaEye /> Project
          </a>
          <a href="/#" className="bn-darker">
            <FaGithub /> Githup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
