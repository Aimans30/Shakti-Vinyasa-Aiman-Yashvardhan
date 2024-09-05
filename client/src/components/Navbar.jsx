import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have Navbar-specific CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Shakti Vinyasa</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/signup" className="signup-btn">Sign Up</Link> {/* Signup button */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
