import React, {useState} from 'react'
import './gallery_page.css'

import galleryPageImg from '../../../assets/images/website_images/gallery.jpg'
import PageImg from '../../shared/page_img/page_img'
import GsModal from './gs_modal'
import GsListItem from './gs_list_item'

const GalleryPage = () => {

  const [openModal, setOpenModal] = useState(false);
  if(openModal == false) {
    document.querySelector('body').style.overflow = "auto";
  }

  const clubsAndHouses = [
    {
      id: 1,
      img_url: "https://www.cru.org/communities/hs/wp-content/uploads/sites/18/2020/03/Gathering-Students.jpg",
      title: "Inkoomsah Hall"
    },
    {
      id: 2,
      img_url: "https://knowledgeworks.org/wp-content/uploads/2016/07/Teacher-Working-300x200.jpg",
      title: "Godsaye-Simpson House"
    },
    {
      id: 3,
      img_url: "https://www.cru.org/communities/hs/wp-content/uploads/sites/18/2020/03/Gathering-Students.jpg",
      title: "Rebecca"
    },
    {
      id: 4,
      img_url: "https://knowledgeworks.org/wp-content/uploads/2016/07/Teacher-Working-300x200.jpg",
      title: "Goavek"
    },
  ]

  return (
    <>
      <PageImg img_url={galleryPageImg} title="Gallery" />
      
      <div className="gallery-section container">
        <h3 className="gallery-section-h3">Clubs and Houses</h3>
        <div className="gallery-section-images">

          {
            clubsAndHouses.map(({title, img_url}, id) => {
              return (
                <GsListItem 
                  key={id} 
                  title={title} 
                  img_url={img_url} 
                  openModal={() => setOpenModal(!openModal)} 
                />
              )
            })
          }
        
          {/* {
            clubsAndHouses.map(({title, img_url}, id) => {
              return (
                <div key={id} className="gallery-section-img-item-box">
                  <img src={img_url} alt={title} className="gallery-section-img" />
                  <small className="gallery-section-image-desc">{title}</small>
                </div>
              )
            })
          } */}

        </div>
      </div>

      <div className="gallery-section container">
        <h3 className="gallery-section-h3">Clubs and Houses</h3>
        <div className="gallery-section-images">
          <div className="gallery-section-img-item-box"></div>

          <div className="gallery-section-img-item-box">1</div>
          <div className="gallery-section-img-item-box">2</div>
          <div className="gallery-section-img-item-box">3</div>
        </div>
      </div>


      <GsModal open={openModal} closeModal={() => setOpenModal(!openModal)}/>


    </>
  )
}

export default GalleryPage