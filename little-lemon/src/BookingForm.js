import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${formData.date} at ${formData.time}.`);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <label htmlFor="guests">Number of Guests:</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="20"
        required
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="">Select an Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Submit Reservation</button>
    </form>
  );
}

export default BookingForm;
