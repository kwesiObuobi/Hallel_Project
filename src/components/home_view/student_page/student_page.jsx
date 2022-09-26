import React from 'react'

import './student_page.css'

import studentPageImg from '../../../assets/images/website_images/student.jpg'
import PageImg from '../../shared/page_img/page_img'

const StudentPage = () => {
  return (
    <>
      <PageImg img_url={studentPageImg} title="Student" />
    </>
  )
}
export default StudentPage