import React from 'react'
import { clubsAndHouses } from '../../../constants';

const GsModal = ({open, closeModal, dataId}) => {
    if (open) {
      document.querySelector('body').style.overflow = "hidden"; /* set to hidden */
      // document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    const club = clubsAndHouses.find(element => element.id === dataId)
    // if (club.images) {club.images.forEach(element => console.log(element.url))}

  return (
    <>
    {open && (
        <div id='modal-container' className="gs_modal_overall_container">

          <div className="gs_modal_overlay"></div>
          <div className="gs_modal_content">
            <button className='clickTest' onClick={closeModal}>close close {dataId} {club.title}</button>
            <div className="tempDiv"></div>
          </div>

        </div>
        
    )}
    </>
  )
}

export default GsModal
