import React from 'react'

import './staff_page.css'

import staffPageImg from '../../../assets/images/website_images/staff.jpg'
import PageImg from '../../shared/page_img/page_img'

const StaffSectionGroupItem = ({name, imgUrl, id, role}) => {
  return (
    <div className="staff-section_group_item">
      <img src="https://pbs.twimg.com/profile_images/830779586661203968/TeCxvWqF_400x400.jpg" alt="Mr Samuel Hagan" className="staff-section_group_item_img" />
      <p className="staff-section_group_item_p">Name Goes Here</p>
      <small className="staff-section_group_item_role">Head Mistress</small>
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
            <div className="staff-section_group_item">
              <img src="https://pbs.twimg.com/profile_images/830779586661203968/TeCxvWqF_400x400.jpg" alt="Mr Samuel Hagan" className="staff-section_group_item_img" />
              <p className="staff-section_group_item_p">Name Goes Here</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>

            <div className="staff-section_group_item">
              <img src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7" alt="Madam Patience Lamptey" className="staff-section_group_item_img"/>
              <p className="staff-section_group_item_p">Name Goes Here</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>

            <div className="staff-section_group_item">
              <img src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7" alt="Madam Patience Lamptey" className="staff-section_group_item_img"/>
              <p className="staff-section_group_item_p">Name Goes Here</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>

            <div className="staff-section_group_item">
              <img src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7" alt="Madam Patience Lamptey" className="staff-section_group_item_img"/>
              <p className="staff-section_group_item_p">Name Goes Here</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>

            <div className="staff-section_group_item">
              <img src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7" alt="Madam Patience Lamptey" className="staff-section_group_item_img"/>
              <p className="staff-section_group_item_p">Name Goes Here</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>

            <div className="staff-section_group_item">
              <img src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7" alt="Madam Patience Lamptey" className="staff-section_group_item_img"/>
              <p className="staff-section_group_item_p">Name Goes Here</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>

            <div className="staff-section_group_item">
              <img src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7" alt="Madam Patience Lamptey" className="staff-section_group_item_img"/>
              <p className="staff-section_group_item_p">Name Goes Gere</p>
              <small className="staff-section_group_item_role">Head Mistress</small>
            </div>

          </div>
          
        </div>

      </section>

    </>
  )
}

export default StaffPage