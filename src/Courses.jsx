import { useState } from 'react'
import './App.css'
import { courseList } from './course-data.js'

const Courses = ({ ref }) => {
    return (
        <div className="courses-section">
          <h1 ref={ref} className='section-header' >Courses</h1>
          <div className="courses-display">
            <div className="years">
              <h2>Year 1</h2>
              <ul>
                {courseList[0].map((item) => 
                    <li key={item.key}>
                        <a href={item.link} rel="noopener noreferrer" target="_blank">{item.name}</a>
                    </li>
                )}
              </ul>
            </div>
            <div className="years">
              <h2>Year 2</h2>
              <ul>
                {courseList[1].map((item) => 
                    <li key={item.key}>
                        <a href={item.link} rel="noopener noreferrer" target="_blank">{item.name}</a>
                    </li>
                )}
              </ul>
            </div>
            <div className="years">
              <h2>Year 3</h2>
              <p><b>(In Progress)</b></p>
              <ul>
                {courseList[2].map((item) => 
                    <li key={item.key}>
                        <a href={item.link} rel="noopener noreferrer" target="_blank">{item.name}</a>
                    </li>
                )}
              </ul>
            </div>
            <div className="years">
              <h2>Year 4</h2>
              <p><b>(Not Started)</b></p>
              <p>Courses to be determined...</p>
              <ul>
                {courseList[3].map((item) => 
                    <li key={item.key}>
                        <a href={item.link} rel="noopener noreferrer" target="_blank">{item.name}</a>
                    </li>
                )}
              </ul>
            </div>
          </div>
        </div>
    );

}

export default Courses
