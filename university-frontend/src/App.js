import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Import pages
import DepartmentsList from "./pages/DepartmentsList";
import DepartmentDetail from "./pages/DepartmentDetail";
import FacultyList from "./pages/FacultyList";
import FacultyDetail from "./pages/FacultyDetail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUserManagement from "./pages/AdminUserManagement";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Header */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">University Portal</div>
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
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Admin Login
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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUserManagement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
