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
          <div className="gallery-section-img-item-box">
            <img src="" alt="" className="gallery-section-img" />
            <small className="gallery-section-image-desc">Inkoomsah Hall</small>
          </div>

          <div className="gallery-section-img-item-box">1</div>
          <div className="gallery-section-img-item-box">2</div>
          <div className="gallery-section-img-item-box">3</div>
        </div>
      </div>

      <div className="gallery-section container">
        <h3 className="gallery-section-h3">Clubs and Houses</h3>
        <div className="gallery-section-images">
          {/* <img src="" alt="" className="gallery-section-image" /> */}
          <div className="gallery-section-img-item-box"></div>

          <div className="gallery-section-img-item-box">1</div>
          <div className="gallery-section-img-item-box">2</div>
          <div className="gallery-section-img-item-box">3</div>
        </div>
      </div>
    </>
  )
}

export default GalleryPage