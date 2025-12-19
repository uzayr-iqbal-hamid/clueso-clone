import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from "../services/api";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";

import "../styles/dashboard.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const { token } = useAuth();
  const [project, setProject] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProject = async () => {
    const res = await apiRequest(`/projects/${id}`, "GET", null, token);
    setProject(res.project);
    setContent(res.content);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const processProject = async () => {
    setLoading(true);
    await apiRequest(`/process/${id}`, "POST", null, token);
    await fetchProject();
    setLoading(false);
  };

  // if (!project) return <p>Loading...</p>;

  return (
  <div className="layout">
    <Sidebar />

    <main className="content">
      {!project ? (
        <p>Loading project...</p>
      ) : (
        <>
          <h1>{project.title}</h1>
          <p>Status: <strong>{project.status}</strong></p>

          {project.status !== "ready" && (
            <button
              onClick={processProject}
              disabled={loading}
              style={{ margin: "20px 0" }}
            >
              {loading ? "Processing..." : "Process with AI"}
            </button>
          )}

          {content && (
            <div style={{ marginTop: "30px" }}>
              <h2>Generated Video</h2>
              <video
                controls
                src={content.videoUrl}
                style={{ width: "100%", borderRadius: "8px" }}
              />

              <h2 style={{ marginTop: "30px" }}>Step-by-step Documentation</h2>
              <ol>
                {content.steps.map((step) => (
                  <li key={step.stepNumber} style={{ marginBottom: "8px" }}>
                    {step.text}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </>
      )}
    </main>
  </div>
);

}
