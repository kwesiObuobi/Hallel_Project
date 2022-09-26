import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

import './page_img.css'

const PageImg = ({img_url, title}) => {
  return (
    <>
        <div className="page_img-section-container">
            <div className="page_img-box">
                <img src={img_url} alt="aboutUs.jpg" title={title} className="page_img-image" />
            </div>
            <div className="page_img-overlay-img" title={title}></div>
            <div className="page_img-scroll-down-pointer"><AiOutlineArrowDown /></div>
        </div>
    </>
  )
}

export default PageImg