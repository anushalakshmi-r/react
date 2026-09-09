import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>This is the Contact Page</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      {/* Navigation Menu */}
      <nav>
        <NavLink to="/">Home</NavLink>{" | "}
        <NavLink to="/about">About</NavLink>{" | "}
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* Routes */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;