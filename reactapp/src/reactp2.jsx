import React, { useRef } from "react";

function LoginForm() {

  // Create refs
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // Login function
  const handleLogin = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>

      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>

        {/* Username */}
        <div>
          <label>Username:</label>

          <input
            type="text"
            ref={usernameRef}
            placeholder="Enter username"
          />
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Password:</label>

          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter password"
          />
        </div>

        <br />

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default LoginForm;