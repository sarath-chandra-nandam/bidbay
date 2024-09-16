import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cartData from '../../assets/cart_collection';
import './CartItems.css'; // Import CSS file for styling

const CartPage = () => {
  const [countdowns, setCountdowns] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update countdown for each item in cartData
      const updatedCountdowns = cartData.map((item) => {
        const endTime = new Date(item.endTime).getTime();
        const now = new Date().getTime();
  
        if (endTime > now) {
          const distance = endTime - now;
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return { bidId: item.Bidid, countdown: `${days}d ${hours}h ${minutes}m ${seconds}s` };
        } else {
          return { bidId: item.Bidid, countdown: 'Auction started' };
        }
      });
  
      setCountdowns(updatedCountdowns);
    }, 1000);
  
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartData.map((item, index) => (
          <div className="cart-item" key={item.Bidid}>
          <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>Sponsored By: {item.sponsor}</p>
            <div className="countdown">
              <p>Ends in: {countdowns.find(countdownItem => countdownItem.bidId === item.Bidid)?.countdown}</p>
            </div>
            {new Date(item.endTime) <= new Date() ? (
              <Link to={`/bidding-meeting/${item.Bidid}`}>
                <button className="join-button">Join Auction</button>
              </Link>
            ) : (
              <p className="auction-not-started">Auction not started</p>
            )}
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default CartPage;
