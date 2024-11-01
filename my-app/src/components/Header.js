// Header.js
import React from 'react';
import './Header.css'; // Ensure this path is correct

const Header = () => {
    return (
        <header className="header">
            <div className="logo">KAIRA</div>
            <nav className="nav-links">
                <a href="/">HOME</a>
                <a href="/shop">SHOP</a>
                <a href="/blog">BLOG</a>
                <a href="/pages">PAGES</a>
                <a href="/contact">CONTACT</a>
            </nav>
            <div className="cart-wishlist">
               
                <a href="/wishlist">WISHLIST (0)</a>
                <a href="/cart">CART (0)</a>
                <a href="/search" className="search-icon">🔍</a> {/* Using an emoji for the search icon */}
            </div>
        </header>
    );
};

export default Header;
