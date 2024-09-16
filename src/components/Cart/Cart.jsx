import React, { useState, useEffect } from 'react';
import './Cart.css'; // Import CSS file
import Lottie from "lottie-react";
import MeetingLottie from '../../assets/MeetingLottie.json';
import cartData from '../../assets/cart_collection';
import { useParams } from 'react-router-dom';
import ChatPage from '../../components/ChattingPage/ChattingPage'; // Import ChatPage component

const BiddingMeeting = () => {
  const [adminPrice, setAdminPrice] = useState(0);
  const [userBids, setUserBids] = useState([]);
  const [currentBid, setCurrentBid] = useState(0);
  const [timer, setTimer] = useState(30); // 30 seconds for demonstration
  const [meetingActive, setMeetingActive] = useState(true);
  const [winner, setWinner] = useState('');
  const [messages, setMessages] = useState([]);

  const { Bidid } = useParams(); // Extracting parameter from URL

  let timerInterval; // Define timerInterval outside useEffect

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timerInterval);
      setMeetingActive(false);
      // Find the highest bid from userBids
      const winningBid = Math.max(...userBids.map(bid => bid.amount));
      // Find the user who placed the winning bid
      const winningUser = userBids.find(bid => bid.amount === winningBid)?.user;
      setWinner(winningUser);
    }
  }, [timer]);

  useEffect(() => {
    if (meetingActive) {
      timerInterval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(timerInterval); // Cleanup on component unmount or when meeting ends
  }, [meetingActive]);

  // Find the item based on bidid parameter
  const currentItem = cartData.find(item => item.Bidid === Bidid);

  const handleBid = (bidAmount) => {
    if (bidAmount > currentBid) {
      setCurrentBid(bidAmount);
      const bidInfo = { user: 'User', amount: bidAmount };
      setUserBids(prevBids => [...prevBids, bidInfo]);

      // Add bid message to chat
      addMessage({ text: `User bid $${bidAmount}`, sender: 'System' });
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleEndMeeting = () => {
    setMeetingActive(false);
    // Find the highest bid from userBids
    const winningBid = Math.max(...userBids.map(bid => bid.amount));
    // Find the user who placed the winning bid
    const winningUser = userBids.find(bid => bid.amount === winningBid)?.user;
    setWinner(winningUser);
  };

  const addMessage = (message) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  return (
    <div className="bidding-meeting-container">
      <div className="meeting-left">
        <div className="meeting-top">
          <h1>Bidding Meeting</h1>
          {/* <div className='MeetingLottie'>
            <Lottie loop={true} animationData={MeetingLottie} />
          </div> */}
        </div>
        <div className="meeting-right">
          {currentItem ? ( // Display item details if found
            <>
              <div className="item-details">
                <h2>Item: {currentItem.name}</h2>
                <img src={currentItem.imageUrl} alt={currentItem.name} />
                <h2 className="admin-price">Admin Price: {adminPrice}</h2>
                <h2 className="current-bid">Current Bid: {currentBid}</h2>
              </div>
              {meetingActive ? (
                <>
                  <h3>Timer: {formatTime(timer)}</h3>
                  <div className="meeting-bid-info">
                    {userBids.map((bid, index) => (
                      <p key={index} className="meeting-bid-item">{bid.user} bid ${bid.amount}</p>
                    ))}
                  </div>
                  <button onClick={() => handleBid(currentBid + 10)}>Place Bid</button>
                </>
              ) : (
                <div>
                  <p>Meeting has ended!</p>
                  <p>{winner ? `${winner} has won the bid!` : 'No bids were placed.'}</p>
                </div>
              )}
              {meetingActive && timer === 0 && <div className="overlay2" onClick={handleEndMeeting}></div>}
            </>
          ) : (
            <p>Item not found!</p>
          )}
        </div>
      </div>
      <div className="chat-container">
        <ChatPage messages={messages} addMessage={addMessage} />
      </div>
    </div>
  );
};

export default BiddingMeeting;
