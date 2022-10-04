import React from 'react'

import './admissions_page.css'

import admissionsPageImg from '../../../assets/images/website_images/admissions.jpg'
import PageImg from '../../shared/page_img/page_img'
import AdmissionOverview from './overview/overview'
import EntryRequirements from './entry_req/entry_req'

const AdmissionsPage = () => {
  return (
    <>
      <PageImg img_url={admissionsPageImg} title="Admissions" />
      <AdmissionOverview />
      <EntryRequirements />
    </>
  )
}

export default AdmissionsPage