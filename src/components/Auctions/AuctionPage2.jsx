import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AuctionPage2.css'; // Import CSS file for styling
import auctionData from '../../assets/AuctionData'; // Import your auction data
import IndividualAuctionLottie from '../../assets/IndividualAuctionlottie.json';
import Lottie from "lottie-react";
import JoinAuctionNotActive from '../../assets/JoinAuctionNotActive.json';
import JoinAuctionActive from '../../assets/JoinAuctionActive.json';

const AuctionPage = () => {
  const { Bidid } = useParams(); // Get the id parameter from the URL
  const [remainingTime, setRemainingTime] = useState(null);
  const [isJoined, setIsJoined] = useState(false);

  // Find the bid item with the matching id
  const bidItem = auctionData.find(item => item.Bidid === Bidid);

  // Function to handle joining the auction
  // Function to handle joining or leaving the auction
const handleJoinAuction = () => {
  if (!isJoined) {
    // If not joined, display join auction prompt
    setIsJoined(true);
    window.alert("Thanks for joining! Item added to your cart list.");
  } else {
    // If already joined, display leave auction prompt
    setIsJoined(false);
    window.alert("Item Removed From Your Cart List.");
  }
};


  useEffect(() => {
    if (bidItem) {
      const endTime = new Date(bidItem.endTime).getTime();
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format the remaining time
        const formattedTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Update the state with the remaining time
        setRemainingTime(formattedTime);

        // If the countdown is over, clear the interval
        if (distance < 0) {
          clearInterval(timer);
          setRemainingTime(null); // Reset remaining time if auction has ended
        }
      }, 1000);

      // Clear interval on component unmount
      return () => clearInterval(timer);
    }
  }, [bidItem]);

  // Render bid item details if found, otherwise show a message for invalid id
  return (
    <div className="individual-auction-lottie">
      <div className="auction-page-individual">
        {bidItem ? (
          <div className="bid-item-details-individual">
            <h2>{bidItem.name}</h2>
            <img src={bidItem.imageUrl} alt={bidItem.name} className="bid-item-image" />
            <p className="sponsor-text"><h4>SPONSORED BY:</h4> {bidItem.sponsor}</p>
            <p className="sponsor-text"><h4>DESCRIPTION:</h4> {bidItem.description}</p>
            {remainingTime && (
              <p className="remaining-time">Ends in: {remainingTime}</p>
            )}
            <button onClick={handleJoinAuction} className="join-button">
              {isJoined ? "Leave Auction" : "Join Auction"}
            </button>
          </div>
        ) : (
          <p className="error-message">No bid item found with ID: {Bidid}</p>
        )}
      </div>
      <div className="individual-auction-lottie-1">
        <Lottie loop={true} animationData={isJoined ? JoinAuctionActive : JoinAuctionNotActive} />
      </div>
    </div>
  );
};

export default AuctionPage;
