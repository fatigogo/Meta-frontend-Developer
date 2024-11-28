import React from "react";
import "./Footer.css"; // Import component-specific CSS
function Footer() {
    return (
      <footer style={{ padding: "20px", textAlign: "center" }}>
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        
        <div className="footer">
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li><a href="#terms" style={{ textDecoration: "none", margin: "0 10px" }}>Terms of Service</a></li>
            <li><a href="#privacy" style={{ textDecoration: "none", margin: "0 10px" }}>Privacy Policy</a></li>
          </ul>
        </div>
        
        <div>
          <p>Follow us on:</p>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  