import React from 'react'
import { Link } from 'react-router-dom';

import './footer.css';

import fbImg from '../../../assets/images/website_images/social_media/facebook.jpg';
import instaImg from '../../../assets/images/website_images/social_media/instagram.jpg';
import linkedInImg from '../../../assets/images/website_images/social_media/linkedin.jpg';
import twitterImg from '../../../assets/images/website_images/social_media/twitter.jpg';
import ytdImg from '../../../assets/images/website_images/social_media/youtube.jpg';
import schoolLogo from '../../../assets/images/school_logo.jpg';


const scrollToTop = () => {
  document.body.scrollTop = 0; //for Safari
  document.documentElement.scrollTop = 0; // for chrome, firefox, IE, opera
}


const Footer = () => {
  return (
    <section className="footer-section">

      <div className="container footer-container">

        <div className="footer__quick-links-container">
          <h3 className="footer-h3">Quick Links</h3>
          <div className="footer__quick-links-grid-container">
            <div className="footer__quick-link-box">
              <h4 className="footer-h4">New Here?</h4>
              <ul className="footer-ul">
                <li className="footer-li"><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
                <li className="footer-li"><Link to="/admissions" onClick={scrollToTop}>Admissions</Link></li>
                <li className="footer-li"><Link to="/gallery" onClick={scrollToTop}>Gallery</Link></li>
              </ul>
            </div>
            <div className="footer__quick-link-box">
              <h4 className="footer-h4">School</h4>
              <ul className="footer-ul">
                <li className="footer-li"><Link to="/academics" onClick={scrollToTop}>Academics</Link></li>
                <li className="footer-li"><Link to="/student" onClick={scrollToTop}>Student</Link></li>
                <li className="footer-li"><Link to="/staff" onClick={scrollToTop}>Staff</Link></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="footer__contact-us-container">
          <h3 className="footer-h3">Contact Us</h3>
          <div className="footer__contact-us-grid-box">
            <div className="footer__contact-us-box">
              <h4 className="footer-h4">Street Address</h4>
              <p className="footer-p">Street name...<br/>Kaneshie - Accra<br/>Ghana</p>
            </div>
            <div className="footer__contact-us-box">
              <h4 className="footer-h4">Postal Address</h4>
              <p className="footer-p">P.O.Box 345 KN<br/>Kaneshie, Accra</p>
            </div>
            <div className="footer__contact-us-box">
              <h4 className="footer-h4">Phone & Email</h4>
              <p className="footer-p">(T) +233 302 100 200<br/>(T) +233 302 200 300<br/>(T) +233 302 400 500<br/>(E) info@hallel.edu.gh<br/>(E) support@hallel.edu.gh</p>
            </div>
          </div>
        </div>



        <div className="footer__logo-and-sch-name-container">
          <div className="footer-logo-box">
            <a href="/" id="logo"><img src={schoolLogo} className="footer-logo" alt=""/></a>
          </div>
          <div className="footer__sch-name-and-social-media-box">
            <div className="footer__sch-name-box">
              <h3 className="footer-h3" id="footer__hallel-school-complex">Hallel School Complex</h3>
              <aside className="footer__aside">    ...Joy Of A Solid Childhood Foundation</aside>
            </div>
            <div className="footer__social-media-box">
              <a href="https://www.facebook.com" className="footer__image-box"><img src={fbImg} alt="" /></a>
              <a href="https://www.instagram.com" className="footer__image-box"><img src={instaImg} alt="" /></a>
              <a href="https://www.linkedin.com" className="footer__image-box"><img src={linkedInImg} alt="" /></a>
              <a href="https://www.twitter.com" className="footer__image-box"><img src={twitterImg} alt="" /></a>
              <a href="https://www.youtube.com" className="footer__image-box"><img src={ytdImg} alt="" /></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer