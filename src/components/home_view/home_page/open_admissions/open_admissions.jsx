import React from 'react'

import { Link } from 'react-router-dom';

import './open_admissions.css';

const OpenAdmissions = () => {
  return (
    <div className="open-admissions-box">
        <section className="open-admissions-section container">
            <p className="open-admissions-p">Admissions Open for 2023</p>
            {/* <button className="open-admissions-btn"><Link to="/admissions">Enrol Now</Link></button> */}
            <Link to="/admissions"><button className="open-admissions-btn">Enrol Now</button></Link>
        </section>
    </div>
  )
}

export default OpenAdmissions