import React from 'react'

import './home_page.css';
import HomeCarousel from '../../components/home_page/home_carousel/home_carousel';
import OurMission from '../../components/home_page/our_mission/our_mission';
import SecondImg from '../../components/home_page/second_img/second_img';
import HomeNotifications from '../../components/home_page/home_notifications/home_notifications';
import Testimonials from '../../components/home_page/testimonials/testimonials';
import Newsletter from '../../components/home_page/newsletter/newsletter';

const Homepage = () => {
  return (
    <>
      <HomeCarousel />
      <OurMission />
      <SecondImg />
      <HomeNotifications />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default Homepage;