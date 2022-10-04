import React from 'react'

import './home_page.css';
import HomeCarousel from '../../home_view/home_page/home_carousel/home_carousel';
import OurMission from '../../home_view/home_page/our_mission/our_mission';
import SecondImg from '../../home_view/home_page/second_img/second_img';
import HomeNotifications from '../../home_view/home_page/home_notifications/home_notifications';
import Testimonials from '../../home_view/home_page/testimonials/testimonials';
import Newsletter from '../../home_view/home_page/newsletter/newsletter';
import OpenAdmissions from './open_admissions/open_admissions';

const Homepage = () => {
  return (
    <>
      <HomeCarousel />
      <OpenAdmissions />
      <OurMission />
      <SecondImg />
      <HomeNotifications />
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default Homepage;