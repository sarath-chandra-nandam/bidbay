import React, { useEffect } from 'react';
import './Banner.css'; 
import SellLottie from '../../assets/SellLottie.json'
import Lottie from 'lottie-react';
import Aos from 'aos';
import BannerLottie2 from '../../assets/BannerLottie2.json'
const Banner = () => {
    useEffect(()=>{
        Aos.init({duration:2000},);
      },[]); 
    
  return (
    <div className="banner" >
      <h1>Sell Anything!</h1>
      <p>Discover amazing content and services.</p>
      <div className='BannerLottieContainer' data-aos="fade-up">
      <div className='BannerLottie'><Lottie loop={true} animationData={BannerLottie2} /></div>
      
    </div>
   
    </div>
  );
}

export default Banner;





