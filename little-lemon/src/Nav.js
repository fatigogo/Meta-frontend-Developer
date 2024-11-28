import React from "react";
import "./Nav.css"; // Import component-specific CSS
function Nav() {
    return (
      <nav className="navbar">
        <ul className="nav-list" style={{ display: "flex", listStyleType: "none", gap: "15px", padding: 0 }}>
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#menu">Menu</a></li>
          <li><a href="#specials">Specials</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#booking">Book a Table</a></li>
          <li className="nav-item"><a href="#about">About Us</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  