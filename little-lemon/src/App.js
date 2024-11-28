import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Main from "./Main.js";
import CallToAction from "./CallToAction.js";
import Specials from "./specials.js";
import CustomersSay from "./CustomersSay.js";
import Chicago from "./Chicago.js";
import Footer from "./Footer.js";
import './App.css';  // Import your CSS file for styles

function App() {
  return (
    <div className="app-container">  {/* The Flexbox container */}
      <Header />
      <Router />
      <Nav />
      <Main />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </div>
  );
}

export default App;


