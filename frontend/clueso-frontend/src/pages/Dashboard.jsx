import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

import { useEffect, useState } from "react";
import { apiRequest } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { token } = useAuth();
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  {projects.length === 0 ? (
    <p style={{ marginTop: "20px", color: "#64748b" }}>
      No projects yet. Create your first one.
    </p>
  ) : (
    <ul className="project-list">
      {projects.map(p => (
        <li key={p._id} onClick={() => navigate(`/projects/${p._id}`)}>
          <strong>{p.title}</strong>
          <span>{p.status}</span>
        </li>
      ))}
    </ul>
  )}


  useEffect(() => {
    apiRequest("/projects", "GET", null, token).then(res =>
      setProjects(res.projects)
    );
  }, []);

  const createProject = async () => {
    const res = await apiRequest(
      "/projects",
      "POST",
      { title },
      token
    );
    setProjects([res.project, ...projects]);
    setTitle("");
  };

  return (
    <div className="layout">
        <Sidebar />

        <main className="content">
            <h1>Projects</h1>

            <div className="create-project">
                <input
                placeholder="New project title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <button onClick={createProject}>Create</button>
            </div>

            <ul className="project-list">
                {projects.map(p => (
                <li key={p._id} onClick={() => navigate(`/projects/${p._id}`)}>
                    <strong>{p.title}</strong>
                    <span>{p.status}</span>
                </li>
                ))}
            </ul>
        </main>
  </div>
  );
}
