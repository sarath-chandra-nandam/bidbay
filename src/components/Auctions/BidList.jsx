import React from 'react';
import BidItem from './BidItem';
import './BidList.css'
const BidList = ({ bids }) => {
  return (
    <div className="bid-container2">
      {bids.map((bid) => (
        <BidItem
          key={bid.Bidid}
          Bidid={bid.Bidid}
          name={bid.name}
          endTime={bid.endTime}
          imageUrl={bid.imageUrl} // Add imageUrl property
        />
      ))}
    </div>
  );
};

export default BidList;
