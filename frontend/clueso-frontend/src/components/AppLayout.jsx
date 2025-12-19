import Sidebar from "./Sidebar";
import "../styles/dashboard.css";

export default function AppLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  );
}
