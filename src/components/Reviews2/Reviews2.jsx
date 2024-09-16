

import React, { useState, useEffect } from 'react';
import Swiper from 'swiper/bundle';
import './Reviews2.css';
import data from '../../assets/Reviewsseconddata'
import '@fortawesome/fontawesome-free/css/all.min.css';


function ReviewsSecond() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('data.json')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

  useEffect(() => {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 50,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="main-container">
        
    <div className="container">
    <div className="RH"><h3 >Reviews</h3></div>
      <div className="box mySwiper">
        <div className="content swiper-wrapper">
          {data.map((item, index) => (
            <div className="card swiper-slide" key={index}>
              <div className="card-content">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="name-profession">
                  <span className="name">{item.name}</span>
                  <span className="profession">{item.review}</span>
                </div>
                 <div className="rating">
                  {Array.from(Array(5).keys()).map((starIndex) => (
                    <i className={`fas fa-star ${starIndex < item.rating ? 'active' : ''}`} key={starIndex}></i>
                  ))}
                </div>

               {/* <div className="rating">
                  {Array.from(Array(5).keys()).map((starIndex) => (
                    <i
                      className={`bx ${starIndex < item.starvalue ? 'bxs-star' : 'bx-star'}`}
                      style={{ '--clr': item.ratingColor }}
                      key={starIndex}
                    ></i>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
    </div>
  );
}

export default ReviewsSecond;
