import React from 'react'

import './contact_page.css'

import contactUsPageImg from '../../../assets/images/website_images/contactUs.jpg'
import PageImg from '../../shared/page_img/page_img'

const ContactPage = () => {
  return (
    <>
      <PageImg img_url={contactUsPageImg} title="Contact Us" />
    </>
  )
}

export default ContactPage