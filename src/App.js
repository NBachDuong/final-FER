import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import ProductGrid from './components/ProductGrid';
import Banner from './components/Banner';
import ShopSection from './components/ShopSection';
import Cart from './components/Cart';
import Login from './components/Login';
import Signin from './components/Signin'
function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productGrid" element={<ProductGrid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      
      <Footer />
    </Router>
    </>
  );
}

export default App;
