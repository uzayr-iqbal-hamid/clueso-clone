import "../styles/auth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { apiRequest } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);

  try {
    const data = await apiRequest("/auth/signup", "POST", {
      email,
      password,
    });

    login(data.token);
    navigate("/app");
  } catch (err) {
    setError(err.message);
  }
};


  return (
    <div className="auth-container">
        <div className="auth-card">
            <h2>Signup</h2>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input placeholder="Email" value={email}
                onChange={e => setEmail(e.target.value)} />

                <input type="password" placeholder="Password" value={password}
                onChange={e => setPassword(e.target.value)} />

                <button type="submit">Signup</button>
            </form>

            <div className="auth-footer">
                Don’t have an account? <Link to="/login">Login</Link>
            </div>
        </div>
  </div>
  );
}
