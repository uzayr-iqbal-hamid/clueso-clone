import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/sidebar.css";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <h2 className="logo">Clueso</h2>

      <div className="sidebar-section">
        <p className="section-title">Workspace</p>
        <Link className={isActive("/") ? "active" : ""} to="/">
          Home
        </Link>
      </div>

      <div className="sidebar-section">
        <p className="section-title">Management</p>
        <span className="disabled">Team (coming soon)</span>
        <span className="disabled">Analytics (coming soon)</span>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
}
