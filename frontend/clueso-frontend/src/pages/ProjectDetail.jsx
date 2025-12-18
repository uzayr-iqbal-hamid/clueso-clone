import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from "../services/api";
import { useAuth } from "../context/AuthContext";

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

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>Status: {project.status}</p>

      {project.status !== "ready" && (
        <button onClick={processProject} disabled={loading}>
          {loading ? "Processing..." : "Process with AI"}
        </button>
      )}

      {content && (
        <>
          <h2>Video</h2>
          <video controls src={content.videoUrl} />

          <h2>Steps</h2>
          <ol>
            {content.steps.map(s => (
              <li key={s.stepNumber}>{s.text}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}
