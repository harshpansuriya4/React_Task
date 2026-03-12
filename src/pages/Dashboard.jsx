import { Link, useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/darkmode.css";
import { useEffect } from "react";

export default function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  useEffect(() => {

    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "true") {
      document.body.classList.add("dark-mode");
    }

  }, []);

  useEffect(() => {

    const expiry = localStorage.getItem("sessionExpiry");

    if (!expiry || Date.now() > expiry) {

      alert("Session expired. Please login again.");

      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("sessionExpiry");

      navigate("/");
    }

  }, []);

  const toggleDarkMode = () => {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("darkMode", isDark);
  };

  return (

    <div>

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="nav-logo">
          E-Shop Dashboard
        </div>

        <button onClick={toggleDarkMode}>
          Dark Mode
        </button>

        <div className="nav-links">

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/products">Products</Link>

          <Link to="/cart">Cart</Link>

          <Link to="/profile">Profile</Link>

          <a href="#" onClick={handleLogout}>Logout</a>

        </div>

      </nav>


      {/* DASHBOARD CONTENT */}
      <div className="dashboard-container">

        <div className="welcome-card">

          <h2>Welcome {user?.name}</h2>

          <p>This is your dashboard.</p>

        </div>

      </div>

    </div>

  );

}