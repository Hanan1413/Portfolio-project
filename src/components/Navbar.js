import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import { Navbar, Nav,  } from "react-bootstrap";









function Navtion() {
  const [active, setActive] = useState("firstpage");
  return (
    <div>

      {/* fixed top to make navbar fixed above content */}
      <Navbar  fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        
          <Navbar.Brand href="#home">Hanan</Navbar.Brand>
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
      </Navbar>
      <div>
        {active === "firstpage" && <Home title="Hi I'm Hanan" />}
        {active === "secondpage" && <About />}
        {active === "thirdpage" && <Projects />}
        {active === "fourthpage" && <Contact />}
      </div>
    </div>
  );
}

export default Navtion;
