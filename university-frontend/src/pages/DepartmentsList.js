import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import departmentApi from "../api/departmentApi";
import "./DepartmentsList.css";

// Map department names to Unsplash images
const departmentImages = {
  "Computer Science":
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  Mathematics:
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  Physics:
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  Biology:
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  Chemistry:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  "English Literature":
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80",
  History:
    "https://images.unsplash.com/photo-1465808883808-8a8b5a7b1d2e?auto=format&fit=crop&w=800&q=80",
  Default:
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=800&q=80"
};

const DepartmentsList = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: ""
  });

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      const data = await departmentApi.getAllDepartments();
      setDepartments(data);
      setError(null);
    } catch (err) {
      setError("Failed to load departments");
      console.error("Error fetching departments:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingDepartment) {
        await departmentApi.updateDepartment(editingDepartment.id, formData);
        setEditingDepartment(null);
      } else {
        await departmentApi.createDepartment(formData);
      }
      setFormData({ name: "", description: "", location: "" });
      setShowAddForm(false);
      fetchDepartments();
    } catch (err) {
      console.error("Error saving department:", err);
      alert("Failed to save department. Please try again.");
    }
  };

  const handleEdit = (department) => {
    setEditingDepartment(department);
    setFormData({
      name: department.name,
      description: department.description,
      location: department.location
    });
    setShowAddForm(true);
  };

  const handleDelete = async (departmentId) => {
    try {
      await departmentApi.deleteDepartment(departmentId);
      setDeleteConfirm(null);
      fetchDepartments();
    } catch (err) {
      console.error("Error deleting department:", err);
      alert("Failed to delete department. Please try again.");
    }
  };

  const cancelForm = () => {
    setShowAddForm(false);
    setEditingDepartment(null);
    setFormData({ name: "", description: "", location: "" });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading departments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={fetchDepartments}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="departments-list">
      <div className="page-header">
        <h1>Academic Departments</h1>
        <p>Explore our diverse academic departments and their faculty</p>
        <button
          className="add-department-btn"
          onClick={() => setShowAddForm(true)}>
          + Add Department
        </button>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="form-overlay">
          <div className="form-modal">
            <h2>
              {editingDepartment ? "Edit Department" : "Add New Department"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Department Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="save-btn">
                  {editingDepartment ? "Update" : "Create"} Department
                </button>
                <button
                  type="button"
                  onClick={cancelForm}
                  className="cancel-btn">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteConfirm && (
        <div className="form-overlay">
          <div className="form-modal">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete "{deleteConfirm.name}"?</p>
            <p>This action cannot be undone.</p>
            <div className="form-actions">
              <button
                onClick={() => handleDelete(deleteConfirm.id)}
                className="delete-btn">
                Delete Department
              </button>
              <button
                onClick={() => setDeleteConfirm(null)}
                className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="departments-grid">
        {departments.map((department) => {
          // Pick Unsplash image based on department name, fallback to Default
          const unsplashImg =
            departmentImages[department.name] || departmentImages.Default;
          return (
            <div key={department.id} className="department-card">
              <div className="department-banner">
                <img
                  src={unsplashImg}
                  alt={`${department.name} Department`}
                  onError={(e) => {
                    e.target.src = departmentImages.Default;
                  }}
                />
                <div className="department-actions">
                  <button
                    onClick={() => handleEdit(department)}
                    className="edit-btn"
                    title="Edit Department">
                    ✏️
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(department)}
                    className="delete-btn"
                    title="Delete Department">
                    🗑️
                  </button>
                </div>
              </div>
              <div className="department-content">
                <h3>{department.name}</h3>
                <p>{department.description}</p>
                <div className="department-meta">
                  <span className="faculty-count">
                    {department.facultyCount} Faculty Members
                  </span>
                  <span className="location">{department.location}</span>
                </div>
                <Link
                  to={`/departments/${department.id}`}
                  className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {departments.length === 0 && (
        <div className="no-data">
          <h3>No departments found</h3>
          <p>There are currently no departments available.</p>
        </div>
      )}
    </div>
  );
};

export default DepartmentsList;
