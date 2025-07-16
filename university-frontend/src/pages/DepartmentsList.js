import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import departmentApi from "../api/departmentApi";
import "./DepartmentsList.css";

const DepartmentsList = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    fetchDepartments();
  }, []);

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
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="departments-list">
      <div className="page-header">
        <h1>Academic Departments</h1>
        <p>Explore our diverse academic departments and their faculty</p>
      </div>

      <div className="departments-grid">
        {departments.map((department) => (
          <div key={department.id} className="department-card">
            <div className="department-image">
              <img src={department.image} alt={department.name} />
              <div className="department-overlay">
                <i className={department.icon}></i>
              </div>
            </div>
            <div className="department-content">
              <h3>{department.name}</h3>
              <p>{department.description}</p>
              <div className="department-meta">
                <span className="faculty-count">
                  <i className="fas fa-users"></i>
                  {department.facultyCount} Faculty Members
                </span>
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  {department.location}
                </span>
              </div>
              <Link
                to={`/departments/${department.id}`}
                className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
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
