import React, { useState } from 'react'
import './home_notifications.css';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../../styles.css";

// import required modules
import { Pagination } from "swiper";


import ann1 from '../../../../assets/images/uploads/events-announcements/announcements/vacation.jpg';
import ann2 from '../../../../assets/images/uploads/events-announcements/announcements/holiday.jpg';
import ann3 from '../../../../assets/images/uploads/events-announcements/announcements/cleaning.jpg';
import ann4 from '../../../../assets/images/uploads/events-announcements/announcements/vacation.jpg';
import ann5 from '../../../../assets/images/uploads/events-announcements/announcements/cleaning.jpg';
import ann6 from '../../../../assets/images/uploads/events-announcements/announcements/holiday.jpg';
import ann7 from '../../../../assets/images/uploads/events-announcements/announcements/cleaning.jpg';

const HomeNotifications = () => {

  const [showAnnouncements, setShowAnnouncements] = useState(true);
  const [showEvents, setShowEvents] = useState(false);
  const [showAcademicCalendar, setShowAcademicCalendar] = useState(false);

  const displayAnnouncements = () => {
    setShowAnnouncements(true);
    setShowEvents(false);
    setShowAcademicCalendar(false);
  }

  const displayEvents = () => {
    setShowAnnouncements(false);
    setShowEvents(true);
    setShowAcademicCalendar(false);
  }

  const displayAcademicCalendar = () => {
    setShowAnnouncements(false);
    setShowEvents(false);
    setShowAcademicCalendar(true);
  }

  const announcementsData = [
    {
      id: 1,
      title: "A vivid announcement on the update of the school's vacation date. Kindly read.",
      body: "The school hereby wishes to notify  all interested parties that the vacation has been exrended to 45th December 3021. Thank you.",
      createdAt: "29 March, 2022",
      imgUrl: ann1
    },
    {
      id: 2,
      title: "Holiday",
      body: "Based on the Government's directive to disallow all public holidays, Monday, 6th March 3021 will not be a holiday for students. All students are required to report to school on time. Sanctions will be given to nkwala b)ne. Thank you.",
      createdAt: "20 March, 2022",
      imgUrl: ann2
    },
    {
      id: 3,
      title: "Cleaning Exercise",
      body: "On monday, early morning, the school will undertake a cleaning exercise in the community. All students are required to be present.",
      createdAt: "29 March, 2022",
      imgUrl: ann3
    },
    {
      id: 4,
      title: "Vacation",
      body: "The school hereby wishes to notify  all interested parties that the vacation has been exrended to 45th December 3021. Thank you.",
      createdAt: "29 March, 2022",
      imgUrl: ann4
    },
    {
      id: 5,
      title: "Holiday",
      body: "Based on the Government's directive to disallow all public holidays, Monday, 6th March 3021 will not be a holiday for students. All students are required to report to school on time. Sanctions will be given to nkwala b)ne. Thank you.",
      createdAt: "20 March, 2022",
      imgUrl: ann5
    },
    {
      id: 6,
      title: "Cleaning Exercise",
      body: "On monday, early morning, the school will undertake a cleaning exercise in the community. All students are required to be present.",
      createdAt: "29 March, 2022",
      imgUrl: ann6
    },
    {
      id: 7,
      title: "Vacation",
      body: "The school hereby wishes to notify  all interested parties that the vacation has been exrended to 45th December 3021. Thank you.",
      createdAt: "29 March, 2022",
      imgUrl: ann7
    },
  ]
  

  return (
    <section className="home__notifications">
      <h5> • DON'T MISS OUT ON • </h5>
      <h2>notifications</h2>

      <div className="container home__filter">
        <button className= {showAnnouncements ? "home__filter-btn home__announcements-btn home__active-filter-btn" : "home__filter-btn home__announcements-btn"} onClick={displayAnnouncements}>ANNOUNCEMENTS</button>
        <button className={showEvents ? "home__filter-btn home__events-btn home__active-filter-btn" : "home__filter-btn home__events-btn"} onClick={displayEvents}>EVENTS</button>
        <button className={showAcademicCalendar ? "home__filter-btn home__academic-btn home__active-filter-btn" : "home__filter-btn home__academic-nnouncements-btn"} onClick={displayAcademicCalendar}>ACADEMIC CALENDAR</button>
      </div>

      <div className="home__announcements-display-box">

        <div className="home__announcements-box-content">

        
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper container"
      >

        {
          announcementsData.map(({title, body, createdAt, imgUrl}, id) => {
            return (
              <SwiperSlide key={id} className="home__events-announcements">
                <div className="home__notification-item">
                  <div className="home__program-date">{createdAt}</div>
                  <div className="home__program-img"><img className="home__item-img" src={imgUrl} alt="" /></div>
                  <div className="home__program-title">{title}</div>
                </div>

              </SwiperSlide>
            )
          })
        }


        </Swiper>

        </div>

      </div>

    </section>
  )
}

export default HomeNotifications