import React from 'react'

import './entry_req.css';

import kg from '../../../../assets/images/website_images/admissions/kg.jpg';
import primary1 from '../../../../assets/images/website_images/admissions/primary1.jpg';
import primary4 from '../../../../assets/images/website_images/admissions/primary4.jpg';
import jhs from '../../../../assets/images/website_images/admissions/jhs.jpg';


const EntryRequirements = () => {
  return (
    <section className="container entry-req-section">
        <h5 className="entry-req-h5">• GETTING ENROLLED •</h5>
        <h2 className="entry-req-h2">entry requirements</h2>

        <div className="entry-req-item">
            <h3 className="entry-req-item-h3">KG 1 - KG 2</h3>
            <div className="entry-req-item-grid">
                <div className="entry-req-item-img-box">
                    <img src={kg} alt="" className="entry-req-item-img" />
                </div>
                <ul className="entry-req-item-ul">
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                    <li className="entry-req-item-li">For KG 2 students, Nulla at volutpat diam ut venenatis tellus in metus. </li>
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                </ul>
            </div>
        </div>  

        <div className="entry-req-item">
            <h3 className="entry-req-item-h3">PRIMARY 1-3</h3>
            <div className="entry-req-item-grid">
                <div className="entry-req-item-img-box">
                    <img src={primary1} alt="" className="entry-req-item-img" />
                </div>
                <ul className="entry-req-item-ul">
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                    <li className="entry-req-item-li">For KG 2 students, Nulla at volutpat diam ut venenatis tellus in metus. </li>
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                </ul>
            </div>
        </div>

        <div className="entry-req-item">
            <h3 className="entry-req-item-h3">PRIMARY 4-6</h3>
            <div className="entry-req-item-grid">
                <div className="entry-req-item-img-box">
                    <img src={primary4} alt="" className="entry-req-item-img" />
                </div>
                <ul className="entry-req-item-ul">
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                    <li className="entry-req-item-li">For KG 2 students, Nulla at volutpat diam ut venenatis tellus in metus. </li>
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                </ul>
            </div>
        </div>

        <div className="entry-req-item">
            <h3 className="entry-req-item-h3">JHS 1-3</h3>
            <div className="entry-req-item-grid">
                <div className="entry-req-item-img-box">
                    <img src={jhs} alt="" className="entry-req-item-img" />
                </div>
                <ul className="entry-req-item-ul">
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                    <li className="entry-req-item-li">For KG 2 students, Nulla at volutpat diam ut venenatis tellus in metus. </li>
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                    <li className="entry-req-item-li">Children who will be four years old by September in the year of admission are eligible to apply to KG 1</li>
                </ul>
            </div>
        </div>

    </section>
  )
}

export default EntryRequirements