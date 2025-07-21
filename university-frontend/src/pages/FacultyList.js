import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import facultyApi from "../api/facultyApi";
import departmentApi from "../api/departmentApi";
import "./FacultyList.css";

const FacultyList = () => {
  const [faculty, setFaculty] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [filteredFaculty, setFilteredFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch faculty and departments
        const [facultyData, departmentsData] = await Promise.all([
          facultyApi.getAllFaculty(),
          departmentApi.getAllDepartments()
        ]);

        setFaculty(facultyData);
        setFilteredFaculty(facultyData);
        setDepartments(departmentsData);
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

  useEffect(() => {
    // Filter faculty based on search term and department
    let filtered = faculty;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(term) ||
          member.title.toLowerCase().includes(term) ||
          member.department.toLowerCase().includes(term) ||
          member.researchAreas.some((area) => area.toLowerCase().includes(term))
      );
    }

    if (selectedDepartment) {
      filtered = filtered.filter(
        (member) => member.departmentId === parseInt(selectedDepartment)
      );
    }

    setFilteredFaculty(filtered);
  }, [faculty, searchTerm, selectedDepartment]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDepartmentFilter = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("");
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

      <div className="filters-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search faculty by name, title, or research area..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="filter-controls">
          <select
            value={selectedDepartment}
            onChange={handleDepartmentFilter}
            className="department-filter">
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>

          {(searchTerm || selectedDepartment) && (
            <button onClick={clearFilters} className="clear-filters-btn">
              Clear Filters
            </button>
          )}
        </div>

        <div className="results-info">
          <p>
            Showing {filteredFaculty.length} of {faculty.length} faculty members
          </p>
        </div>
      </div>

      <div className="faculty-grid">
        {filteredFaculty.map((member) => (
          <div key={member.id} className="faculty-card">
            <div className="faculty-image">
              <img src={member.image} alt={member.name} />
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
                <span className="stat">{member.awards.length} awards</span>
              </div>

              <Link to={`/faculty/${member.id}`} className="view-profile-btn">
                View Full Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredFaculty.length === 0 && (
        <div className="no-results">
          <h3>No faculty members found</h3>
          <p>
            {searchTerm || selectedDepartment
              ? "Try adjusting your search criteria or filters."
              : "There are currently no faculty members available."}
          </p>
          {(searchTerm || selectedDepartment) && (
            <button onClick={clearFilters} className="clear-filters-btn">
              Clear All Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FacultyList;
