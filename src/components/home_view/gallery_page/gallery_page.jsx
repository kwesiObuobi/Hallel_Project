import React from 'react'

import './gallery_page.css'

import galleryPageImg from '../../../assets/images/website_images/gallery.jpg'
import PageImg from '../../shared/page_img/page_img'

const GalleryPage = () => {
  return (
    <>
      <PageImg img_url={galleryPageImg} title="Gallery" />
    </>
  )
}

export default GalleryPage