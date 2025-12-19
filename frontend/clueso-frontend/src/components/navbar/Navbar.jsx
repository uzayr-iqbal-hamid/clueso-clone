import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Clueso</div>

      <div className="navbar-actions">
        <Link to="/login" className="btn-secondary">
          Login
        </Link>
        <Link to="/signup" className="btn-primary">
          Sign up
        </Link>
      </div>
    </nav>
  );
}
