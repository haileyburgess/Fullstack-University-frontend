import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import facultyApi from "../api/facultyApi";
import "./FacultyList.css";

const FacultyList = () => {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch faculty
        const facultyData = await facultyApi.getAllFaculty();
        setFaculty(facultyData);
        setError(null);
      } catch (err) {
        setError("Failed to load faculty information");
        console.error("Error fetching faculty data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="faculty-list">
      <div className="page-header">
        <h1>Faculty Directory</h1>
        <p>Meet our distinguished faculty members across all departments</p>
      </div>

      <div className="faculty-grid">
        {faculty.map((member) => (
          <div key={member.id} className="faculty-card">
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
                <span className="stat">{member.awards.length} awards</span>
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
