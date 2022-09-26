import React from 'react'
import './second_img.css'; 
import secImg from '../../../assets/images/website_images/homeScreenSecondImage.jpg';

const SecondImage = () => {
  return (
    <div className="secondary-home-img-container">
      <img className="sec-img" src={secImg} alt="hallel students" title="Hallel students having fun" />
    </div>
  )
}

export default SecondImage