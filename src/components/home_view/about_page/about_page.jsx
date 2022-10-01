import React from 'react'

import './about_page.css'

import aboutPageImg from '../../../assets/images/website_images/aboutUs.jpg'
import PageImg from '../../shared/page_img/page_img'
import History from './history/history'
import MissionVisionValues from './mission_vision_values/mission_vision_values'
import OurCrest from './our_crest/our_crest'

const AboutPage = () => {
  return (
    <>
      <PageImg img_url={aboutPageImg} title="About Us" />
      <History />
      <MissionVisionValues />
      <OurCrest />
    </>
  )
}

export default AboutPage