import { useContext, useState } from "react";
import AuthContext from "./AuthContext";

function App() {
  const { user, login, logout } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    login({
      name: formData.email.split("@")[0],
      email: formData.email,
    });
    setError("");
  };

  if (user) {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", margin: "40px" }}>
        <h2>Welcome, {user.name}</h2>
        <p>Email: {user.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "40px" }}>
      <h2>User Authentication</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{ width: "220px", padding: "8px", marginTop: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            style={{ width: "220px", padding: "8px", marginTop: "6px" }}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;