import React from 'react';
import './learning_goals.css';

const LearningGoals = () => {
  return (
    <section className="academics__learning-goals-section container">
        <h5 className="academics__learning-goals-h5">• OUR STUDENTS HAVE •</h5>
        <h2 className="academics__learning-goals-h2">our 10 learning goals</h2>

        <ol className="academics__learning-goals-list">
            <li className="academics__learning-goals-item">
                <div className="academics__learning-goals-item-heading-row">
                    <h3 className="academics__learning-goals-item-h3">Leadership</h3>
                    <button className="academics__learning-goals-item-content-toggle">+</button>
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
                    <button className="academics__learning-goals-item-content-toggle">+</button>
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
                    <button className="academics__learning-goals-item-content-toggle">+</button>
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
                    <button className="academics__learning-goals-item-content-toggle">+</button>
                </div>
                <ul className="academics__learning-goals-item-description-box">
                    <li classsName="academics__learning-goals-desc-box-item">A student from Hallel is proficient in leading and collaborating with others;</li>
                    <li classsName="academics__learning-goals-desc-box-item">Has good interpersonal skills;</li>
                    <li classsName="academics__learning-goals-desc-box-item">Is organized and able to plan</li>
                </ul>
            </li>

        </ol>
        

    </section>
  )
}

export default LearningGoals