import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

function Home() {
  return <h1>Home Page</h1>;
}

function Products() {
  return <h1>Products Page</h1>;
}

function Services() {
  return <h1>Services Page</h1>;
}

function Pro() {
  return (
    <BrowserRouter>

      {/* Navigation */}
      <nav className="navbar">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Services
        </NavLink>

      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>

    </BrowserRouter>
  );
}

export default Pro;