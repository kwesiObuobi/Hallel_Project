import React from 'react'

import './our_crest.css';

import eagle from '../../../../assets/images/website_images/crest/eagle.jpg';


const CrestItem = () => {
  return (
    <div className="crest-item">
      <h3 className="crest-item-h3">The Eagle</h3>
      <div className="crest-img-box">
        <img src={eagle} alt="eagle" className="crest-img" />
      </div>
      <p className="crest-item-p">
        Ac felis donec et odio pellentesque diam volutpat commodo sed. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Fermentum leo vel orci porta non pulvinar neque. Tincidunt eget nullam non nisi est sit amet facilisis magna. Pulvinar neque laoreet suspendisse interdum consectetur. Consequat ac felis donec et. 
      </p>
    </div>
  )
}


const OurCrest = () => {
  return (
    <section className="container crest-section">
      <h5 className="crest-h5"> • WHAT OUR SYMBOLS REPRESENT • </h5>
      <h2 className="crest-h2">our crest</h2>

      <p className="crest-section-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. <br /> <br /> Sit amet cursus sit amet dictum sit amet. Mi proin sed libero enim sed faucibus turpis in. Sed viverra ipsum nunc aliquet bibendum. Quam pellentesque nec nam aliquam sem et tortor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Sollicitudin tempor id eu nisl nunc mi ipsum.</p>
      
      <CrestItem />
      <CrestItem />

    </section>
  )
}

export default OurCrest