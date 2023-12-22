import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Image from "../../Images/image1.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <Fragment>
      <div className="navbarWrapper">
        <img className="logo" src={Image}></img>

        <nav className="nav">
          <ul>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Training</Link></li>
            <li><Link to="/">Consultant</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link  className="active" to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      
    </Fragment>
  );
};

export default Navbar;
