import React, { useEffect } from 'react'
import './Reviews.css'
import review_data_product from '../../assets/reviewdata'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import 'aos/dist/aos.css' ;
const Reviews = () => {
  useEffect(()=>{
    Aos.init({duration:2000},);
  },[]); 
  

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
   <div className='review-background'>
    <h3 >Reviews</h3>
        <div className='review-container'>
         <div className="review-container2" >
          <Slider {...settings}>
           {review_data_product.map((d)=>(
            <div className='card-container' data-aos="fade-up">
            <div className="review-image">
                <img src={d.image} alt='image'/>
            </div>
            <div className="review-content">
                <p>{d.review} </p>
                <p>{d.name} </p>
                <div className="review-button-container">
                <button>Read More...</button>
                </div>
            </div>


            </div>
           ))} 
            </Slider>
          </div>
      
        </div>
        
    </div> 
  )
}

export default Reviews
