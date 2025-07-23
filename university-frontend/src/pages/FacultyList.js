import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import facultyApi from "../api/facultyApi";
import departmentApi from "../api/departmentApi";
import "./FacultyList.css";

const FacultyList = () => {
  const [faculty, setFaculty] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    department: "",
    email: "",
    researchAreas: "",
    publications: "",
    profileImage: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch faculty and departments
      const [facultyData, departmentsData] = await Promise.all([
        facultyApi.getAllFaculty(),
        departmentApi.getAllDepartments()
      ]);

      setFaculty(facultyData);
      setDepartments(departmentsData);
      setError(null);
    } catch (err) {
      setError("Failed to load faculty information");
      console.error("Error fetching data:", err);
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
      const submitData = {
        ...formData,
        researchAreas: formData.researchAreas
          .split(",")
          .map((area) => area.trim())
          .filter((area) => area),
        publications: parseInt(formData.publications) || 0
      };

      if (editingFaculty) {
        await facultyApi.updateFaculty(editingFaculty.id, submitData);
        setEditingFaculty(null);
      } else {
        await facultyApi.createFaculty(submitData);
      }
      setFormData({
        name: "",
        title: "",
        department: "",
        email: "",
        researchAreas: "",
        publications: "",
        profileImage: ""
      });
      setShowAddForm(false);
      fetchData();
    } catch (err) {
      console.error("Error saving faculty:", err);
      alert("Failed to save faculty member. Please try again.");
    }
  };

  const handleEdit = (member) => {
    setEditingFaculty(member);
    setFormData({
      name: member.name,
      title: member.title,
      department: member.department,
      email: member.email || "",
      researchAreas: member.researchAreas.join(", "),
      publications: member.publications.toString(),
      profileImage: member.profileImage || ""
    });
    setShowAddForm(true);
  };

  const handleDelete = async (facultyId) => {
    try {
      await facultyApi.deleteFaculty(facultyId);
      setDeleteConfirm(null);
      fetchData();
    } catch (err) {
      console.error("Error deleting faculty:", err);
      alert("Failed to delete faculty member. Please try again.");
    }
  };

  const cancelForm = () => {
    setShowAddForm(false);
    setEditingFaculty(null);
    setFormData({
      name: "",
      title: "",
      department: "",
      email: "",
      researchAreas: "",
      publications: "",
      profileImage: ""
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading faculty information...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={fetchData}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="faculty-list">
      <div className="page-header">
        <h1>Faculty Directory</h1>
        <p>Meet our distinguished faculty members across all departments</p>
        <button
          className="add-faculty-btn"
          onClick={() => setShowAddForm(true)}>
          + Add Faculty Member
        </button>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <div className="form-overlay">
          <div className="form-modal">
            <h2>
              {editingFaculty
                ? "Edit Faculty Member"
                : "Add New Faculty Member"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
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
                <label htmlFor="title">Title/Position:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="department">Department:</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required>
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.name}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="researchAreas">
                  Research Areas (comma-separated):
                </label>
                <textarea
                  id="researchAreas"
                  name="researchAreas"
                  value={formData.researchAreas}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="e.g., Machine Learning, Data Science, AI"
                />
              </div>
              <div className="form-group">
                <label htmlFor="publications">Number of Publications:</label>
                <input
                  type="number"
                  id="publications"
                  name="publications"
                  value={formData.publications}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label htmlFor="profileImage">Profile Image URL:</label>
                <input
                  type="url"
                  id="profileImage"
                  name="profileImage"
                  value={formData.profileImage}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="save-btn">
                  {editingFaculty ? "Update" : "Create"} Faculty Member
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
                Delete Faculty Member
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

      <div className="faculty-grid">
        {faculty.map((member) => (
          <div key={member.id} className="faculty-card">
            <div className="faculty-image">
              <img
                src={
                  member.profileImage ||
                  "https://via.placeholder.com/150x200?text=Faculty+Member"
                }
                alt={`${member.name}`}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/150x200?text=Faculty+Member";
                }}
              />
              <div className="faculty-actions">
                <button
                  onClick={() => handleEdit(member)}
                  className="edit-btn"
                  title="Edit Faculty Member">
                  ✏️
                </button>
                <button
                  onClick={() => setDeleteConfirm(member)}
                  className="delete-btn"
                  title="Delete Faculty Member">
                  🗑️
                </button>
              </div>
            </div>
            <div className="faculty-info">
              <h3>{member.name}</h3>
              <p className="title">{member.title}</p>
              <p className="department">{member.department}</p>

              <div className="research-areas">
                {member.researchAreas.slice(0, 3).map((area, index) => (
                  <span key={index} className="research-tag">
                    {area}
                  </span>
                ))}
                {member.researchAreas.length > 3 && (
                  <span className="research-tag">
                    +{member.researchAreas.length - 3} more
                  </span>
                )}
              </div>

              <div className="faculty-stats">
                <span className="stat">{member.publications} publications</span>
                <span className="stat">
                  {member.awards?.length || 0} awards
                </span>
              </div>

              <Link to={`/faculty/${member.id}`} className="view-profile-btn">
                View Full Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {faculty.length === 0 && (
        <div className="no-results">
          <h3>No faculty members found</h3>
          <p>There are currently no faculty members available.</p>
        </div>
      )}
    </div>
  );
};

export default FacultyList;
