import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import './header.css';
import school_logo from '../../../assets/images/school_logo.jpg';


const Header = () => {

  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    console.log(windowDimension.winWidth)

    return() => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

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
              <Link to="/" id="header__logo">
                <img className="header__logo-img" src={school_logo} alt="School Logo" title="Hallel School Complex" />
              </Link>
              <div className="header__school-name-and-motto-box">
                <Link to="/"><h3 id="header__school-name">Hallel School Complex</h3></Link>
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
              { (addedMobileNavClass === true && windowDimension.winWidth < 1000) && <li><Link to="/" className="active" onClick={showMobileNav}>HOME</Link></li>}
              <li><Link to="/about" className="active" onClick={showMobileNav}>ABOUT</Link></li>
              <li><Link to="/admissions" onClick={showMobileNav}>ADMISSIONS</Link></li>
              <li><Link to="/academics" onClick={showMobileNav}>ACADEMICS</Link></li>
              <li><Link to="/gallery" onClick={showMobileNav}>GALLERY</Link></li>
              <li><Link to="/staff" onClick={showMobileNav}>STAFF</Link></li>
              <li><Link to="/student" onClick={showMobileNav}>STUDENT</Link></li>
              <li><Link to="/contact" onClick={showMobileNav}>CONTACT</Link></li>

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