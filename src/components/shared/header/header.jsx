import React, { useState, useEffect, useRef } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import './header.css';
import school_logo from '../../../assets/images/school_logo.jpg';

const Header = () => {

  const navRef = useRef();
  const showMobileNav = () => {
    navRef.current.classList.toggle("header__mobile_nav");
    setAddedMobileNavClass(!addedMobileNavClass);
  }

  const [addedMobileNavClass, setAddedMobileNavClass] = useState(false);
  useEffect(() => {
    navRef.current.classList.contains("header__mobile_nav") ?
      setAddedMobileNavClass(true) :
      setAddedMobileNavClass(false);
      console.log(addedMobileNavClass);
  }, [addedMobileNavClass])
  
  return (
    <header>
      <div className="header__container">
        <div className="header__brand-row-container">
          <div className="container header__brand-row">
            <div className="header__logo-and-motto-box">
              <a href="/" id="header__logo">
                <img className="header__logo-img" src={school_logo} alt="School Logo" title="Hallel School Complex" />
              </a>
              <div className="header__school-name-and-motto-box">
                <h3 id="header__school-name">Hallel School Complex</h3>
                <aside id="header__slogan">...Joy Of A Solid Childhood Foundation!</aside>
              </div>
            </div>
            {/* <div className="btn header__how-to-apply">How To Apply</div> */}

            <button onClick={showMobileNav} className="header__nav-btn header__nav-open-btn">{<GiHamburgerMenu />}</button>

          </div>
        </div>
        <div className='header__slogan-for-mobile'>JOY OF A SOLID CHILDHOOD FOUNDATION</div>

        <nav className="header__nav" ref={navRef}>
          <div className="container header__nav-container">

            <ul className="header__nav-menu">
              { (addedMobileNavClass === true) && <li><a href="/" className="active">HOME</a></li>}
              <li><a href="/">ABOUT</a></li>
              <li><a href="/">ADMISSIONS</a></li>
              <li><a href="/">ACADEMICS</a></li>
              <li><a href="/">GALLERY</a></li>
              <li><a href="/">STAFF</a></li>
              <li><a href="/">STUDENT</a></li>
              <li><a href="/">CONTACT</a></li>

              <button className="header__nav-btn header__nav-close-btn" onClick={showMobileNav}>
                {<GrClose />}
              </button>

            </ul>
          </div>
        </nav>
      </div>
    </header>

  )
}


export default Header