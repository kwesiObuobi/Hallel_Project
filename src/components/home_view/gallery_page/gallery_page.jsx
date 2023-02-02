import React from 'react'

import './gallery_page.css'

import galleryPageImg from '../../../assets/images/website_images/gallery.jpg'
import PageImg from '../../shared/page_img/page_img'

const GalleryPage = () => {
  return (
    <>
      <PageImg img_url={galleryPageImg} title="Gallery" />
      
      <div className="gallery-section container">
        <h3 className="gallery-section-h3">Clubs and Houses</h3>
        <div className="gallery-section-images">
          {/* <img src="" alt="" className="gallery-section-image" /> */}
          <div className="gallery-section-img-item-box"></div>

          <div className="gallery-section-img-item-box">1</div>
          <div className="gallery-section-img-item-box">2</div>
          <div className="gallery-section-img-item-box">3</div>
          <div className="gallery-section-img-item-box">4</div>

          <div className="gallery-section-img-item-box">5</div>
          <div className="gallery-section-img-item-box">6</div>
          <div className="gallery-section-img-item-box">7</div>
          <div className="gallery-section-img-item-box">8</div>
          <div className="gallery-section-img-item-box">9</div>
          <div className="gallery-section-img-item-box">10</div>
          <div className="gallery-section-img-item-box">11</div>
          <div className="gallery-section-img-item-box">12</div>
          <div className="gallery-section-img-item-box">13</div>
          <div className="gallery-section-img-item-box">14</div>
        </div>
      </div>
    </>
  )
}

export default GalleryPage