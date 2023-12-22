import { NavLink } from "react-router-dom";
import React from "react";
import "./Web.css";
import Image from "../Images/image1.png";

function Web() {
  return (
    <div>
      Web
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/training">Training</NavLink>
      <img src={Image}></img>
    </div>
  );
}

export default Web;
