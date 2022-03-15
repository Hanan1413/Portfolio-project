import React from 'react';
import {Link} from "react-router-dom";
// import  { BrowserRouter as Router} from "react-router-dom";

import "./Navbar.css";



const Navbar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar