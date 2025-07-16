import apiService from "./apiService";
import { departments as dummyDepartments } from "./dummyData";

class DepartmentApiService {
  // Get all departments
  async getAllDepartments() {
    try {
      // Try to fetch from backend first
      const response = await apiService.get("/departments");
      return response;
    } catch (error) {
      console.warn("Backend not available, using dummy data:", error.message);
      // Fallback to dummy data if backend is not available
      return dummyDepartments;
    }
  }

  // Get a single department by ID
  async getDepartmentById(id) {
    try {
      // Try to fetch from backend first
      const response = await apiService.get(`/departments/${id}`);
      return response;
    } catch (error) {
      console.warn("Backend not available, using dummy data:", error.message);
      // Fallback to dummy data if backend is not available
      const department = dummyDepartments.find(
        (dept) => dept.id === parseInt(id)
      );
      if (!department) {
        throw new Error("Department not found");
      }
      return department;
    }
  }

  // Create a new department (admin only)
  async createDepartment(departmentData) {
    try {
      const response = await apiService.post("/departments", departmentData);
      return response;
    } catch (error) {
      console.error("Failed to create department:", error);
      throw error;
    }
  }

  // Update a department (admin only)
  async updateDepartment(id, departmentData) {
    try {
      const response = await apiService.put(
        `/departments/${id}`,
        departmentData
      );
      return response;
    } catch (error) {
      console.error("Failed to update department:", error);
      throw error;
    }
  }

  // Delete a department (admin only)
  async deleteDepartment(id) {
    try {
      const response = await apiService.delete(`/departments/${id}`);
      return response;
    } catch (error) {
      console.error("Failed to delete department:", error);
      throw error;
    }
  }

  // Get department statistics
  async getDepartmentStats() {
    try {
      const response = await apiService.get("/departments/stats");
      return response;
    } catch (error) {
      console.warn("Backend not available, using dummy stats:", error.message);
      // Fallback to dummy stats
      return {
        totalDepartments: dummyDepartments.length,
        totalFaculty: dummyDepartments.reduce(
          (sum, dept) => sum + dept.facultyCount,
          0
        ),
        averageFacultyPerDepartment: Math.round(
          dummyDepartments.reduce((sum, dept) => sum + dept.facultyCount, 0) /
            dummyDepartments.length
        )
      };
    }
  }
}

export default new DepartmentApiService();
