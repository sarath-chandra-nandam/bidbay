import React, { useEffect } from 'react'
import './Hero.css';
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
import logo_no_background from '../../assets/logo-no-background.png'
import Hero_logo from '../../assets/Hero_logo.png'
import Aos from 'aos';
import 'aos/dist/aos.css' ;
import Lottie from "lottie-react";
import HeroLottie from '../../assets/HeroLottie.json'

const Hero = () => {
  useEffect(()=>{
    Aos.init({duration:2000},);
  },[]);
  return (
    <div className='hero'>
      <div className="hero-left" data-aos="fade-right">
      <h2>Explore World</h2>
      <div>
        <div className="hero-hand-icon" >
            <p>Find Anything</p>
            <img src={hand_icon} alt=''></img>
        </div>
        <p>What You Need</p>
        <p>BIDBAY With You</p>
        </div>
        <div className="hero-latest-btn" data-aos="fade-right">
            <div>See What's New</div>
            <img src={arrow_icon} alt=''/>
        </div>

      </div>
      <div className="hero-right" data-aos="fade-up">
        <div className='HeroLottie'><Lottie  animationData={HeroLottie}  /></div>

        {/* <img src={Hero_logo} alt='' width={500} height={500} /> */}
      </div>


    </div>
  )
}

export default Hero
