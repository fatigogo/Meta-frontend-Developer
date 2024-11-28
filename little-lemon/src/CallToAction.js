import "./CallToAction.css";
import React from "react";
import BookingForm from "./BookingForm.js";
function CallToAction() {
    return (
      <section className="call-to-action">
        <h1>Welcome to Little Lemon</h1>
        <p>Experience the finest dining in Chicago.</p>
        <button onClick={() => window.location.href = "./BookingForm.js"}>Reserve a Table</button>
        <BookingForm />
      </section>
    );
  }
  export default CallToAction;
  