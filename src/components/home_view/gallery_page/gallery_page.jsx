import React, {useState} from 'react'

import './gallery_page.css'

import galleryPageImg from '../../../assets/images/website_images/gallery.jpg'
import PageImg from '../../shared/page_img/page_img'
import GsModal from './gs_modal/gs_modal'

const GalleryPage = () => {

  const [openModal, setOpenModal] = useState(false);



  return (
    <>
      <PageImg img_url={galleryPageImg} title="Gallery" />
      
      <div className="gallery-section container">
        <h3 className="gallery-section-h3">Clubs and Houses</h3>
        <div className="gallery-section-images">
          <div className="gallery-section-img-item-box">
            <img src="https://www.cru.org/communities/hs/wp-content/uploads/sites/18/2020/03/Gathering-Students.jpg" alt="Inkoomsah" className="gallery-section-img" />
            <small className="gallery-section-image-desc">Inkoomsah Hall</small>
          </div>

          <div className="gallery-section-img-item-box">
            <img src="https://knowledgeworks.org/wp-content/uploads/2016/07/Teacher-Working-300x200.jpg" alt="Inkoomsah" className="gallery-section-img" />
            <small className="gallery-section-image-desc">Godsaye Simpson</small>
          </div>

          <div className="gallery-section-img-item-box">
            <img src="https://www.cru.org/communities/hs/wp-content/uploads/sites/18/2020/03/Gathering-Students.jpg" alt="Inkoomsah" className="gallery-section-img" />
            <small className="gallery-section-image-desc">Inkoomsah Hall</small>
          </div>

          <div className="gallery-section-img-item-box">
            <img src="https://knowledgeworks.org/wp-content/uploads/2016/07/Teacher-Working-300x200.jpg" alt="Inkoomsah" className="gallery-section-img" />
            <small className="gallery-section-image-desc">Godsaye Simpson</small>
          </div>
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


      <GsModal open={true}/>


    </>
  )
}

export default GalleryPage