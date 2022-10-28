import React from 'react'

import './academics_page.css'

import academicsPageImg from '../../../assets/images/website_images/academics.jpg'
import PageImg from '../../shared/page_img/page_img'
import LearningGoals from './learning_goals/learning_goals'

const AcademicsPage = () => {
  return (
    <>
      <PageImg img_url={academicsPageImg} title="Academics" />
      <LearningGoals />
    </>
  )
}

export default AcademicsPage