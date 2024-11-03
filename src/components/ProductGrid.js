import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Styles/ProductGrid.css';
import banner1 from './images/banner-image-1.jpg';
import banner2 from './images/banner-image-2.jpg';
import banner3 from './images/banner-image-3.jpg';
import banner4 from './images/banner-image-4.jpg';
import banner5 from './images/banner-image-5.jpg';
import banner6 from './images/banner-image-6.jpg';

const products = [
  { id: 1, name: 'SOFT LEATHER JACKETS', description: 'Leather jacket', category: 'men', image: banner1, link: '/cart' },
  { id: 2, name: 'CASUAL T-SHIRTS', description: 'Casual T-Shirts', category: 'men', image: banner2, link: '/cart' },
  { id: 3, name: 'CLASSIC JEANS', description: 'Classic jeans', category: 'women', image: banner3, link: '/cart' },
  { id: 4, name: 'FORMAL SUITS', description: 'Formal suits', category: 'women', image: banner4, link: '/cart' },
  { id: 5, name: 'HOODIES & SWEATSHIRTS', description: 'Comfortable hoodies', category: 'accessories', image: banner5, link: '/cart' },
  { id: 6, name: 'ACCESSORIES', description: 'Fashion accessories', category: 'accessories', image: banner6, link: '/cart' },
];

const ProductGrid = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const searchQuery = queryParams.get('search')?.toLowerCase() || '';

    let results = products;

    if (category) {
      results = results.filter((product) => product.category === category);
    }
    
    if (searchQuery) {
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery) ||
          product.description.toLowerCase().includes(searchQuery)
      );
    }

    setFilteredProducts(results);
  }, [location.search]);
  

  return (
    <section className="product-grid">
      <div className="container">
        
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="product-item">
                  <img src={product.image} alt={product.name} className="img-fluid" />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href={product.link} className="discover-button">DISCOVER NOW</a>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
