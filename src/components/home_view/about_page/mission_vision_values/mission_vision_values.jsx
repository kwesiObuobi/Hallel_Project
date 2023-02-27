import React from 'react'

import './mission_vision_values.css';

const MissionVisionValues = () => {
  return (
    
    <section className="mvv-container">
      <h5 className="mvv-h5"> • WHERE WE'RE HEADED • </h5>
      <h2 className="mvv-h2">mission | vision | values</h2>

      <div className="container mvv-sub-heading">
        <h3 className="mvv-sub-heading-h3">Our Mission</h3>
        <p className="mvv-sub-heading-p">To provide high quality eduacation in an exciting, innovative environment that will
       enhance learning with the concerns for the child's intellectual, spiritual, social and emotional development at heart.</p>
      </div>

      <div className="container mvv-sub-heading">
        <h3 className="mvv-sub-heading-h3">Our Vision</h3>
        <p className="mvv-sub-heading-p">To inspire and equip children with skills to build values for a solid foundation that will enable them reach their divine 
        potential. This will be accomplished through personal enhancement of children from an early age through the exposure they will have whilst in our custody.</p>
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