import React from 'react'

import './about_page.css'

import aboutPageImg from '../../../assets/images/website_images/aboutUs.jpg'
import PageImg from '../../shared/page_img/page_img'

const AboutPage = () => {
  return (
    <PageImg img_url={aboutPageImg} title="About Us" />
  )
}

export default AboutPage