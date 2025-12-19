import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo">Clueso</span>
        <nav>
          <a>Product</a>
          <a>Resources</a>
          <a>Pricing</a>
          <a>Careers</a>
        </nav>
      </div>

      <div className="navbar-right">
        <Link to="/login">Sign In</Link>
        <Link to="/signup" className="cta">Start Free Trial</Link>
      </div>
    </header>
  );
}
