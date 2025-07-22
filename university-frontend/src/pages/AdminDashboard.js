import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import authApi from "../api/authApi";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = authApi.getCurrentUser();
    if (!currentUser || !authApi.isAuthenticated()) {
      navigate("/login");
      return;
    }
    setUser(currentUser);
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    authApi.logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading admin dashboard...</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Admin Dashboard</h1>
          <div className="admin-user-info">
            <span>Welcome, {user?.username}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-grid">
          <div className="admin-card">
            <h3>Departments Management</h3>
            <p>
              Manage academic departments, add new departments, and update
              existing ones.
            </p>
            <button className="admin-btn">Manage Departments</button>
          </div>

          <div className="admin-card">
            <h3>Faculty Management</h3>
            <p>
              Add new faculty members, update profiles, and manage department
              assignments.
            </p>
            <button className="admin-btn">Manage Faculty</button>
          </div>

          <div className="admin-card">
            <h3>User Management</h3>
            <p>
              Manage admin users, create new accounts, and control access
              permissions.
            </p>
            <Link to="/admin/users" className="admin-btn">
              Manage Users
            </Link>
          </div>

          <div className="admin-card">
            <h3>System Statistics</h3>
            <p>
              View system analytics, user activity, and performance metrics.
            </p>
            <button className="admin-btn">View Statistics</button>
          </div>
        </div>

        <div className="admin-actions">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <button className="quick-action-btn">Add New Department</button>
            <button className="quick-action-btn">Add New Faculty</button>
            <button className="quick-action-btn">Generate Report</button>
            <button className="quick-action-btn">Backup Data</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
