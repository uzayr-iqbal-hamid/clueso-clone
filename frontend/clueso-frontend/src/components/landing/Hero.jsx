export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Product videos <br />
          <span>in minutes with AI</span>
        </h1>

        <p>
          Transform raw screen recordings into stunning videos & documentation.
        </p>

        <div className="hero-actions">
          <button className="primary">Start Free Trial</button>
          <button className="secondary">Book a Demo</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-mock" />
      </div>
    </section>
  );
}
