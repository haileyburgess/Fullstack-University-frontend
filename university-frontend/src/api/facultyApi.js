import apiService from "./apiService";

class FacultyApiService {
  // Get all faculty
  async getAllFaculty() {
    try {
      const response = await apiService.get("/faculty");
      return response;
    } catch (error) {
      console.error("Failed to fetch faculty:", error);
      throw error;
    }
  }

  // Get a single faculty member by ID
  async getFacultyById(id) {
    try {
      const response = await apiService.get(`/faculty/${id}`);
      return response;
    } catch (error) {
      console.error("Failed to fetch faculty member:", error);
      throw error;
    }
  }

  // Get faculty by department
  async getFacultyByDepartment(departmentId) {
    try {
      const response = await apiService.get(
        `/faculty/department/${departmentId}`
      );
      return response;
    } catch (error) {
      console.error("Failed to fetch faculty by department:", error);
      throw error;
    }
  }

  // Search faculty
  async searchFaculty(query) {
    try {
      const response = await apiService.get(
        `/faculty/search?q=${encodeURIComponent(query)}`
      );
      return response;
    } catch (error) {
      console.error("Failed to search faculty:", error);
      throw error;
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
      console.error("Failed to fetch faculty stats:", error);
      throw error;
    }
  }
}

export default new FacultyApiService();
