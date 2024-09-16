

import React from 'react';
import { BrowserRouter,  Routes,Route, Link } from 'react-router-dom';
import BidList from './BidList';
import AuctionPage2 from './AuctionPage2';
import './Auctions.css'
import product_1 from '../../assets/product_1.png'
import auctionData from '../../assets/AuctionData';

const DetailAuctions = () => {



  return (
   <>
      <div className="app">
      <AuctionPage2 />
        
         
      </div>
      <div className="navigation">
        {/* <Link to="/">Home</Link> */}
      </div>
      </>
  );
};

export default DetailAuctions;


