// src/components/ProductGrid.js
import React from 'react';
import './ProductGrid.css';

const products = [
  { id: 1, name: 'Product 1', image: '/images/product-item-1.jpg' },
  { id: 2, name: 'Product 2', image: '/images/product-item-2.jpg' },
  // Thêm sản phẩm khác theo yêu cầu
];

const ProductGrid = () => {
  return (
    <section className="product-grid">
      <div className="container">
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4">
              <div className="product-item">
                <img src={product.image} alt={product.name} className="img-fluid" />
                <h3>{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
