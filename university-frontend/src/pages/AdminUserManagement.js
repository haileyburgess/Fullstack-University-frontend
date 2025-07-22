import React, { useState, useEffect } from "react";
import authApi from "../api/authApi";
import "./AdminUserManagement.css";

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    // For now, we'll use mock data since we don't have a users list endpoint
    setUsers([
      { id: 1, username: "admin", created_at: "2024-01-01" },
      { id: 2, username: "faculty_admin", created_at: "2024-01-15" }
    ]);
    setLoading(false);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await authApi.register(
        formData.username,
        formData.password
      );

      // Add the new user to the list
      const newUser = {
        id: response.user.id,
        username: response.user.username,
        created_at: new Date().toISOString().split("T")[0]
      };

      setUsers([...users, newUser]);
      setFormData({ username: "", password: "", confirmPassword: "" });
      setShowCreateForm(false);

      alert("User created successfully!");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId, username) => {
    if (username === "admin") {
      alert("Cannot delete the main admin account");
      return;
    }

    if (window.confirm(`Are you sure you want to delete user "${username}"?`)) {
      // For now, just remove from local state
      // In a real app, you'd call an API to delete the user
      setUsers(users.filter((user) => user.id !== userId));
      alert("User deleted successfully!");
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading user management...</p>
      </div>
    );
  }

  return (
    <div className="admin-user-management">
      <div className="page-header">
        <h1>User Management</h1>
        <p>Manage admin user accounts and permissions</p>
      </div>

      <div className="user-management-content">
        <div className="user-actions">
          <button
            className="create-user-btn"
            onClick={() => setShowCreateForm(true)}>
            Create New User
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {showCreateForm && (
          <div className="create-user-form">
            <h3>Create New User Account</h3>
            <form onSubmit={handleCreateUser}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter password (min 6 characters)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  placeholder="Confirm password"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Creating..." : "Create User"}
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowCreateForm(false);
                    setFormData({
                      username: "",
                      password: "",
                      confirmPassword: ""
                    });
                    setError("");
                  }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="users-list">
          <h3>Existing Users</h3>
          <div className="users-table">
            <div className="table-header">
              <div className="header-cell">Username</div>
              <div className="header-cell">Created</div>
              <div className="header-cell">Actions</div>
            </div>

            {users.map((user) => (
              <div key={user.id} className="table-row">
                <div className="table-cell">{user.username}</div>
                <div className="table-cell">{user.created_at}</div>
                <div className="table-cell">
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteUser(user.id, user.username)}
                    disabled={user.username === "admin"}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserManagement;
