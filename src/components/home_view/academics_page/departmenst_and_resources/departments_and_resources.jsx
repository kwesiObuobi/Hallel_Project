import React from 'react'
import './departments_and_resources.css';

const DepartmentsAndResources = () => {
  return (
    <section className="departments-section">
        <h5 className="dep-section__h5">• WE'RE ORGANIZED AND STRUCTURED •</h5>
        <h2 className="dep-section__h2">departments & resources</h2>

        <div className="dep-section__dep-and-res-box container">
            <div className="dep-section__departments">
                <h3 className="dep-section__item-header">Academic Departments</h3>
                <p className="dep-section__item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <ul className="dep-section__item-list">
                    <li className="dep-section__item-list-item">Department 1</li>
                    <li className="dep-section__item-list-item">Department 2</li>
                    <li className="dep-section__item-list-item">Department 3</li>
                    <li className="dep-section__item-list-item">Department 4</li>
                </ul>
            </div>
            <div className="dep-section__departments">
                <h3 className="dep-section__item-header">Academic Resources</h3>
                <p className="dep-section__item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <ul className="dep-section__item-list">
                    <li className="dep-section__item-list-item">Academic Office</li>
                    <li className="dep-section__item-list-item">Library Services</li>
                    <li className="dep-section__item-list-item">School Policies</li>
                    <li className="dep-section__item-list-item">Academic Calendar</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default DepartmentsAndResources
