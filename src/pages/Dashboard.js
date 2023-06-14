import React, { useEffect, useState } from "react";
import DashboardInfo from "../components/DashboardInfo";
import {
  faUser,
  faBuilding,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function Dashboard() {
  const [authenticated, setauthenticated] = useState(null);
  const [totalUsers, setTotalUsers] = useState();
  const [totalProjects, setTotalProjects] = useState();
  const [totalCertificates, setTotalCertificates] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }

    // API call to get total users
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => setTotalUsers(response.data.total))
      .catch((error) => console.error(`Error: ${error}`));

    // API call to get total projects
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => setTotalProjects(response.data.total))
      .catch((error) => console.error(`Error: ${error}`));

    // API call to get total certificates
    axios
      .get("http://localhost:5000/api/certificates")
      .then((response) => setTotalCertificates(response.data.total))
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div class="grid gap-4 mb-8 mr-36 mt-16 md:grid-cols-2 xl:grid-cols-4">
        <Sidebar></Sidebar>
        <DashboardInfo Icon={faUser} title="Total Users" value={totalUsers} />
        <DashboardInfo
          Icon={faBuilding}
          title="Total Project"
          value={totalProjects}
        />
        <DashboardInfo
          Icon={faCertificate}
          title="Total Certificate"
          value={totalCertificates}
        />
      </div>
    );
  }
}

export default Dashboard;
