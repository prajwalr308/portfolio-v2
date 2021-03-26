import React,{useState} from "react";
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(true)
    function openMenu(){
        setOpen(!open)
    
        
    }
  return (
    <div className="navbar">
      <div className="navbar__menu">
        <div className={open?"container":"change"} onClick={openMenu}>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div>
</div>
      <ul className={`${open ?"navbar__lists__desktop" : "navbar__lists__mobileView"}`}>
        <li>home</li>
        <li>about me</li>
        <li>projects</li>
        <li>resume</li>
      </ul>
    </div>
  );
};

export default Navbar;
