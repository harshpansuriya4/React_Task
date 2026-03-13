import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

export default function Navbar() {

  const { logout } = useAuth();

  const toggleDarkMode = () => {

    const html = document.documentElement;

    html.classList.toggle("dark");

    const isDark = html.classList.contains("dark");

    localStorage.setItem("darkMode", isDark);
  };

  useEffect(() => {

    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "true") {
      document.documentElement.classList.add("dark");
    }

  }, []);

  return (

    <nav className="bg-blue-600 dark:bg-gray-800 text-white px-6 py-4 shadow-md">

      <div className="flex items-center justify-between max-w-6xl mx-auto">

        <h1 className="text-xl font-bold">
          E-Shop Dashboard
        </h1>

        <div className="flex items-center gap-6">

          <button
            onClick={toggleDarkMode}
            className="bg-gray-800 text-white px-3 py-1 rounded"
          >
            Dark Mode
          </button>

          <Link className="hover:text-gray-200" to="/dashboard">
            Dashboard
          </Link>

          <Link className="hover:text-gray-200" to="/products">
            Products
          </Link>

          <Link className="hover:text-gray-200" to="/cart">
            Cart
          </Link>

          <Link className="hover:text-gray-200" to="/profile">
            Profile
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
}