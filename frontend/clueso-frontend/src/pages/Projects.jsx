import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";
import { useAuth } from "../context/AuthContext";
import AppLayout from "../components/AppLayout";

export default function Projects() {
  const { token } = useAuth();
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    apiRequest("/projects", "GET", null, token).then((res) =>
      setProjects(res.projects)
    );
  }, []);

  return (
    <AppLayout>
      <h1>All Projects</h1>

      {projects.length === 0 ? (
        <p style={{ marginTop: 20, color: "#64748b" }}>
          No projects yet.
        </p>
      ) : (
        <ul className="project-list">
          {projects.map((p) => (
            <li
              key={p._id}
              onClick={() => navigate(`/app/projects/${p._id}`)}
            >
              <strong>{p.title}</strong>
              <span>{p.status}</span>
            </li>
          ))}
        </ul>
      )}
    </AppLayout>
  );
}
