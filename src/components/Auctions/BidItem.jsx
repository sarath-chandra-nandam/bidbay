import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BidItem.css'

const BidItem = ({ Bidid, name, endTime, imageUrl }) => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const endTimeMillis = new Date(endTime).getTime();
      const distance = endTimeMillis - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining('Expired');
      } else {
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="c">
    <div className="sell-bid-item">
      <img src={imageUrl} alt={name} />
      <div className="sell-bid-details">
        <h3>{name}</h3>
        <p>Ends in: {timeRemaining}</p>
        <a href={`/DetialAuctions/${Bidid}`}>Join Auction</a>
      </div>
    </div>
    </div>
  );
};

export default BidItem;
