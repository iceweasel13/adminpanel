import React from "react";
import DashboardInfo from "../components/DashboardInfo";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
function Dashboard() {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div class="grid gap-4 mb-8 ml-96 mt-16 md:grid-cols-2 xl:grid-cols-4">
        <DashboardInfo Icon={faUser} title="Total Users" value="6389" />
        <DashboardInfo Icon={faUser} title="Total Users" value="6389" />
        <DashboardInfo Icon={faUser} title="Total Users" value="6389" />
      </div>
    );
  }
}

export default Dashboard;
