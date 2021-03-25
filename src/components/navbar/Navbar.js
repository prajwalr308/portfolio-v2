import React,{useState} from "react";
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    function openMenu(){
        setOpen(!open)
    
        
    }
  return (
    <div className="navbar">
        <button className="navbar__menu" onClick={openMenu}>menu</button>
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
