import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import "../styles/Register.module.css";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Check if email already exists
      const checkResponse = await fetch(`${API_URL}/users?email=${user.email}`);
      const existingUsers = await checkResponse.json();

      if (existingUsers.length > 0) {
        setError("Email already registered");
        return;
      }

      // Register user
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: user.name, email: user.email, password: user.password }),
      });

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        setError("Registration failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          {error && <p className="error">{error}</p>}
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
