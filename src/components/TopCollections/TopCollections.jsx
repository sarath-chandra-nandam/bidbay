import React from 'react'
import TopCollectionsData from '../../assets/TopCollectionsData'
import './TopCollections.css'; 
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



const TopCollections = () => {
  return (
    <div className="collection-card-total">
    <h1>OUR TOP CREATERS </h1>
    <div className="bid-container2">
      {TopCollectionsData.map(item => (
        <div key={item.id} className="collection-card">
          <div className="collection-card-content">
            <div className="collection-front" style={{background:item.backgroundImage }}>
            <img src={item.imageSrc} alt="" />
              <h2>{item.name}</h2>
              <p>{item.occupation}</p>
              <button>Follow Me</button>
            </div>
            <div className="collection-back">
              <img src={item.imageSrc} alt="" />
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <div className="collection-row">
                <div className="collection-col">
                  <h2>{item.followers}</h2>
                  <p>Followers</p>
                </div>
                <div className="collection-col">
                  <h2>{item.following}</h2>
                  <p>Following</p>
                </div>
                <div className="collection-col">
                  <h2>{item.likes}</h2>
                  <p>Likes</p>
                </div>
              </div>
              <div className="collection-row">
            <button>follow</button>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <Link to="#"> <FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="#"> <FontAwesomeIcon icon={faLinkedinIn} /></Link>
          </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TopCollections;















