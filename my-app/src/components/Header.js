// src/components/Header.js
import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <a href="/" className="navbar-brand">KAIRA</a>

          {/* Main navigation menu */}
          <ul className="navbar-menu">
            <li className="nav-item dropdown">
              <a href="#home" className="nav-link">HOME</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#shop" className="nav-link">SHOP</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#blog" className="nav-link">BLOG</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#pages" className="nav-link">PAGES</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">CONTACT</a>
            </li>
          </ul>

          {/* Right side icons */}
          <ul className="navbar-icons">
            <li className="nav-icon">
              <a href="#wishlist" className="nav-link">WISHLIST (0)</a>
            </li>
            <li className="nav-icon">
              <a href="#cart" className="nav-link">CART (0)</a>
            </li>
            <li className="nav-icon">
              <a href="#search" className="nav-link">
                <FaSearch />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
