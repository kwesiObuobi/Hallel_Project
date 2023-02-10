import React from 'react'

import './contact_page.css'

import contactUsPageImg from '../../../assets/images/website_images/contactUs.jpg'
import PageImg from '../../shared/page_img/page_img'

const ContactPage = () => {
  return (
    <>
      <PageImg img_url={contactUsPageImg} title="Contact Us" />

      <section className="home-contact container">
        <h5 className="home-contact-h5">• WE'RE HERE FOR YOU •</h5>
        <h2 className="home-contact-h2">contact us</h2>

        <div className="home-contact-and-message-box">
          <div className="home-contact-us-box">
            <p>We would love to hear from you. Freely call for any questions or enquiries, and we'd be glad to answer them!</p>
            
            <div className="home-contact-us-inner-box">
              <div className="home-contact-us-inner-box-contact">
                <h4 className="home-contact-inner-box-header">Call Us</h4>
                <small className="home-contact-phone"> (+233) 302 100 200</small>
                <small className="home-contact-phone"> (+233) 302 200 300</small>
                <small className="home-contact-phone"> (+233) 302 300 400</small>
              </div>

              <div className="home-contact-us-inner-box-email">
                <h4 className="home-contact-inner-box-header">Email Us</h4>
                <small className="home-contact-phone">info@hallel.edu.gh</small>
                <small className="home-contact-phone">support@hallel.edu.gh</small>
              </div>

              <div className="home-contact-us-inner-box-connect">
                <h4 className="home-contact-inner-box-header">Connect With Us</h4>
                <div className="home-contact-connect-img-boxes">
                  <div className="home-contact-connect-img-box">
                    <a href="https://web.facebook.com/HallelSchoolComplex/?_rdc=1&_rdr"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/640px-Facebook_F_icon.svg.png" alt="Facebook" className="home-contact-connect-img" /></a>
                  </div>
                  <div className="home-contact-connect-img-box">
                    <a href="https://www.instagram.com"><img src="data:image/jpeg;base64,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" alt="Instagram" className="home-contact-connect-img" /></a>
                  </div>
                  <div className="home-contact-connect-img-box">
                    <a href="https://www.youtube.com/channel/UCeoYQRK-3AG3AiQRUnqr6DQ"><img src="https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj" alt="YouTube" className="home-contact-connect-img" /></a>
                  </div>
                  <div className="home-contact-connect-img-box">
                    <a href="https://www.whatsapp.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png" alt="Whatsapp" className="home-contact-connect-img" /></a>
                  </div>
                </div>
                
              </div>
            </div>

          </div>


          <div className="home-message-box">
            <h3 className="home-contact-us-message-header">Send Us a Message</h3>

            <form>
              <div className="home-contact-message-input-group">
                <label className="home-contact-message-label" for="name">Your name</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" max="255" className="home-contact-message-input" required/>
              </div>

              <div className="home-contact-message-input-group">
                <label className="home-contact-message-label" for="email">Your email</label>
                <input type="email" name="email" id="email" placeholder="Enter your Email" max="255" className="home-contact-message-input" required/>
              </div>

              <div className="home-contact-message-input-group">
                <label className="home-contact-message-label" for="subject">Subject (Optional)</label>
                <input type="text" name="subject" id="subject" placeholder="What is the subject of your message" max="255" className="home-contact-message-input" />
              </div>

              <div className="home-contact-message-input-group">
                <label className="home-contact-message-label" for="name">Message</label>
                <textarea name="message" id="message" rows="13" cols="50" className="home-contact-message-input home-message-textarea" required></textarea>
              </div>

              <input className="home-contact-message-submit-btn" type="submit" />
            </form>
            
          </div>
        </div>

      </section>
    </>
  )
}

export default ContactPage