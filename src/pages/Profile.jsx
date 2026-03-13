import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";

export default function Profile() {

  const { getUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {

    const storedUser = getUser();

    if (storedUser) {
      setUser(storedUser);
    }

  }, []);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSave = (e) => {

    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users = users.map((u) => {
      if (u.email === user.email) {
        return user;
      }
      return u;
    });

    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Profile Updated Successfully");
  };

  return (

    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

      <Navbar />

      <div className="flex justify-center items-center min-h-[80vh]">

        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg rounded-lg p-8 w-96">

          <h2 className="text-2xl font-bold mb-6 text-center">
            User Profile
          </h2>

          <form
            onSubmit={handleSave}
            className="flex flex-col gap-4"
          >

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 rounded bg-white dark:bg-gray-700 dark:text-white"
            />

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 rounded bg-white dark:bg-gray-700 dark:text-white"
            />

            <div className="flex gap-2">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={user.password}
                onChange={handleChange}
                className="border p-2 rounded bg-white dark:bg-gray-700 dark:text-white"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="border p-2 rounded bg-white dark:bg-gray-700 dark:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

