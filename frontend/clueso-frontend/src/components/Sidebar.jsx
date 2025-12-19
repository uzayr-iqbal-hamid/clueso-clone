import { NavLink } from "react-router-dom";
import {
  Home,
  Folder,
  Video,
  Zap,
  Users,
  BarChart3,
  Settings,
  Trash2,
} from "lucide-react";

import "../styles/sidebar.css";

const mainMenu = [
  { label: "Home", icon: Home, to: "/app" },
  { label: "All Projects", icon: Folder, to: "/app/projects" },
  { label: "Video Templates", icon: Video, to: "/app/templates" },
  { label: "Auto-update", icon: Zap, to: "/app/auto" },
  { label: "Team", icon: Users, to: "/app/team" },
  { label: "Analytics", icon: BarChart3, to: "/app/analytics" },
];

const bottomMenu = [
  { label: "Settings", icon: Settings, to: "/app/settings" },
  { label: "Trash", icon: Trash2, to: "/app/trash" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">Clueso</div>

      {/* Main menu */}
      <nav className="sidebar-menu">
        {mainMenu.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom menu */}
      <nav className="sidebar-footer">
        {bottomMenu.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={label}
            to={to}
            className="sidebar-item"
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
