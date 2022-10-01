import React from 'react'

import './mission_vision_values.css';

const MissionVisionValues = () => {
  return (
    // mvv = mission_vision_values
    // <div className="mvv-container-outer-box">
    //   <section className="mvv-container">
    //   <h5> • WHERE WE ARE HEADED • </h5>
    //   <h2>mission | vision | values</h2>
    //   </section>
    // </div>

    
    <section className="mvv-container">
      <h5 className="mvv-h5"> • WHERE WE'RE HEADED • </h5>
      <h2 className="mvv-h2">mission | vision | values</h2>

      <div className="container mvv-sub-heading">
        <h3 className="mvv-sub-heading-h3">Our Mission</h3>
        <p className="mvv-sub-heading-p">Vulputate enim nulla aliquet porttitor lacus luctus. Mauris in aliquam sem fringilla. Urna porttitor rhoncus dolor purus.</p>
      </div>

      <div className="container mvv-sub-heading">
        <h3 className="mvv-sub-heading-h3">Our Vision</h3>
        <p className="mvv-sub-heading-p">Vulputate enim nulla aliquet porttitor lacus luctus. Mauris in aliquam sem fringilla. Urna porttitor rhoncus dolor purus.</p>
      </div>

      <div className="container mvv-sub-heading">
        <h3 className="mvv-sub-heading-h3">Core Values</h3>
        <ul className="mvv-sub-heading-ul">
          <li>Excellence</li>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Boldness</li>
          <li>Freedom</li>
          <li>Adventure</li>
        </ul>
      </div>
      

    </section>
    
    
  )
}

export default MissionVisionValues