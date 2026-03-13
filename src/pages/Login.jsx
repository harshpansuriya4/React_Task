import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    login(email, password);
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-lg shadow-md w-80">

        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="text-sm mt-3 text-center">

          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}