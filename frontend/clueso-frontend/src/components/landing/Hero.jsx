import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        Turn screen recordings into
        <br />
        <span>videos & documentation</span>
      </h1>

      <p>
        Clueso helps teams instantly create product videos and step-by-step
        guides using AI — no editing required.
      </p>

      <div className="hero-actions">
        <Link to="/signup" className="btn-primary">
          Get started free
        </Link>
        <Link to="/login" className="btn-outline">
          View demo
        </Link>
      </div>
    </section>
  );
}
