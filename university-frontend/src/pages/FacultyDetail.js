import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import facultyApi from "../api/facultyApi";
import "./FacultyDetail.css";

const FacultyDetail = () => {
  const { id } = useParams();
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        setLoading(true);
        const data = await facultyApi.getFacultyById(id);
        setFaculty(data);
        setError(null);
      } catch (err) {
        setError("Failed to load faculty information");
        console.error("Error fetching faculty data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading faculty information...</p>
      </div>
    );
  }

  if (error || !faculty) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error || "Faculty member not found"}</p>
        <Link to="/faculty" className="back-btn">
          Back to Faculty
        </Link>
      </div>
    );
  }

  return (
    <div className="faculty-detail">
      <div className="page-header">
        <Link to="/faculty" className="back-link">
          Back to Faculty
        </Link>
        <h1>{faculty.name}</h1>
      </div>

      <div className="faculty-profile">
        <div className="profile-header">
          <div className="profile-info">
            <h2>{faculty.name}</h2>
            <p className="title">{faculty.title}</p>
            <p className="department">{faculty.department} Department</p>
            <p className="education">{faculty.education}</p>

            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">{faculty.publications}</span>
                <span className="stat-label">Publications</span>
              </div>
              <div className="stat">
                <span className="stat-number">{faculty.awards.length}</span>
                <span className="stat-label">Awards</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {faculty.researchAreas.length}
                </span>
                <span className="stat-label">Research Areas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h3>Contact Information</h3>
          <div className="contact-grid">
            <div className="contact-item">Phone: {faculty.phone}</div>
            <div className="contact-item">Email: {faculty.email}</div>
            <div className="contact-item">Office: {faculty.office}</div>
          </div>
        </div>

        <div className="bio-section">
          <h3>Biography</h3>
          <p>{faculty.bio}</p>
        </div>

        <div className="research-section">
          <h3>Research Areas</h3>
          <div className="research-tags">
            {faculty.researchAreas.map((area, index) => (
              <span key={index} className="research-tag">
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="awards-section">
          <h3>Awards & Recognition</h3>
          <ul className="awards-list">
            {faculty.awards.map((award, index) => (
              <li key={index} className="award-item">
                {award}
              </li>
            ))}
          </ul>
        </div>

        <div className="department-link">
          <h3>Department Information</h3>
          <p>Learn more about the {faculty.department} Department</p>
          <Link
            to={`/departments/${faculty.departmentId}`}
            className="department-btn">
            View Department
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacultyDetail;
