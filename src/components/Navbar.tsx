import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="navbar full-width flex-center">
    <Link to="/" className="navbar-brand">Tyler D. Teague</Link>
  </nav>
);

export default Navbar;
