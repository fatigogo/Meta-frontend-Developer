const testimonials = [
    { id: 1, name: "John Doe", rating: 5, comment: "Amazing food!", image: "/path-to-image/john.jpg" },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Great service!", image: "/path-to-image/jane.jpg" },
    // Add more testimonials here...
  ];
  
  function CustomersSay() {
    return (
      <section id="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-list">
          {testimonials.map(customer => (
            <div key={customer.id} className="testimonial-item">
              <img src={customer.image} alt={customer.name} />
              <h3>{customer.name}</h3>
              <p>Rating: {"⭐".repeat(customer.rating)}</p>
              <p>{customer.comment}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  export default CustomersSay;
  