import React from 'react';
import './Styles/ShopSection.css'

// Array of shop items, each with an image, text, and link
const shopItems = [
    { image: './images/cat-item1.jpg', text: 'Shop for Men', link: '/shop-men' },
    { image: './images/cat-item2.jpg', text: 'Shop for Women', link: '/shop-women' },
    { image: './images/cat-item3.jpg', text: 'Shop Accessories', link: '/shop-accessories' }
];

// Function to create and render the Shop Section
function ShopSection() {
    return (
        <div className="shop-section">
            {shopItems.map(item => (
                <div className="shop-item" key={item.text}>
                    <img src={item.image} alt={item.text} onClick={() => window.location.href = item.link} />
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
}

export default ShopSection;