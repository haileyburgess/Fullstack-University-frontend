// Simple JavaScript for University Portal Wireframe

// Sample data for departments
const departments = [
  {
    id: 1,
    name: "Computer Science",
    description:
      "Explore the world of computing, algorithms, and software development.",
    facultyCount: 12,
    location: "Engineering Building, Room 201"
  },
  {
    id: 2,
    name: "Mathematics",
    description:
      "Study pure and applied mathematics, statistics, and mathematical modeling.",
    facultyCount: 8,
    location: "Science Building, Room 301"
  },
  {
    id: 3,
    name: "Physics",
    description: "Discover the fundamental laws of nature and the universe.",
    facultyCount: 10,
    location: "Physics Building, Room 101"
  },
  {
    id: 4,
    name: "English Literature",
    description:
      "Explore classic and contemporary literature from around the world.",
    facultyCount: 15,
    location: "Humanities Building, Room 401"
  }
];

// Sample data for faculty
const faculty = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Professor of Computer Science",
    department: "Computer Science Department",
    publications: 25,
    awards: 5
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Associate Professor of Mathematics",
    department: "Mathematics Department",
    publications: 18,
    awards: 3
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Professor of Physics",
    department: "Physics Department",
    publications: 32,
    awards: 7
  },
  {
    id: 4,
    name: "Dr. David Thompson",
    title: "Associate Professor of English",
    department: "English Literature Department",
    publications: 15,
    awards: 2
  }
];

// Basic functionality for the wireframe
document.addEventListener("DOMContentLoaded", function () {
  console.log("University Portal Wireframe loaded");

  // Add click handlers for navigation
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Add click handlers for buttons
  const viewDetailsBtns = document.querySelectorAll(".view-details-btn");
  viewDetailsBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("View Details functionality would be implemented here");
    });
  });

  const viewProfileBtns = document.querySelectorAll(".view-profile-btn");
  viewProfileBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("View Profile functionality would be implemented here");
    });
  });

  const adminBtns = document.querySelectorAll(".admin-btn");
  adminBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("Admin functionality would be implemented here");
    });
  });

  // Add search functionality
  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      console.log("Searching for:", searchTerm);
      // Search functionality would be implemented here
    });
  }

  // Add filter functionality
  const departmentFilter = document.querySelector(".department-filter");
  if (departmentFilter) {
    departmentFilter.addEventListener("change", function () {
      const selectedDepartment = this.value;
      console.log("Filtering by department:", selectedDepartment);
      // Filter functionality would be implemented here
    });
  }
});

// Utility functions
function showMessage(message) {
  alert(message);
}

function logData(data) {
  console.log("Data:", data);
}

// Export data for potential use
window.universityData = {
  departments: departments,
  faculty: faculty
};
