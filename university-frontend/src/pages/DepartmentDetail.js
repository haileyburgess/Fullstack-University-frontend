import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import departmentApi from "../api/departmentApi";
import facultyApi from "../api/facultyApi";
import "./DepartmentDetail.css";

const DepartmentDetail = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        setLoading(true);

        // Fetch department details
        const departmentData = await departmentApi.getDepartmentById(id);
        setDepartment(departmentData);

        // Fetch faculty for this department
        const facultyData = await facultyApi.getFacultyByDepartment(id);
        setFaculty(facultyData);

        setError(null);
      } catch (err) {
        setError("Failed to load department information");
        console.error("Error fetching department data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartmentData();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading department information...</p>
      </div>
    );
  }

  if (error || !department) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error || "Department not found"}</p>
        <Link to="/departments" className="back-btn">
          Back to Departments
        </Link>
      </div>
    );
  }

  return (
    <div className="department-detail">
      <div className="page-header">
        <Link to="/departments" className="back-link">
          Back to Departments
        </Link>
        <h1>{department.name}</h1>
      </div>

      <div className="department-hero">
        <div className="department-banner">
          <img
            src={
              department.bannerImage ||
              "https://via.placeholder.com/800x300?text=Department+Banner"
            }
            alt={`${department.name} Department`}
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/800x300?text=Department+Banner";
            }}
          />
        </div>
        <div className="department-info">
          <h2>{department.name}</h2>
          <p className="description">{department.description}</p>

          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-grid">
              <div className="contact-item">Phone: {department.phone}</div>
              <div className="contact-item">Email: {department.email}</div>
              <div className="contact-item">
                Location: {department.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="department-faculty">
        <h3>Faculty Members ({faculty.length})</h3>

        {faculty.length > 0 ? (
          <div className="faculty-grid">
            {faculty.map((member) => (
              <div key={member.id} className="faculty-card">
                <div className="faculty-image">
                  <img
                    src={
                      member.profileImage ||
                      "https://via.placeholder.com/150x200?text=Faculty+Member"
                    }
                    alt={member.name}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150x200?text=Faculty+Member";
                    }}
                  />
                </div>
                <div className="faculty-info">
                  <h4>{member.name}</h4>
                  <p className="title">{member.title}</p>
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
                  <Link
                    to={`/faculty/${member.id}`}
                    className="view-profile-btn">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-faculty">
            <p>No faculty members found for this department.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepartmentDetail;
