import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to University Portal</h1>
        <p>
          Explore our academic departments and meet our distinguished faculty
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Academic Departments</h3>
          <p>
            Discover our diverse range of academic departments, each offering
            cutting-edge programs and research opportunities.
          </p>
          <Link to="/departments" className="feature-link">
            Browse Departments
          </Link>
        </div>

        <div className="feature-card">
          <h3>Faculty Directory</h3>
          <p>
            Meet our accomplished faculty members who are experts in their
            fields and dedicated to student success.
          </p>
          <Link to="/faculty" className="feature-link">
            View Faculty
          </Link>
        </div>

        <div className="feature-card">
          <h3>Research Excellence</h3>
          <p>
            Explore groundbreaking research conducted by our faculty across
            various disciplines and fields of study.
          </p>
          <Link to="/faculty" className="feature-link">
            Research Areas
          </Link>
        </div>
      </div>

      <div className="stats-section">
        <h2>University Overview</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>6</h3>
            <p>Academic Departments</p>
          </div>
          <div className="stat-item">
            <h3>8</h3>
            <p>Faculty Members</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Research Areas</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Publications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
