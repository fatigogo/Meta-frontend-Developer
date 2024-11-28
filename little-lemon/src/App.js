import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import './App.css';  // Import your CSS file for styles

function App() {
  return (
    <div className="app-container">  {/* The Flexbox container */}
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;


