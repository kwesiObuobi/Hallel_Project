import React from 'react'

import './staff_page.css'

import staffPageImg from '../../../assets/images/website_images/staff.jpg'
import PageImg from '../../shared/page_img/page_img'

const StaffPage = () => {
  return (
    <>
      <PageImg img_url={staffPageImg} title="Staff" />
    </>
  )
}

export default StaffPage