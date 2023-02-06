import React from 'react'

const GsListItem = ({title, img_url, openModal}) => {
  return (
    <div className="gallery-section-img-item-box" onClick={openModal}>
        <img src={img_url} alt={title} className="gallery-section-img" />
        <small className="gallery-section-image-desc">{title}</small>
    </div>
  )
}

export default GsListItem
