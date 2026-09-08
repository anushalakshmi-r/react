import React, { useState } from "react";

function RegistrationForm() {

  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Submitted details
  const [submittedData, setSubmittedData] = useState(null);

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      name: name,
      email: email,
      password: password
    });
  };

  return (
    <div>

      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <br />

        <button type="submit">Submit</button>

      </form>

      {/* Display submitted details */}
      {submittedData && (
        <div>
          <h3>Entered Details</h3>

          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}

    </div>
  );
}

export default RegistrationForm;