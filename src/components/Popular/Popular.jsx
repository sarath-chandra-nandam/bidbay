import React,{useEffect} from 'react';
import './Popular.css';
import bidsData from '../../assets/popular';
import { Link } from 'react-router-dom'; 
import Aos from 'aos';
import 'aos/dist/aos.css' ;
import popularlottie from '../../assets/popularlottie.json' 
import PopularMoeny from '../../assets/PopularMoney.json'
import Lottie from "lottie-react";



const PopularBids = ({ bids }) => {
  const sortedBids = bids.sort((a, b) => b.amount - a.amount);
  useEffect(()=>{
    Aos.init({duration:2000},);
  },[]); 

  return (
    <div className="popular-bids">
      <div className="popular-heading" >
            <div data-aos="zoom-out" ><h1>SEE POPULAR </h1>
            </div>
            <div className='PopularMoeny' data-aos="zoom-out"><Lottie loop={true} animationData={PopularMoeny}/></div>
        </div>
      <div className="bid-container" >
        {sortedBids.map((bid, index) => (
          <Link to={`/item/${bid.id}`} key={index}>
            <div className="bid-item" data-aos="fade-up">
              <img src={bid.imageUrl} alt={`Bid ${index + 1}`} />
              <div className="bid-details" >
                <h4><span>Amount: ${bid.amount}</span></h4>
                <p><span>Time: {bid.time}</span></p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const AuctionPage = () => {
  return (
    <div>
      
      {/* <h1>Auction Page</h1> */}
      <PopularBids bids={bidsData} />
    </div>
  );
};

export default AuctionPage;