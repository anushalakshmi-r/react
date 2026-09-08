import React, { useState } from "react";

function RegistrationFormm() {

  // Store input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  // Store error messages
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Regular Expressions
    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[0-9]{10}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Name validation
    if (!namePattern.test(name)) {
      newErrors.name =
        "Name should contain only letters and spaces";
    }

    // Email validation
    if (!emailPattern.test(email)) {
      newErrors.email =
        "Enter a valid email address";
    }

    // Mobile validation
    if (!mobilePattern.test(mobile)) {
      newErrors.mobile =
        "Mobile number must contain exactly 10 digits";
    }

    // Password validation
    if (!passwordPattern.test(password)) {
      newErrors.password =
        "Password must contain 8 characters, uppercase, lowercase and a number";
    }

    // Set errors
    setErrors(newErrors);

    // Submit only if there are no errors
    if (Object.keys(newErrors).length === 0) {
      alert("Registration Successful!");

      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Mobile:", mobile);
      console.log("Password:", password);
    }
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

          {errors.name && (
            <p>{errors.name}</p>
          )}
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email:</label>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          {errors.email && (
            <p>{errors.email}</p>
          )}
        </div>

        <br />

        {/* Mobile */}
        <div>
          <label>Mobile Number:</label>

          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter 10 digit mobile number"
          />

          {errors.mobile && (
            <p>{errors.mobile}</p>
          )}
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password:</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />

          {errors.password && (
            <p>{errors.password}</p>
          )}
        </div>

        <br />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default RegistrationFormm;