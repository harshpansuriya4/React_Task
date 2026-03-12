import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Register() {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange = (e) =>{
    const {name,value} = e.target;

    setFormData({
      ...formData,
      [name]:value
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(
      (user)=> user.email === formData.email
    );

    if(userExists){
      alert("User already exists!");
      return;
    }

    users.push(formData);

    localStorage.setItem("users",JSON.stringify(users));

    alert("Registration Successful");

    navigate("/");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2>Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            className="auth-input"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            className="auth-input"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button className="auth-btn" type="submit">
            Register
          </button>

        </form>

        <p className="auth-link">
          Already have an account? <Link to="/">Login</Link>
        </p>

      </div>

    </div>
  );
}