import React from 'react'

import './academics_page.css'

import academicsPageImg from '../../../assets/images/website_images/academics.jpg'
import PageImg from '../../shared/page_img/page_img'
import LearningGoals from './learning_goals/learning_goals'
import DepartmentsAndResources from './departmenst_and_resources/departments_and_resources'
import Extracurricluar from './extracurricular/extra'

const AcademicsPage = () => {
  return (
    <>
      <PageImg img_url={academicsPageImg} title="Academics" />
      <LearningGoals />
      <DepartmentsAndResources />
      <Extracurricluar />
    </>
  )
}

export default AcademicsPage