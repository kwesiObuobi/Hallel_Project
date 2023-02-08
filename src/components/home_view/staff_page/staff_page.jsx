import React from 'react'

import './staff_page.css'

import staffPageImg from '../../../assets/images/website_images/staff.jpg'
import PageImg from '../../shared/page_img/page_img'
import { leadership } from '../../../constants'

const StaffSectionGroupItem = ({name, imgUrl, role}) => {
  return (
    <div className="staff-section_group_item">
      <img src={imgUrl} alt={name} className="staff-section_group_item_img" />
      <p className="staff-section_group_item_p">{name}</p>
      <small className="staff-section_group_item_role">{role}</small>
    </div>
  )
}

const StaffPage = () => {
  return (
    <>
      <PageImg img_url={staffPageImg} title="Staff" />

      <section className="staff-section container">
        <h5 className="staff-section__h5">• WE MAKE THE MAGIC HAPPEN •</h5>
        <h2 className="staff-section__h2">meet our team</h2>

        <div className="staff-section_desc_box">
          <h3 className="staff-section_desc_h3">The team at hallel Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, perferendis</h3>
          <p className="staff-section_desc_p">We're driven by the idea that Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className="staff-section_group">
          <h3 className="staff-section_group_h3">Leadership</h3>
          <div className="staff-section_group_items">
            {
              leadership.map(({personName, imgUrl, role, id}) => {
                return (
                  <StaffSectionGroupItem 
                    key={id}  
                    name={personName}
                    imgUrl={imgUrl}
                    role={role}
                  />
                )
              })
            }
          </div> 
        </div>

        <div className="staff-section_group">
          <h3 className="staff-section_group_h3">Teachers</h3>
          <div className="staff-section_group_items">
            {
              leadership.map(({personName, imgUrl, role, id}) => {
                return (
                  <StaffSectionGroupItem 
                    key={id}  
                    name={personName}
                    imgUrl={imgUrl}
                    role={role}
                  />
                )
              })
            }
          </div> 
        </div>

      </section>

    </>
  )
}

export default StaffPage