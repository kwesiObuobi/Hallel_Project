import React from 'react'

import './admissions_page.css'

import admissionsPageImg from '../../../assets/images/website_images/admissions.jpg'
import PageImg from '../../shared/page_img/page_img'
import AdmissionOverview from './overview/overview'
import EntryRequirements from './entry_req/entry_req'
import HowToApply from './how_to_apply/how_to_apply'

const AdmissionsPage = () => {
  return (
    <>
      <PageImg img_url={admissionsPageImg} title="Admissions" />
      <AdmissionOverview />
      <EntryRequirements />
      <HowToApply />
    </>
  )
}

export default AdmissionsPage