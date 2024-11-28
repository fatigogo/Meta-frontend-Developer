import React from "react";
import "./Header.css"; // Import component-specific CSS
function Header() {
    return (
      <header className="header">
        <img src="/logo192.png" alt="Little Lemon Logo" style={{ width: "100px", height: "auto" }} />
        <h1 className="header-title">Welcome to Little Lemon</h1>
      </header>
    );
  }
  
  export default Header;
  

