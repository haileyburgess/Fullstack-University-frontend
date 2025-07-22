import apiService from "./apiService";

class AuthApiService {
  // Login user
  async login(username, password) {
    try {
      const response = await apiService.post("/users/login", {
        username,
        password
      });
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  // Register user
  async register(username, password, email) {
    try {
      const response = await apiService.post("/users/register", {
        username,
        password,
        email
      });
      return response;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  }

  // Logout user (client-side)
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  // Get current user from localStorage
  getCurrentUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  // Get token from localStorage
  getToken() {
    return localStorage.getItem("token");
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.getToken();
  }
}

export default new AuthApiService();
