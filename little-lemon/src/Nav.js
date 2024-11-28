import React from "react";
import "./Nav.css"; // Import component-specific CSS
import { Link } from "react-router-dom";
function Nav() {
    return (
      <nav className="navbar">
        <ul className="nav-list" style={{ display: "flex", listStyleType: "none", gap: "15px", padding: 0 }}>
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/">Menu</Link></li>
          <li className="nav-item"><Link to="/">Specials</Link></li>
          <li className="nav-item"><Link to="/">testimonials</Link></li>
          <li className="nav-item"><Link to="/">Book a Table</Link></li>
          <li className="nav-item"><Link to="/">About Us</Link></li>
          <li className="nav-item"><Link to="/">Contact Us</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  