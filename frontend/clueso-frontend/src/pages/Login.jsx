import "../styles/auth.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import { apiRequest } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    console.log("Login clicked", { email, password });

    try {
      const data = await apiRequest("/auth/login", "POST", {
        email,
        password,
      });

      console.log("Login response:", data);

      login(data.token);
      navigate("/app");
    } catch (err) {
      console.error("Login error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
        <div className="auth-card">
            <h2>Login</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input placeholder="Email" value={email}
                    onChange={e => setEmail(e.target.value)} />

                <input type="password" placeholder="Password" value={password}
                    onChange={e => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>

            <div className="auth-footer">
                Don’t have an account? <Link to="/signup">Sign up</Link>
            </div>
        </div>
    </div>
  );
}
