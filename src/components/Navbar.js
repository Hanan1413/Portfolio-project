import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

// import { Router, Routes, Route, Link } from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import Projects from "../Projects";
// import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Container } from "react-bootstrap";

// import Project from "./";





// import { Container } from "bootstrap";
// import {Nav} from "bootstrap"

// import{ Nav} from "react-bootstrap"
// import { Container } from "react-bootstrap";

function Navtion() {
  const [active, setActive] = useState("firstpage");
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-link">
              <Nav.Link onClick={() => setActive("firstpage")} href="#home">
                Home
              </Nav.Link>
              <Nav.Link onClick={() => setActive("secondpage")} href="#about">
                About
              </Nav.Link>
              <Nav.Link onClick={() => setActive("thirdpage")} href="#Projects">
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => setActive("fourthpage")} href="#Contact">
                Contact-me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {active === "firstpage" && <Home />}
        {active === "secondpage" && <About />}
        {active === "thirdpage" && <Projects />}
        {active === "fourthpage" && <Contact />}
      </div>
    </div>
  );
}

export default Navtion;
