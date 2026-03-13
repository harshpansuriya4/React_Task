import { useNavigate } from "react-router-dom";

const SESSION_TIME = 5 * 60 * 1000; // 5 minutes

export default function useAuth() {

  const navigate = useNavigate();

  // REGISTER USER
  const register = (formData) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(
      (user) => user.email === formData.email
    );

    if (userExists) {
      alert("User already exists!");
      return false;
    }

    users.push(formData);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");

    navigate("/");

    return true;
  };

  // LOGIN USER
  const login = (email, password) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!validUser) {
      alert("Invalid Email or Password");
      return false;
    }

    // Save logged user
    localStorage.setItem("loggedInUser", JSON.stringify(validUser));

    // Create session expiry
    const sessionExpiry = Date.now() + SESSION_TIME;
    localStorage.setItem("sessionExpiry", sessionExpiry);

    navigate("/dashboard");

    return true;
  };

  // LOGOUT USER
  const logout = () => {

    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("sessionExpiry");

    navigate("/");
  };

  // CHECK AUTHENTICATION
  const isAuthenticated = () => {

    const user = localStorage.getItem("loggedInUser");
    const expiry = localStorage.getItem("sessionExpiry");

    if (!user || !expiry) return false;

    if (Date.now() > Number(expiry)) {
      return false;
    }

    return true;
  };

  // GET CURRENT USER
  const getUser = () => {
    return JSON.parse(localStorage.getItem("loggedInUser"));
  };

  return {
    register,
    login,
    logout,
    isAuthenticated,
    getUser
  };
}