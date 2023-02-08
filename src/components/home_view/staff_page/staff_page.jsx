import React from 'react'

import './staff_page.css'

import staffPageImg from '../../../assets/images/website_images/staff.jpg'
import PageImg from '../../shared/page_img/page_img'

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
            <div className="staff-section_group_item">
              <img src="" alt="" className="staff-section_group_item_img" />
              <p className="staff-section_group_item_p">Name Goes here long name yes</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>

            <div className="staff-section_group_item">
              <img src="" alt="" className="staff-section_group_item_img" />
              <p className="staff-section_group_item_p">Name Goes here long name yes</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>

            <div className="staff-section_group_item">
              <img src="" alt="" className="staff-section_group_item_img" />
              <p className="staff-section_group_item_p">Name Goes here long name yes</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>

            <div className="staff-section_group_item">
              <img src="" alt="" className="staff-section_group_item_img" />
              <p className="staff-section_group_item_p">Name Goes here long name yes</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>

            <div className="staff-section_group_item">
              <img src="" alt="" className="staff-section_group_item_img" />
              <p className="staff-section_group_item_p">Name Goes here long name yes</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>
          </div>
          
        </div>

      </section>

    </>
  )
}

export default StaffPage