import React from 'react'
import './home_carousel.css';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from "swiper";

import { AiOutlineArrowDown } from "react-icons/ai";

import Carousel1 from '../../../../assets/images/website_images/homeCarousel1.jpg';
import Carousel2 from '../../../../assets/images/website_images/homeCarousel2.jpg';
import Carousel3 from '../../../../assets/images/website_images/homeCarousel3.jpg';
import Carousel4 from '../../../../assets/images/website_images/homeCarousel4.jpg';
import Carousel5 from '../../../../assets/images/website_images/homeCarousel5.jpg';

// import Carousel1 from "../../../../src/assets/images/website_images/homeCarousel1.jpg";
// import Carousel2 from "../../../../src/assets/images/website_images/homeCarousel2.jpg";
// import Carousel3 from "../../../../src/assets/images/website_images/homeCarousel3.jpg";
// import Carousel4 from "../../../../src/assets/images/website_images/homeCarousel4.jpg";
// import Carousel5 from "../../../../src/assets/images/website_images/homeCarousel5.jpg";

const caroData = [
  {
    img_id: 1,
    img_url: Carousel1,
    caption: "First image caption goes here. First image caption goes here. First image caption goes here. First image caption goes here. "
  },
  {
    img_id: 2,
    img_url: Carousel2,
    caption: "Second image caption goes here. Second image caption goes here. Second image caption goes here. Second image caption goes here. "
  },
  {
    img_id: 3,
    img_url: Carousel3,
    caption: "Third image caption goes here. Third image caption goes here. Third image caption goes here. Third image caption goes here. "
  },
  {
    img_id: 4,
    img_url: Carousel4,
    caption: "Fourth caption goes here. Fourth caption goes here. Fourth caption goes here. Fourth caption goes here"
  },
  {
    img_id: 5,
    img_url: Carousel5,
    caption: "Fifth caption goes here. Fifth caption goes here. Fifth caption goes here. Fifth caption goes here. "
  },
]

const HomeCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper caro__my-slider"
      >
        {
          caroData.map(({img_url, caption}, img_id) => {
            return (
              <SwiperSlide key={img_id} className="caro__swiper-slide-container">
                <div className="caro__img-box">
                  <img src={img_url} alt="Carousel1" className="caro__img" />
                </div>
                <div className="caro__overlay-img"></div>
                <div className="caro__img-caption-bg-screen"><p>{caption} </p></div>
                <div className="caro__img-caption-sm-screen"><p>{caption}</p></div>
                <div className="caro__scroll-down-pointer"><AiOutlineArrowDown /></div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </>
  )
}

export default HomeCarousel