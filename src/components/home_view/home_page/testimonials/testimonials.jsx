import React from 'react'
import './testimonials.css'; 


import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../../styles.css";

// import required modules
import { Pagination } from "swiper";


import testi1 from '../../../../assets/images/uploads/testimonials/parent1.jpg';
import testi2 from '../../../../assets/images/uploads/testimonials/student2.jpg';
import testi3 from '../../../../assets/images/uploads/testimonials/teacher3.jpg';
import testi4 from '../../../../assets/images/uploads/testimonials/parent1.jpg';
import testi5 from '../../../../assets/images/uploads/testimonials/student2.jpg';
import testi6 from '../../../../assets/images/uploads/testimonials/teacher3.jpg';
import testi7 from '../../../../assets/images/uploads/testimonials/parent1.jpg';
import testi8 from '../../../../assets/images/uploads/testimonials/student2.jpg';
import testi9 from '../../../../assets/images/uploads/testimonials/teacher3.jpg';



const testimonials = [
  {
    id: 1,
    message: "Hallel Produces excellence in every way. Hallel Produces excellence in every way. Hallel Produces excellence in every way. Hallel Produces excellence in every way. Hallel Produces excellence in every way. Hallel Produces excellence in every way. Hallel Produces excellence in every way.",
    lastName: "1",
    otherNames: "Person",
    authorTitle: "Parent",
    imgUrl: testi1
  },
  {
      id: 2,
      message: "Yes they do produce excellence in every way. Yes they do produce excellence in every way. Yes they do produce excellence in every way. Yes they do produce excellence in every way. Yes they do produce excellence in every way. Yes they do produce excellence in every way. Yes they do produce excellence in every way.",
      lastName: "Chan",
      otherNames: "Jackie",
      authorTitle: "Student",
      imgUrl: testi2
    },
    {
      id: 3,
      message: "It's a reputable school in the country. It's a reputable school in the country. It's a reputable school in the country. It's a reputable school in the country. It's a reputable school in the country. It's a reputable school in the country. It's a reputable school in the country. It's a reputable school in the country.",
      lastName: "Sheen",
      otherNames: "Charlie",
      authorTitle: "Teacher",
      imgUrl: testi3
    },
    {
      id: 4,
      message: "I've loved experiencing this school. It's the best. I've loved experiencing this school. It's the best. I've loved experiencing this school. It's the best.",
      lastName: "Doe",
      otherNames: "Jane",
      authorTitle: "Student",
      imgUrl: testi4
    },
    {
      id: 5,
      message: "I've also loved the school so much",
      lastName: "Doe",
      otherNames: "John",
      authorTitle: "Teacher",
      imgUrl: testi5
    },
    {
      id: 6,
      message: "It's deep in nourishment. It's deep in nourishment. It's deep in nourishment. It's deep in nourishment.",
      lastName: "String",
      otherNames: "Deep",
      authorTitle: "Parent",
      imgUrl: testi6
    },
    {
      id: 7,
      message: "This school wins big on all levels",
      lastName: "Punch",
      otherNames: "Big",
      authorTitle: "Teacher",
      imgUrl: testi7
    },
    {
      id: 8,
      message: "My positive transformation has been really fast. My positive transformation has been really fast. My positive transformation has been really fast.",
      lastName: "Fast",
      otherNames: "Run",
      authorTitle: "Student",
      imgUrl: testi8
    },
    {
      id: 9,
      message: "Make the right decision. Bring your child to this awesome school",
      lastName: "Stupid",
      otherNames: "Never",
      authorTitle: "Parent",
      imgUrl: testi9
    },
]

const Testimonials = () => {
  return (
    <div className="home__testimonial-outer-box">
      <section className="home__testimonials-section">

        <h5 className="home__testimonial-h5"> • WHAT PEOPLE SAY • </h5>
        <h2 className="home__testimonial-h2">testimonials</h2>


        <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container"
      >
        {
          testimonials.map(({message, imgUrl, otherNames, lastName, authorTitle}, id) => {
            return (
              <SwiperSlide key={id} className="home__testimonial-slide-container">
                <div className="home__testimonial-item">
                  <div className="home__testimonial-msg">{message}</div>
                  <div className="home__tesimonial-avatar-img"><img className="home__item-img" src={imgUrl} alt="" /></div>
                  <div className="home__testimonial-author-name">{otherNames + " " + lastName}</div>
                  <div className="home__testimonial-author-title">{authorTitle}</div>
                </div>

              </SwiperSlide>
            )
          })
        }


        </Swiper>















      </section>
    </div>
  )
}

export default Testimonials