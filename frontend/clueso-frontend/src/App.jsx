import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// main pages imports
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";

// sidebar imports
import Templates from "./pages/Templates";
import AutoUpdate from "./pages/AutoUpdate";
import Team from "./pages/Team";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Trash from "./pages/Trash";


import { useAuth } from "./context/AuthContext";


function PrivateRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/app"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/app/templates"
          element={
            <PrivateRoute>
              <Templates />
            </PrivateRoute>
          }
        />

        <Route
          path="/app/auto"
          element={
            <PrivateRoute>
              <AutoUpdate />
            </PrivateRoute>
          }
        />

        <Route
          path="/app/team"
          element={
            <PrivateRoute>
              <Team />
            </PrivateRoute>
          }
        />

        <Route
          path="/app/analytics"
          element={
            <PrivateRoute>
              <Analytics />
            </PrivateRoute>
          }
        />

        <Route
          path="/app/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />

        <Route
          path="/app/trash"
          element={
            <PrivateRoute>
              <Trash />
            </PrivateRoute>
          }
        />

        <Route 
          path="/app/projects"
          element={
            <PrivateRoute>
              <Projects />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/app/projects/:id"
          element={
            <PrivateRoute>
              <ProjectDetail />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
