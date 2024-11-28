import { useState, useEffect } from "react";
import "./Specials.css";

function Specials() {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    // For now, use a static array. Replace this with an API call later.
    const fetchSpecials = () => {
      setSpecials([
        { id: 1, name: "Lemon Chicken", description: "Tender chicken with lemon sauce" },
        { id: 2, name: "Spaghetti Bolognese", description: "Classic pasta with hearty sauce" },
        { id: 3, name: "Caesar Salad", description: "Crisp lettuce with Caesar dressing" },
      ]);
    };

    fetchSpecials();
  }, []);

  return (
    <section className="specials">
      <h2>Our Specials</h2>
      <div className="specials-list">
        {specials.map((special) => (
          <div key={special.id} className="special-item">
            <h3>{special.name}</h3>
            <p>{special.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;

  