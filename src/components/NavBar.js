import React from "react";
import "../css/Navbar.css";

const NavBar = () => {
  return (
    <div id="navbar" className="navbar top">
      <h1 className="logo">
        <i class="fa-solid fa-capsules"></i>
        <span className="text-primary">&nbsp; Nataly Patino Bleibdrey</span>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#publications">Publications</a>
          </li>
          <li>
            <a href="#background">Background</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
