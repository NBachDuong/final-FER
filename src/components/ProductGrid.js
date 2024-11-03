import React from 'react';
import './Styles/ProductGrid.css';
import banner1 from './images/banner-image-1.jpg';
import banner2 from './images/banner-image-2.jpg';
import banner3 from './images/banner-image-3.jpg';
import banner4 from './images/banner-image-4.jpg';
import banner5 from './images/banner-image-5.jpg';
import banner6 from './images/banner-image-6.jpg';

const products = [
  { 
    id: 1, 
    name: 'SOFT LEATHER JACKETS', 
    description: 'Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.',
    image: banner1, 
    link: '/cart' 
  },
  { 
    id: 2, 
    name: 'SOFT LEATHER JACKETS', 
    description: 'Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.',
    image: banner2,
    link: '/cart' 
  },
  { 
    id: 3, 
    name: 'SOFT LEATHER JACKETS', 
    description: 'Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.',
    image: banner3, 
    link: '/cart' 
  },
  { 
    id: 4, 
    name: 'SOFT LEATHER JACKETS', 
    description: 'Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.',
    image: banner4, 
    link: '/cart' 
  },
  { 
    id: 5, 
    name: 'SOFT LEATHER JACKETS', 
    description: 'Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.',
    image: banner5, 
    link: '/cart' 
  },
  { 
    id: 6, 
    name: 'SOFT LEATHER JACKETS', 
    description: 'Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.',
    image: banner6, 
    link: '/cart' 
  },
];

const ProductGrid = () => {
  // Function to create carousel items
  const createCarouselItems = () => {
    const items = [];
    for (let i = 0; i < products.length; i += 3) {
      items.push(
        <div className={`item ${i === 0 ? 'active' : ''}`} key={i}>
          <div className="row">
            {products.slice(i, i + 3).map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="product-item">
                  <img src={product.image} alt={product.name} className="img-fluid" />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href={product.link} className="discover-button">DISCOVER NOW</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return items;
  };

  return (
    <section className="product-grid">
      <div className="container">
        <div id="productCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {createCarouselItems()}
          </div>

          {/* Carousel controls */}
          <a className="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;