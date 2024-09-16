import React ,{ useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css' ;
import "./HeroSecond.css";

import imgGirl from "../../assets/logo-color.png";
import imgBoy from "../../assets/auction.png";
import arrow from "../../assets/arrow.png";

function HeroSecond() {
 
  useEffect(()=>{
    Aos.init({duration:2000},);
  },[]);
 

  return (
    <div className="hero-second" >
      <div className="hero-second-container">
        <div className="hero-second-inner">
          <div className="hero-second-content">
            <div className="hero-second-content-inner">
              <h1>
                <div className="hero-second-content-line">
                  <div className="hero-second-content-line-inner"  data-aos="fade-up">Experience the </div>
                </div>
                <div className="hero-second-content-line">
                  <div className="hero-second-content-line-inner"  data-aos="fade-up">thrill of bidding</div>
                </div>
                <div className="hero-second-content-line">
                  <div className="hero-second-content-line-inner"  data-aos="fade-up">Just Here</div>
                </div>
              </h1>
              <p>
              Unlock exclusive deals and secure your desired items with just a click on our dynamic online bidding platform
              </p>
              <div className="btn-row"  data-aos="fade-up">
                <button className="explore-button" >
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-second-images">
            <div  className="hero-second-images-inner">
              <div className="hero-second-image girl"  data-aos="fade-right" >
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-second-image boy"  data-aos="fade-right">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSecond;
