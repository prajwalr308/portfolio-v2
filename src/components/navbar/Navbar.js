import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  function openMenu() {
    setOpen(!open);
  }
  return (
    <div id="home" className="navbar">
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
      <div className="ocean">
  <div className="wave"></div>
  <div className="wave"></div>
</div>
    </div>
  );
};

export default Navbar;
