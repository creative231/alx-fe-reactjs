import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation check
    if (!formData.username || !formData.email || !formData.password) {
      setMessage("All fields are required!");
      return;
    }

    // Mock API simulation
    setMessage("Submitting...");
    setTimeout(() => {
      setMessage("Registration successful!");
    }, 1500);
  };

  return (
    <div>
      <h2>Registration Form (Controlled Components)</h2>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}       
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;
