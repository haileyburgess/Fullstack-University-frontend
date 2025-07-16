import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import pages
import DepartmentsList from "./pages/DepartmentsList";
import DepartmentDetail from "./pages/DepartmentDetail";
import FacultyList from "./pages/FacultyList";
import FacultyDetail from "./pages/FacultyDetail";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Header */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <i className="fas fa-university"></i>
              <span>University Portal</span>
            </div>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/departments" className="nav-link">
                  Departments
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faculty" className="nav-link">
                  Faculty
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<DepartmentsList />} />
            <Route path="/departments/:id" element={<DepartmentDetail />} />
            <Route path="/faculty" element={<FacultyList />} />
            <Route path="/faculty/:id" element={<FacultyDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
