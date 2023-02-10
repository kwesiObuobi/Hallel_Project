import React from 'react'

import './student_page.css'

import studentPageImg from '../../../assets/images/website_images/student.jpg'
import PageImg from '../../shared/page_img/page_img'
import { classSpotlights } from '../../../constants'

const Spotlight = ({name, imgUrl, desc, student}) => {
  return (
    <div className="home-student-spotlight">
      <h3 className="home-student-spotlight-name">{name}</h3>
      <div className="home-student-spotlight-img-box">
        <img src={imgUrl} alt={name} className="home-student-spotlight-img" />
      </div>
      <h4 className="home-student-spotlight-student">{student}</h4>
      <small className="home-student-spotlight-desc">{desc}</small>
    </div>
  )
}

const StudentPage = () => {
  return (
    <>
      <PageImg img_url={studentPageImg} title="Student" />

      <section className="home-student container">
        <h5 className="staff-section__h5">• LET'S RECOGNISE THEM •</h5>
        <h2 className="staff-section__h2">students in the spotlight</h2>


        <h3 className="home-student-spotlight-section-h3">Class honors</h3>
        <div className="home-student-spotlights">
          {
            classSpotlights.map(({id, name, imgUrl, student, desc}) => {
              return (
                <Spotlight 
                  key={id}
                  name={name}
                  imgUrl={imgUrl}
                  student={student}
                  desc={desc}
                />
              )
            })
          }
        </div>

        
      </section>
    </>
  )
}
export default StudentPage