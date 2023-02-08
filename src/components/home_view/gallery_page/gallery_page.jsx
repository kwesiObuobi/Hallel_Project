import React from 'react'
import './gallery_page.css'

import galleryPageImg from '../../../assets/images/website_images/gallery.jpg'
import PageImg from '../../shared/page_img/page_img'
// import GsModal from './gs_modal'
// import GsListItem from './gs_list_item'
// import { clubsAndHouses } from '../../../constants';

const GalleryPage = () => {

  // const [openModal, setOpenModal] = useState(false);
  // if(openModal === false) {
  //   document.querySelector('body').style.overflow = "auto";
  // }

  // const [getId, setGetId] = useState(99);

  return (
    <>
      <PageImg img_url={galleryPageImg} title="Gallery" />
      
      {/* <div className="gallery-section container">
        <h3 className="gallery-section-h3">Clubs and Houses</h3>
        <div className="gallery-section-images">

          {
            clubsAndHouses.map(({title, img_url, id}) => {
              return (
                <GsListItem 
                  key={id} 
                  title={title} 
                  img_url={img_url} 
                  openModal={() => {setOpenModal(!openModal); setGetId(id)}}
                />
              )
            })
          } */}

          {/* { keep this commented (uncomment everything apart from this very code)
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
          } */}
        

        {/* </div>
      </div> */}

      {/* <div className="gallery-section container">
        <h3 className="gallery-section-h3">Clubs and Houses</h3>
        <div className="gallery-section-images">
          <div className="gallery-section-img-item-box"></div>

          <div className="gallery-section-img-item-box">1</div>
          <div className="gallery-section-img-item-box">2</div>
          <div className="gallery-section-img-item-box">3</div>
        </div>
      </div> */}


      {/* <GsModal open={openModal} closeModal={() => setOpenModal(!openModal)} dataId={getId}/> */}


    </>
  )
}

export default GalleryPage