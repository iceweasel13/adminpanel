import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectApplications from "./pages/ProjectApplications";
import KycApplications from "./pages/KycApplications";
import Users from "./pages/Users";
import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";
import LoginPage from "./pages/LoginPage";

function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setAuthenticated={setAuthenticated} />}
        />
        {authenticated ? (
          <>
            <Sidebar />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/project-applications"
              element={<ProjectApplications />}
            />
            <Route path="/kyc-applications" element={<KycApplications />} />
            <Route path="/users" element={<Users />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/posts" element={<Posts />} />
          </>
        ) : (
          <Navigate to="/login" />
        )}
      </Routes>
    </Router>
  );
}

export default App;
