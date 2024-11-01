import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Đảm bảo đã import CSS đúng cách

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Kaira</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={toggleSidebar}>
                  Cart <span className="cart-count">3</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

      {/* Sidebar Cart */}
      <div className={`cart-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <h2>Your Cart</h2>

        {/* Product List in Cart */}
        <div className="cart-item">
          <p className="cart-item-title">
          Growers cider 
            <span className="cart-item-price">$10.00</span>
          </p>
        </div>
        <div className="cart-item">
          <p className="cart-item-title">
          Fresh grapes
            <span className="cart-item-price">$20.00</span>
          </p>
        </div>
        <div className="cart-item">
          <p className="cart-item-title">
          Heinz tomato ketchup 
            <span className="cart-item-price">$15.00</span>
          </p>
        </div>

        {/* Cart Total */}
        <div className="cart-total">
          Total: $45.00
        </div>
        <Link to="/checkout" className="cart-checkout-btn">Continue to Checkout</Link>
      </div>
    </>
  );
}

export default Header;
