import apiService from "./apiService";
import { faculty as dummyFaculty } from "./dummyData";

class FacultyApiService {
  // Get all faculty
  async getAllFaculty() {
    try {
      // Try to fetch from backend first
      const response = await apiService.get("/faculty");
      return response;
    } catch (error) {
      console.warn("Backend not available, using dummy data:", error.message);
      // Fallback to dummy data if backend is not available
      return dummyFaculty;
    }
  }

  // Get a single faculty member by ID
  async getFacultyById(id) {
    try {
      // Try to fetch from backend first
      const response = await apiService.get(`/faculty/${id}`);
      return response;
    } catch (error) {
      console.warn("Backend not available, using dummy data:", error.message);
      // Fallback to dummy data if backend is not available
      const facultyMember = dummyFaculty.find((f) => f.id === parseInt(id));
      if (!facultyMember) {
        throw new Error("Faculty member not found");
      }
      return facultyMember;
    }
  }

  // Get faculty by department
  async getFacultyByDepartment(departmentId) {
    try {
      // Try to fetch from backend first
      const response = await apiService.get(
        `/faculty/department/${departmentId}`
      );
      return response;
    } catch (error) {
      console.warn("Backend not available, using dummy data:", error.message);
      // Fallback to dummy data if backend is not available
      return dummyFaculty.filter(
        (f) => f.departmentId === parseInt(departmentId)
      );
    }
  }

  // Search faculty
  async searchFaculty(query) {
    try {
      // Try to fetch from backend first
      const response = await apiService.get(
        `/faculty/search?q=${encodeURIComponent(query)}`
      );
      return response;
    } catch (error) {
      console.warn("Backend not available, using dummy data:", error.message);
      // Fallback to dummy data if backend is not available
      const searchTerm = query.toLowerCase();
      return dummyFaculty.filter(
        (f) =>
          f.name.toLowerCase().includes(searchTerm) ||
          f.title.toLowerCase().includes(searchTerm) ||
          f.department.toLowerCase().includes(searchTerm) ||
          f.researchAreas.some((area) =>
            area.toLowerCase().includes(searchTerm)
          )
      );
    }
  }

  // Create a new faculty member (admin only)
  async createFaculty(facultyData) {
    try {
      const response = await apiService.post("/faculty", facultyData);
      return response;
    } catch (error) {
      console.error("Failed to create faculty member:", error);
      throw error;
    }
  }

  // Update a faculty member (admin only)
  async updateFaculty(id, facultyData) {
    try {
      const response = await apiService.put(`/faculty/${id}`, facultyData);
      return response;
    } catch (error) {
      console.error("Failed to update faculty member:", error);
      throw error;
    }
  }

  // Delete a faculty member (admin only)
  async deleteFaculty(id) {
    try {
      const response = await apiService.delete(`/faculty/${id}`);
      return response;
    } catch (error) {
      console.error("Failed to delete faculty member:", error);
      throw error;
    }
  }

  // Get faculty statistics
  async getFacultyStats() {
    try {
      const response = await apiService.get("/faculty/stats");
      return response;
    } catch (error) {
      console.warn("Backend not available, using dummy stats:", error.message);
      // Fallback to dummy stats
      const stats = {
        totalFaculty: dummyFaculty.length,
        byDepartment: {},
        byTitle: {},
        averagePublications: 0
      };

      // Calculate stats by department
      dummyFaculty.forEach((f) => {
        if (!stats.byDepartment[f.department]) {
          stats.byDepartment[f.department] = 0;
        }
        stats.byDepartment[f.department]++;
      });

      // Calculate stats by title
      dummyFaculty.forEach((f) => {
        if (!stats.byTitle[f.title]) {
          stats.byTitle[f.title] = 0;
        }
        stats.byTitle[f.title]++;
      });

      // Calculate average publications
      const totalPublications = dummyFaculty.reduce(
        (sum, f) => sum + f.publications,
        0
      );
      stats.averagePublications = Math.round(
        totalPublications / dummyFaculty.length
      );

      return stats;
    }
  }
}

export default new FacultyApiService();
