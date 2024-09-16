import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import BidList from './BidList';
import AuctionPage from './AuctionPage';
import auctionData from '../../assets/AuctionData';

const MeetingPage = () => {
  const [selectedBidItemId, setSelectedBidItemId] = useState(null);

  return (
    <div className="meeting-page">
      <div className="sidebar">
        <h2>Bid Items</h2>
        <ul>
          {auctionData.map(bid => (
            <li key={bid.id}>
              <Link to={`/meeting/${bid.id}`} onClick={() => setSelectedBidItemId(bid.id)}>
                {bid.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <Switch>
          <Route exact path="/meeting">
            <h2>Select a Bid Item</h2>
          </Route>
          <Route path="/meeting/:id">
            <AuctionPage selectedBidItemId={selectedBidItemId} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MeetingPage;
