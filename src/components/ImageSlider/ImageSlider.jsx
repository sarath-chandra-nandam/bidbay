import sliderimage_1 from '../../assets/product_25.png';
import sliderimage_2 from '../../assets/product_26.png';
import sliderimage_3 from '../../assets/product_27.png';
import sliderimage_4 from '../../assets/product_28.png';
import sliderimage_5 from '../../assets/product_29.png';
import sliderimage_6 from '../../assets/product_30.png';
import sliderimage_7 from '../../assets/product_31.png';
import sliderimage_8 from '../../assets/product_32.png';
import sliderimage_9 from '../../assets/product_33.png';


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageSlider = () => {
  return (
    <div>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={sliderimage_1} alt=''/> </SwiperSlide>
      <SwiperSlide><img src={sliderimage_2} alt=''/> </SwiperSlide>
      <SwiperSlide><img src={sliderimage_3} alt=''/></SwiperSlide>
      <SwiperSlide><img src={sliderimage_4} alt=''/></SwiperSlide>
      <SwiperSlide><img src={sliderimage_5} alt=''/> </SwiperSlide>
      <SwiperSlide><img src={sliderimage_6} alt=''/> </SwiperSlide>
      <SwiperSlide><img src={sliderimage_7} alt=''/></SwiperSlide>
      <SwiperSlide><img src={sliderimage_8} alt=''/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default ImageSlider


