import "./CallToAction.css";
function CallToAction() {
    return (
      <section className="call-to-action">
        <h1>Welcome to Little Lemon</h1>
        <p>Experience the finest dining in Chicago.</p>
        <button onClick={() => window.location.href = "#booking"}>Reserve a Table</button>
      </section>
    );
  }
  export default CallToAction;
  