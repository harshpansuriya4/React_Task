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
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-semibold text-gray-800 dark:text-white tracking-wide">E-Shop Dashboard</h1>
        <div className="flex items-center gap-5 text-sm font-medium">

          <button onClick={toggleDarkMode} className="px-3 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white transition">Theme</button>

          <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Dashboard</Link>
          <Link to="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Products</Link>
          <Link to="/cart" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Cart</Link>
          <Link to="/profile" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Profile</Link>
          
          <button onClick={logout} className="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white transition">Logout</button>
        </div>
      </div>
    </nav>
  );
}