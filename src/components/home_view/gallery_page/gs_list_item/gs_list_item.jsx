import React from 'react'
import './gs_list_item.css'

const GsListItem = ({title, img_url}) => {
  return (
    <div className="gallery-section-img-item-box">
        <img src={img_url} alt={title} className="gallery-section-img" />
        <small className="gallery-section-image-desc">{title}</small>
    </div>
  )
}

export default GsListItem
