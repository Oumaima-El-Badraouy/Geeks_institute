import React, { useState } from "react";

export default function FormDataExample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Form data:", formData);
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Exercise 1: Use data from a Form</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h3 style={{ color: "green" }}>Form submitted successfully ✅</h3>
      )}
    </div>
  );
}
