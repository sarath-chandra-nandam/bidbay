import React from 'react'
import Hero from '../Hero/Hero'
import AuctionPage from '../Popular/Popular'
import Banner from '../Banner/Banner'
import ImageSlider from '../ImageSlider/ImageSlider'
import Reviews from '../Reviews/Reviews'
import ReviewsSecond from '../Reviews2/Reviews2'
import HeroSecond from '../HeroSecond/HeroSecond'




const Home = () => {
  return (
    <div>
      <Hero />
      <HeroSecond/>
      <AuctionPage/>
      <Banner/>
      {/* <Reviews/> */}
      <ReviewsSecond />
    
  
    </div>
  )
}

export default Home
