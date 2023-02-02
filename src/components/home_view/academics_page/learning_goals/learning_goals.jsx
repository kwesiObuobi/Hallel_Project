import React from 'react';
import { HiChevronDown } from "react-icons/hi";
import './learning_goals.css';

const LearningGoals = () => {
  return (
    <section className="academics__learning-goals-section container">
        <h5 className="academics__learning-goals-h5">• OUR STUDENTS HAVE •</h5>
        <h2 className="academics__learning-goals-h2">our 5 learning goals</h2>

        <div className="academics__learning-goals-list-container">
            <ol className="academics__learning-goals-list">
                <li className="academics__learning-goals-item">
                    <div className="academics__learning-goals-item-heading-row">
                        <h3 className="academics__learning-goals-item-h3">Leadership</h3>
                        {/* <button className="academics__learning-goals-item-content-toggle">+</button> */}
                        <HiChevronDown className='academics__learning-goals-item-content-toggle'/>
                    </div>
                    <ul className="academics__learning-goals-item-description-box">
                        <li classsName="academics__learning-goals-desc-box-item">A student from Hallel is proficient in leading and collaborating with others;</li>
                        <li classsName="academics__learning-goals-desc-box-item">Has good interpersonal skills;</li>
                        <li classsName="academics__learning-goals-desc-box-item">Is organized and able to plan</li>
                    </ul>
                </li>

                <li className="academics__learning-goals-item">
                    <div className="academics__learning-goals-item-heading-row">
                        <h3 className="academics__learning-goals-item-h3">Professionalism</h3>
                        <HiChevronDown className='academics__learning-goals-item-content-toggle'/>
                    </div>
                    <ul className="academics__learning-goals-item-description-box">
                        <li classsName="academics__learning-goals-desc-box-item">A student from Hallel is proficient in leading and collaborating with others;</li>
                        <li classsName="academics__learning-goals-desc-box-item">Has good interpersonal skills;</li>
                        <li classsName="academics__learning-goals-desc-box-item">Is organized and able to plan</li>
                    </ul>
                </li>

                <li className="academics__learning-goals-item">
                    <div className="academics__learning-goals-item-heading-row">
                        <h3 className="academics__learning-goals-item-h3">Ethics</h3>
                        <HiChevronDown className='academics__learning-goals-item-content-toggle'/>
                    </div>
                    <ul className="academics__learning-goals-item-description-box">
                        <li classsName="academics__learning-goals-desc-box-item">A student from Hallel is proficient in leading and collaborating with others;</li>
                        <li classsName="academics__learning-goals-desc-box-item">Has good interpersonal skills;</li>
                        <li classsName="academics__learning-goals-desc-box-item">Is organized and able to plan</li>
                    </ul>
                </li>

                <li className="academics__learning-goals-item">
                    <div className="academics__learning-goals-item-heading-row">
                        <h3 className="academics__learning-goals-item-h3">Critical Thinking</h3>
                        <HiChevronDown className='academics__learning-goals-item-content-toggle'/>
                    </div>
                    <ul className="academics__learning-goals-item-description-box">
                        <li classsName="academics__learning-goals-desc-box-item">A student from Hallel is proficient in leading and collaborating with others;</li>
                        <li classsName="academics__learning-goals-desc-box-item">Has good interpersonal skills;</li>
                        <li classsName="academics__learning-goals-desc-box-item">Is organized and able to plan</li>
                    </ul>
                </li>

                <li className="academics__learning-goals-item">
                    <div className="academics__learning-goals-item-heading-row">
                        <h3 className="academics__learning-goals-item-h3">Communication and Teamwork</h3>
                        <HiChevronDown className='academics__learning-goals-item-content-toggle'/>
                    </div>
                    <ul className="academics__learning-goals-item-description-box">
                        <li classsName="academics__learning-goals-desc-box-item">A student from Hallel is proficient in leading and collaborating with others;</li>
                        <li classsName="academics__learning-goals-desc-box-item">Has good interpersonal skills;</li>
                        <li classsName="academics__learning-goals-desc-box-item">Is organized and able to plan</li>
                    </ul>
                </li>

            </ol>
        </div>
        

    </section>
  )
}

export default LearningGoals