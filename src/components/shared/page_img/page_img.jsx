import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

import './page_img.css'

import pageImg from '../../../assets/images/website_images/aboutUs.jpg';

const PageImg = () => {
  return (
    <>
        <div className="page_img-section-container">
            <div className="page_img-box">
                <img src={pageImg} alt="aboutUs.jpg" title="About Us" className="page_img-image" />
            </div>
            <div className="page_img-overlay-img"></div>
            <div className="page_img-scroll-down-pointer"><AiOutlineArrowDown /></div>
        </div>
    </>
  )
}

export default PageImg