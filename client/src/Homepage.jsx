import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import logo from "./img/logo.png";

function Homepage() {
  return (
    <div>
      <section class="colored-section-1" id="title">
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
      </section>
      <img src={logo} className="logo" />
      <section class="colored-section-2" id="title">
        {/* <h3 className="title">Welcome to Our Website</h3> */}
      </section>
      <button className="btn">Start Browsing</button>
    </div>
  );
}

export default Homepage;
