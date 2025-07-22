import apiService from "./apiService";

class DepartmentApiService {
  // Get all departments
  async getAllDepartments() {
    try {
      const response = await apiService.get("/departments");
      return response;
    } catch (error) {
      console.error("Failed to fetch departments:", error);
      throw error;
    }
  }

  // Get a single department by ID
  async getDepartmentById(id) {
    try {
      const response = await apiService.get(`/departments/${id}`);
      return response;
    } catch (error) {
      console.error("Failed to fetch department:", error);
      throw error;
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
      console.error("Failed to fetch department stats:", error);
      throw error;
    }
  }
}

export default new DepartmentApiService();
