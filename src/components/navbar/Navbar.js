import React, { useState } from "react";
import "./Navbar.css";
import wolf from '../../assets/wolf.png'

const Navbar = () => {
  const [open, setOpen] = useState(true);
  function openMenu() {
    setOpen(!open);
  }
  return (
    <div id="home" className="navbar">
      <img src={wolf} className="wolf" style={{width:"60px","marginLeft":"10px"}} />
      <div className="navbar__menu">
        <div className={open ? "container" : "change"} onClick={openMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <ul
        className={`${
          open ? "navbar__lists__desktop" : "navbar__lists__mobileView"
        }`}
      >
        <li><a href="#home"> Home</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">contact</a></li>
        
      </ul>
    </div>
  );
};

export default Navbar;
