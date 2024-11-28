function BookingPage() {
    return (
      <section id="booking">
        <h2>Reserve a Table</h2>
        <form>
          <label>Name:</label>
          <input type="text" required />
          <label>Date:</label>
          <input type="date" required />
          <label>Time:</label>
          <input type="time" required />
          <label>Guests:</label>
          <input type="number" min="1" required />
          <button type="submit">Book Now</button>
        </form>
      </section>
    );
  }
  export default BookingPage;
  