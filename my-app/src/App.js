// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductGrid from './components/ProductGrid';
import ServiceSection from './components/ServiceSection';
import ShopSection from './components/ShopSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductGrid />
      <ServiceSection />
      <ShopSection />
      <Footer />
    </div>
  );
}

export default App;
