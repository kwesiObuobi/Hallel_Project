import React from 'react'

import './entry_req.css';

import lion from '../../../../assets/images/website_images/crest/lion.jpg';

const EntryRequirements = () => {
  return (
    <section className="container entry_req-section">
        <h5 className="entry-req-h5">• GETTING ENROLLED •</h5>
        <h2 className="entry-req-h2">entry requirements</h2>

        <div className="entry-req-item">
            <h3 className="entry-req-item-h3">KG1 - KG2</h3>
            <div className="entry-req-item-grid">
                <div className="entry-req-item-img-box">
                    <img src={lion} alt="" className="entry-req-item-img" />
                </div>
                <ul className="entry-req-item-ul">
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                    <li className="entry-req-item-li">For KG 2 students, <li>Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li></li>
                </ul>
            </div>
        </div>

    </section>
  )
}

export default EntryRequirements