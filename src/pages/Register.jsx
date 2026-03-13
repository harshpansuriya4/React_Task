import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Register() {

  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    register(formData);
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-lg shadow-md w-80">

        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Register
          </button>

        </form>

        <p className="text-sm mt-3 text-center">

          Already have an account?{" "}
          <Link to="/" className="text-blue-600">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}