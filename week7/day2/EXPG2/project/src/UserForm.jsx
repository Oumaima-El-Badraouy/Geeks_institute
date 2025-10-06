import React, { useState } from "react";

export default function UserForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification simple
    if (!user.firstName || !user.lastName || !user.phone || !user.email) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setUser({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    });
    setSubmitted(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Exercise 2: Display user input from a Form</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name: </label>
            <input
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Last Name: </label>
            <input
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Phone: </label>
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>✅ User Data Submitted:</h3>
          <p>
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <button onClick={handleReset}>Reset Form</button>
        </div>
      )}
    </div>
  );
}
