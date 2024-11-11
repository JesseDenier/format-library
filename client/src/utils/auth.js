// Imports jwt-decode
import { jwtDecode } from "jwt-decode";

class AuthService {
  // Decodes the user profile from the JWT token
  getProfile() {
    return jwtDecode(this.getToken());
  }

  // Checks if there is a saved token and it's still valid
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Checks if the JWT token is expired
  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  // Retrieves the user token from localStorage
  getToken() {
    return localStorage.getItem("id_token");
  }

  // Saves user token to localStorage
  login(idToken) {
    localStorage.setItem("id_token", idToken);
  }

  // Clear user token and profile data from localStorage and redirects to home page
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
