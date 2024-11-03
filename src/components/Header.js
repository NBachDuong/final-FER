import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Header.css';
import banner1 from './images/banner-image-1.jpg';
import banner2 from './images/banner-image-2.jpg';
import banner3 from './images/banner-image-4.jpg';

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Chuyển hướng đến ProductGrid với từ khóa tìm kiếm
    navigate(`/productGrid?search=${searchQuery}`);
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
                <Link className="nav-link" to="/productGrid">SHOP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Page</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Log in</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={toggleSidebar}>
                  Cart <span className="cart-count">3</span>
                </button>
              </li>
              <li className="nav-item">
                {/* Thanh tìm kiếm */}
                <form onSubmit={handleSearch} className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="btn btn-dark">Search</button>
                </form>
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
                <img src={banner1} alt="Growers cider" className="cart-item-image" />
            </p>
          </div>


          <div className="cart-item">
              <p className="cart-item-title">
              Fresh grapes
              <span className="cart-item-price">$20.00</span>
                <img src={banner2} alt="Fresh grapes" className="cart-item-image" />
            </p>
          </div>


          <div className="cart-item">
            <p className="cart-item-title">
            Heinz tomato ketchup 
              <span className="cart-item-price">$15.00</span>
              <img src={banner3} alt="Fresh grapes" className="cart-item-image" />
            </p>
          </div>

          {/* Cart Total */}
          <div className="cart-total">
            Total: $45.00
          </div>
          <Link to="/cart" className="cart-checkout-btn">Continue to Checkout</Link>
        </div>
    </>
  );
}

export default Header;
