import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <div className="bg-container">
      <div className="bg-card">
        <h2 className="dashboard-heading">Dashboard</h2>
        <p className="description">Welcome - {userName.name}</p>
        <button
          onClick={handleLogout}
          type="submit"
          className="dashboard-button"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
