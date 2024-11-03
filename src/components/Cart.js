import React, { useState, useEffect, useRef } from 'react';
import './Styles/Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Growers cider', size: 'XL', color: 'blue', brand: 'Gucci', price: 10, quantity: 1, image: '/images/banner-image-1.jpg' },
    { id: 2, name: 'Fresh grapes', size: 'XL', color: 'blue', brand: 'Gucci', price: 15, quantity: 1, image: '/images/banner-image-2.jpg' },
    { id: 3, name: 'Growers cider', size: 'XL', color: 'blue', brand: 'Tissot', price: 20, quantity: 1, image: '/images/banner-image-4.jpg' },
  ]);

  const paypalRendered = useRef(false); // Khởi tạo useRef để kiểm tra đã render nút PayPal hay chưa
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    if (!paypalRendered.current) {
      paypalRendered.current = true; // Đảm bảo chỉ gọi PayPal Buttons một lần duy nhất
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: totalPrice.toFixed(2),
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert('Giao dịch đã hoàn tất bởi ' + details.payer.name.given_name);
          });
        },
        onError: (err) => {
          console.error("Lỗi PayPal:", err);
          alert('Giao dịch không thể được xử lý. Vui lòng thử lại.');
        }
      }).render('#paypal-button-container');
    }
  }, [totalPrice]);

  // Các hàm xử lý giỏ hàng...
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart-page">
      <h1>Shopping cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Size: {item.size}, Color: {item.color}</p>
                <p>Brand: {item.brand}</p>
              </div>
              <div className="item-quantity">
                <select
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                >
                  {[...Array(10).keys()].map(x => (
                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </div>
              <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
              <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <input type="text" placeholder="Coupon code" className="coupon-input" />
          <button className="apply-btn">Apply</button>
          <div className="total">
            <p>Total price: <span>USD {(totalPrice).toFixed(2)}$</span></p>
            <p>Discount: <span>USD 5.00$</span></p>
            <p><strong>Total:</strong> <span className="final-price">${(totalPrice - 5).toFixed(2)}</span></p>
          </div>
          <div className="payment-methods">
            <div id="paypal-button-container"></div>
            <img src="/images/visa.png" alt="Visa" />
            <img src="/images/mastercard.png" alt="Mastercard" />
          </div>
        </div>
      </div>
      <div className="delivery-info">Free Delivery within 1-2 weeks</div>
    </div>
  );
}

export default Cart;
