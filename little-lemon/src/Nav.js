import React from "react";
import "./Nav.css"; // Import component-specific CSS
import { Link } from "react-router-dom";
function Nav() {
    return (
      <nav className="navbar">
        <ul className="nav-list" style={{ display: "flex", listStyleType: "none", gap: "15px", padding: 0 }}>
          <li className="nav-item"><Link to="./Header.js">Header</Link></li>
          <li className="nav-item"><Link to="/">Menu</Link></li>
          <li className="nav-item"><Link to="./specials.js">Specials</Link></li>
          <li className="nav-item"><Link to="/">testimonials</Link></li>
          <li className="nav-item"><Link to="./BookingForm.js">Book a Table</Link></li>
          <li className="nav-item"><Link to="./About.js">About Us</Link></li>
          <li className="nav-item"><Link to="/">Contact Us</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  