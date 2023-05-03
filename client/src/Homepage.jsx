import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="logo-container">
        <img src="path/to/logo.png" alt="logo" />
      </div>
      <h3 className="title">Welcome to Our Website</h3>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Homepage;
