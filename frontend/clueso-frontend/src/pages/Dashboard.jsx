import { useEffect, useState } from "react";
import { apiRequest } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { token } = useAuth();
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

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
    <div>
      <h1>Projects</h1>

      <input
        placeholder="New project title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={createProject}>Create</button>

      <ul>
        {projects.map(p => (
          <li key={p._id} onClick={() => navigate(`/projects/${p._id}`)}>
            {p.title} — {p.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
