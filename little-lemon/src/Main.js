import React from "react";
import "./Main.css"; // Import component-specific CSS
import { Routes, Route } from "react-router-dom";
import Homepage from "./Header.js"; // Create and import the Homepage component
import Specials from "./specials.js";
import About from "./About.js";
import Bookings from "./BookingForm.js";
import Contact from "./Contact.js";
function Main() {
    return (
      <main className="main-content">
        <section>
          <h2>Our Story</h2>
          <p>Little Lemon is all about fresh and tasty dishes.</p>
        </section>
        <section>
          <h2>Menu</h2>
          <p>Explore our diverse offerings!</p>
        </section>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/about" element={<About />} />
        <Route path="/Bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
    );
  }
  
  export default Main;
  